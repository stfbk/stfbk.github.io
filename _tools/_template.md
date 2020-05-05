---
title:                          # Title of the tool
subtitle:                       # Subtitle of the tool (optional)

people:                         # People involved in the project (optional)
    # For each person, add details on _data/people.yml
    # Then, add here a new line with a dash (-) followed by the assigned "id"

peopleOrder: surname            # How to order the involved people (must be one of the fields belonging to the "people" structure)

images:                         # Attached images to show at the end of the page (optional)
    # Repeat the following structure to add more images
    - title:                    # Title of the image
      source:                   # Path to the image

publications:                   # Publications related to the project (optional)
    # For each publication, add details on _data/publications.yml
    # Then, add here a new line with a dash (-) followed by the assigned "id"

---

Write here the content of the page. You can use both markdown and HTML syntax.

To add a Table of Contents, just add the following code where you want it to appear:
{% include toc.md %}