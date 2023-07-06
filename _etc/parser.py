# parser that converts a BibTeX citation

import re
import unicodedata
import os
import json

destinations = {}
global_authors = {}
with open("known_names.json") as f:
    known_names = json.load(f)
seen_ppids = []

removed_chars_ids = [".", "+", ":", "&", "-", "?", " ", ";", ",", "'", "`", "(", ")", "{", "}"]


def remove_accents(input_str):
    # Remove accents from a given string
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    only_ascii = nfkd_form.encode('ASCII', 'ignore')
    return only_ascii.decode('ASCII').strip()


def saner_journal_name(name):
    # Gets a name like IEEE TRANSACTIONS ON NETWORK AND SERVICE MANAGEMENT
    # and turns it into IEEE Transactions on Network and Service Management
    uncapitalize = ["a of", "a on", "and", "by", "for", "in", "on", "to",
                    "the", "you", "with", "without", "of", "over", "an", "a"]
    acronyms = ["IEEE", "ICDCS", "WWW", "ICCCN", "ACM", "IEEE/IFIP",
                "OSAPUBLISHING", "OSA", "IFIP", "IEEE", "EDGECOM", "GECON"]
    parts = name.split(" ")
    final_name = [parts[0].capitalize() if not parts[0].upper() in acronyms
                  else parts[0].upper()]
    open_par = False
    for part in parts[1:]:
        if part.endswith(")"):
            open_par = False
            final_name.append(part)
            continue
        if part.startswith("(") or open_par:
            open_par = True
            final_name.append(part)
            continue
        if part.upper() in acronyms:
            final_name.append(part.upper())
        elif part.lower() in uncapitalize:
            final_name.append(part.lower())
        else:
            final_name.append(part.capitalize())
    name = " ".join(final_name)
    return name


def generate_yaml(citation):
    # Generate the YAML output
    if citation == {}:
        print("Skipping empty citation")
        return

    if citation['id_full'] in seen_ppids:
        print("Skipping " + citation['id_full'] + " already seen")
        return

    ppid = citation['title'].replace(' ', '').replace(":", "").lower() + str(citation['year'])

    if "conference" in citation and "journal" in citation:
        raise RuntimeError("You cannot have both conference and journal")
    elif "conference" in citation:
        cid = filter(lambda x: x not in removed_chars_ids, citation['conference'])
        cid = "".join(cid)
        cid = remove_accents(cid).replace(' ', '').strip()
        __name = saner_journal_name(citation['conference'])
        __type = "conference"
    elif "journal" in citation:
        cid = filter(lambda x: x not in removed_chars_ids, citation['journal'])
        cid = "".join(cid)
        cid = remove_accents(cid).replace(' ', '').strip()
        __name = saner_journal_name(citation['journal'])
        __type = "journal"
    else:
        raise RuntimeError("You should have either conference or journal")

    __name = __name.strip().replace("  ", " ")
    if __name.endswith(";"):
        __name = __name[:-1]

    if __name.startswith("Proceedings"):
        __name = __name.replace("Proceedings -", "")\
                    .replace("Proceedings of the", "")\
                    .replace("Proceedings of", "")\
                    .replace("Proceedings", "")\
                    .strip()
        if __name.split(" ")[0][0].upper() != __name.split(" ")[0][0]:
            __name = __name.split(" ")[0].capitalize() + " " + " ".join(__name.split(" ")[1:])
        proc = "Proceedings of " + __name
    else:
        proc = None

    # Attempt to identify acronym
    acr = None
    # acr = re.search(r'\([A-Z0-9 ]+\)', __name)
    # if acr is not None:
    #    acr = acr[0][1:-1]

    if cid not in destinations:
        destinations[cid] = {
            "id": cid,
            "name": __name,
            "acronym": acr,
            "type": __type,
            "url": "",
        }
        if __type == "conference":
            destinations[cid]['proceedings'] = proc
            destinations[cid]['startDate'] = citation['year']
            destinations[cid]['endDate'] = citation['year']
            destinations[cid]['location'] = ""

    yaml_output = []
    yaml_output.append('- id: ' + ppid)
    yaml_output.append('  id_iris: ' + citation['id_iris'])
    yaml_output.append('  title: "' + citation['title'] + '"')
    yaml_output.append('  authors:')
    for author in citation['authors']:
        yaml_output.append('    - ' + author)
    if "abstract" in citation:
        yaml_output.append('  abstract: >')
        yaml_output.append('    ' + citation['abstract'])
    yaml_output.append('  destination: ' + cid)
    yaml_output.append('  year: ' + str(citation['year']))
    if "doi" in citation:
        yaml_output.append('  doi: ' + citation['doi'])

    seen_ppids.append(citation['id_full'])

    return '\n'.join(yaml_output)


