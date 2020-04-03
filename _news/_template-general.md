---
title:                          # Title of the news
tags:                           # Tags of the news, in the format "[tag1, tag2, ...]" (optional)
customExcerpt:                  # A custom excerpt to display in the News list (optional, the first paragraph of the news if not provided)

people:                         # People involved in the news (optional)
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

images:                         # Attached images to show at the end of the page (optional)
    # Repeat the following structure to add more images
    - title:                    # Title of the image
      source:                   # Path to the image

publications:                   # Publications related to the news (optional)
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

Write here the content of the news. You can use both markdown and HTML syntax.