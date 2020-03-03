---
title:                          # Title of the tool
subtitle:                       # Subtitle of the tool (optional)

people:                         # People involved in the tool (optional)
    # Repeat the following structure to add more involved people
    - name:                     # Name
      surname:                  # Surname
      role:                     # Role (optional)
      affiliations:
        # Repeat the following structure to add more affiliations
        - unit:                 # Unit or Department (optional)
          institution:          # Institution
          place:                # Place of the institution
      email:                    # Email
      website:                  # Website (optional)
      image:                    # URL of a picture (optional)
      usernameFBK:              # FBK username (what is before "@fbk.eu", for retrieving the picture, optional)

peopleOrder: surname            # How to order the involved people (must be one of the fields belonging to the "people" structure)

---

Write here the content of the page. You can use both markdown and HTML syntax.

To add a Table of Contents, just add the following code where you want it to appear:
{% include toc.md %}