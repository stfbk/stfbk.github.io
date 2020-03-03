---
title:                          # Title of the news (e.g., Seminar by ...)
seminarTitle:                   # Title of the seminar (optional)
topic:                          # Topic of the seminar (optional)
speaker:                        # Name of the speaker
date:                           # Date and time of the seminar, in the format: YYYY-MM-DD HH:MM"
location:                       # Location of the seminar
abstract: >
    Write here the abstract (only plaintext, also multiline, optional)
bio: >
    Write here the speaker's bio (only plaintext, also multiline, optional)

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

Write here some extra information to show (optional). You can use both markdown and HTML syntax.