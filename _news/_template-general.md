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
      
---

Write here the content of the news. You can use both markdown and HTML syntax.