def parse_bibtex(bibtex):
    # Extract key-value pairs from BibTeX citation using regular expressions
    citation = {}
    yamls = []

    for line in bibtex.split('\n'):
        if line.strip() == "}":
            y = generate_yaml(citation)
            if y is not None:
                yamls.append(y)
            continue
        if line.startswith('@'):
            citation = {}
            continue
        if "=" not in line:
            if citation != {}:
                continue
            else:
                citation["id_full"] = line.strip()
                citation["id_iris"] = line.strip().split("_")[1]
                continue
        # Parse the line through regex
        regex = re.search(r' *([^=]+) *= *{(.*)},?', line)

        if regex is None:
            continue

        key, value = regex.groups()
        key = key.lower().strip()
        if key == 'author':
            # Split authors and format their names
            # Possible formats:
            # 	author = {Savi, Marco and Pederzolli, Federico and Siracusa, Domenico},
            # 	author = {Rozic, C. and Savi, M. and Matrakidis, C. and Klonidis, D. and Siracusa, D.},
            # should become ['MarcoSavi', 'FedericoPederzolli', 'DomenicoSiracusa'],
            # should become ['C.Rozic', 'M.Savi', 'C.Matrakidis', 'D.Klonidis', 'D.Siracusa'],
            # Remember to invert the order of the names
            xauthors = value.strip().split(" and ")
            authors = []
            for author in xauthors:
                surname, name = author.strip().split(",")
                shortened_name = f"{name}{surname}".strip().replace(" ", "")
                shortened_name = remove_accents(shortened_name)
                if shortened_name in known_names:
                    name, surname = known_names[shortened_name]
                    shortened_name = f"{name}{surname}".replace(" ", "")
                if shortened_name not in global_authors:
                    global_authors[shortened_name] = (name, surname)
                authors.append(shortened_name)
            citation['authors'] = authors
        elif key == 'title':
            citation['title'] = value.strip()
        elif key == 'year':
            citation['year'] = int(value)
        elif key == 'abstract':
            citation['abstract'] = value.strip()
        elif key == 'doi':
            citation['doi'] = value.strip()
        elif key == 'pages':
            citation['pages'] = value.strip()
        elif key == 'number':
            citation['number'] = int(value)
        elif key == 'journal':
            citation['journal'] = value.strip().replace(": ", " ")
        elif key == 'booktitle':
            citation['conference'] = value.strip().replace(": ", " ")
        elif key == 'volume':
            citation['volume'] = value.strip()
        elif key == 'url':
            citation['url'] = value.strip()

    return yamls


def main():
    # Load the BibTeX citation from standard input
    files = os.listdir("tmp")
    files = list(sorted(filter(lambda x: x.endswith(".bib"), files)))
    data = ""

    if "tmp/publications_generated.yml" in files:
        os.remove("tmp/publications_generated.yml")
    if "tmp/people_generated.yml" in files:
        os.remove("tmp/people_generated.yml")
    if "tmp/destinations_generated.yml" in files:
        os.remove("tmp/destinations_generated.yml")

    for filename in files:
        with open("tmp/" + filename) as f:
            data += f.read()
        data += "\n"

    yamls = parse_bibtex(data)
    with open('tmp/publications_generated.yml', 'w') as publications:
        for _, y in enumerate(yamls):
            print(y, file=publications)
            print("\n", file=publications)

    registered_authors = os.popen("cat ../_data/people.yml | grep \"#--#--#--#--#--#\" -B 100000 | yq eval '.[] | [.name,.surname] | join(\"\")' | sed \"s/ //g\"").read().splitlines()

    with open('tmp/people_generated.yml', 'w') as people:
        for k in global_authors:
            if k in registered_authors:
                continue
            print(
                "- id: " + k + "\n" +
                "  name: " + global_authors[k][0].replace("-", " ") + "\n"+
                "  surname: " + global_authors[k][1] + "\n",
                file=people)
    # Parse conferences
    with open('tmp/destinations_generated.yml', 'w') as destinationsf:
        for k in destinations.keys():
            v = destinations[k]
            name = v["name"]
            __type = v["type"]
            data = "- id: " + k + "\n" + \
                "  name: " + name + "\n" + \
                "  type: " + __type + "\n"

            if v["url"] is not None and v["url"] != "":
                data += "  url: " + v["url"] + "\n"

            if __type == 'conference':
                if v["acronym"] is not None and v["acronym"] != "":
                    data += "  acronym: " + v["acronym"] + "\n"
                if v["proceedings"] is not None and v["proceedings"] != "":
                    data += "  proceedings: " + v["proceedings"] + "\n"
                if v["location"] is not None and v["location"] != "":
                    data += "  location: " + v["location"] + "\n"

            print(data, file=destinationsf)


if __name__ == '__main__':
    main()
