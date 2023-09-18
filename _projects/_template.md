---
project:                             # ID of the project in /data/projects.yml
leader:                         # Activity leader (optional)
referenceFBK:                   # Name of the reference in FBK (optional)
duration:                       # Duration of the project (optional)
funding:                        # Funding of the project (optional)
website:                        # Official website of the project (optional)
cordisNo:                       # Number of the project within the CORDIS website (optional)

goals: >
    Write here the goals (only plaintext, also multiline, optional)

role:                           # Role of the Unit in the project (optional)


people:                         # People involved in the project (optional)
    # For each person, add details on _data/people.yml
    # Then, add here a new line with a dash (-) followed by the assigned "id"

peopleOrder: surname            # How to order the involved people (must be one of the fields belonging to the "people" structure)

images:                         # Attached images to show at the end of the page (optional)
    # Repeat the following structure to add more images
    -       source:                   # Path to the image

publications:                   # Publications related to the project (optional)
    # For each publication, add details on _data/publications.yml
    # Then, add here a new line with a dash (-) followed by the assigned "id"

---

Write here the content of the page, it appears in the "Overview" section. You can use both markdown and HTML syntax.