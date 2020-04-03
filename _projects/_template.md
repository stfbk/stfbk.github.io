---
title:                          # Name of the project
titleAddon:                     # Title addon (appears in parenthesis after the name in projects' list, optional)
tagline:                        # Tagline, describes the project in projects' list

startDate:                      # Start date in YYYY-MM-DD format (optional)
endDate:                        # End date in YYYY-MM-DD format (optional)

leader:                         # Activity leader (optional)
referenceFBK:                   # Name of the reference in FBK (optional)
duration:                       # Duration of the project (optional)
funding:                        # Funding of the project (optional)
website:                        # Website of the project (optional)

goals: >
    Write here the goals (only plaintext, also multiline, optional)

role:                           # Role of the Unit in the project (optional)

partners:                       # Partners of the project (optional)
    # Repeat the following structure to add more partners
    - name:                     # Name of the partner
      detail:                   # Details about the partner
      link:                     # Website of the partner

people:                         # People involved in the project (optional)
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
      usernameFBK:              # FBK username (for retrieving the picture, optional)

peopleOrder: surname            # How to order the involved people (must be one of the fields belonging to the "people" structure)

images:                         # Attached images to show at the end of the page (optional)
    # Repeat the following structure to add more images
    - title:                    # Title of the image
      source:                   # Path to the image

publications:                   # Publications related to the project (optional)
    # Repeat the following structure to add more publications
    - title:                    # Title of the publication
      authors:                  # Authors of the publication
      destination:              # Destination journal or proceedings
      destinationAddon:         # Addon to the destination journal or proceedings (e.g., volume, pages) (optional)
      year:                     # Year of the publication
      doi:                      # DOI of the publication (optional)
      urlComplementary:         # URL to complementary material (optional)
      urlNews:                  # URL to the news of accepted paper on this website (optional)

---

Write here the content of the page, it appears in the "Overview" section. You can use both markdown and HTML syntax.