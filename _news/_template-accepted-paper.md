---
title:                          # Title of the news (e.g., Paper(s) accepted at [Acronym])
where:                          # Full name of the conference/journal
whereAcronym:                   # Acronym of the conference/journal (optional)
whereUrl:                       # Website of the conference/journal (optional)
whereType:                      # Type of publication (conference, journal, workshop)
whereLocation:                  # If applicable, the location (optional)

startDate:                      # If applicable, the start date in YYYY-MM-DD format (optional)
endDate:                        # If applicable, the end date in YYYY-MM-DD format (optional)

papers:
    # Repeat the following structure for each accepted paper
    - title:                    # Title of the paper
      authors:                  # Authors of the paper
      abstract: >
        Write here the abstract (only plaintext, also multiline, optional)

people:                         # People involved in the project (optional)
    # For each person, add details on _data/people.yml
    # Then, add here a new line with a dash (-) followed by the assigned "id"

images:                         # Attached images to show at the end of the page (optional)
    # Repeat the following structure to add more images
    - title:                    # Title of the image
      source:                   # Path to the image

---

Write here some extra information to show (optional). You can use both markdown and HTML syntax.