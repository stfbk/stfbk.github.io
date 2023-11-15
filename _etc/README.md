# Publication Auto-Updater

This folder contains tools that connect to Fondazione Bruno Kessler's IRIS database and automatically fetches publications of its members.

To get started, in the `_data/people.yml` make sure your researchers have been properly tagged with their IRIS ID:

```yaml
- id: DomenicoSiracusa
  name: Domenico
  surname: Siracusa
  email: dsiracusa@fbk.eu
  iris_id: rp123456
```

To obtain such ID, open the [IRIS database](http://cris.fbk.eu) and search for your name.

Once every researcher has the `iris_id` field set, you have to trigger the publication fetch process as follows:

1. Change your working directory to the one containing this README.
3. Run the `getbibs.sh` script. This will create a `tmp` folder, containing `bib` files for every researcher.
4. Run `python3 parser.py` (no particular options or packages needed). This will read the `bib` files and create three files in the `tmp` folder, called:
  - `destinations_generated.yml`: a list of venues and journals, indexed by an automatically generated ID,
  - `people_generated.yml`: a list of researchers, identified by a `NameSurname` ID,
  - `publications_generated.yml`: a list of publications, indexed by an automatically generated ID.
4. The first time you run the script, it is very likely the `people` file will be filled with duplicate entries. This is because the IRIS API does not return a canonical name for users. Sadly, the only way of addressing this issue is by sheer hand. Create or edit the file called `known_names.json`, adding alias entries for every researcher, e.g.,
```json
{
    "D.Siracusa": [
        "Domenico",
        "Siracusa"
    ],
    ...
}
```
5. Run the `python3 parser.py` script again. If everything went well, the generated files will not contain duplicate entries anymore.
6. Make sure each corresponding file in `_data/*.yml` contains the following universal separator:
```plaintext
# The following string is a separator used by the parser to trim away generated content
# Please, please, please, keep this here!
#--#--#--#--#--#
```
7. Run the `merge_yamls.sh` script to merge each of the three files with the corresponding `_data/*.yml` file in the web server. For each of the three files, the script will discard the contents after the above separator and then append the contents of the corresponding `.yml` file in `tmp`, generating an updated and merged file.
