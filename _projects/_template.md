---
project:                        # ID of the project in /data/projects.yml (DO NOT edit if already there)
leader:                         # Name of the activity leader (optional)
referenceFBK:                   # Name of the reference in FBK (optional)
duration:                       # Duration of the project (optional)
funding:                        # Funding of the project (optional)
website:                        # Official website of the project (optional)
cordisNo:                       # Number of the project within the CORDIS website (optional)

goals: >
    Write here the goals (only plaintext, also multiline, optional)

role: >
    Write here the role of the unit in the project (only plaintext, also multiline, optional)

partners:                       # Partners of the project (optional)
    # Either free text, or structured text as follows:
    # Repeat the following structure for each partner
    - name:                     # Name of the partner
      detail:                   # Details about the partner
      link:                     # Website of the partner

images:                         # Attached images to show at the end of the page (optional)
    # Repeat the following structure for each image
    - title:                    # Title of the image
      source:                   # Path to the image

## RELATED ENTITIES
# Related collaborations
collaborations:
    - # ID of collaboration 1 (from /data/collaborations.yml)
    - # ID of collaboration 2 (from /data/collaborations.yml)
    - # ...

# Related disseminations
disseminations:
    - # ID of dissemination 1 (from /data/dissemination.yml)
    - # ID of dissemination 2 (from /data/dissemination.yml)
    - # ...

# Related events
events:
    - # ID of event 1 (from /data/events.yml)
    - # ID of event 2 (from /data/events.yml)
    - # ...

# Related people
people:
    - # ID of person 1 (from /data/people.yml)
    - # ID of person 2 (from /data/people.yml)
    - # ...

# Related publications
publications:
    - # ID of publication 1 (from /data/publications.yml)
    - # ID of publication 2 (from /data/publications.yml)
    - # ...

# Related theses
theses:
    - # ID of thesis 1 (from /data/theses.yml)
    - # ID of thesis 2 (from /data/theses.yml)
    - # ...

# Related tools
tools:
    - # ID of tool 1 (from /data/tools.yml)
    - # ID of tool 2 (from /data/tools.yml)
    - # ...

---

Write here the content of the page, which appears in the "Overview" section. You can use both markdown and HTML syntax.