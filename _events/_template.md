---
title:                          # Title of the event
subtitle:                       # Title of the subpage (optional)
menubar:                        # Name of the side menu to show (from _data/menus/)

people:                         # People involved in the event (optional)
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

Write here the content of the page. You can use both markdown and HTML syntax.

To add a Table of Contents, just add the following code where you want it to appear:
{% include toc.md %}