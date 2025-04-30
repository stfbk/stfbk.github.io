This document provides instructions about the [DAISY website](https://daisy.fbk.eu).

Table of Contents:
- [Structure of the website](#structure-of-the-website)
- [General instructions](#general-instructions)
  - [Language](#language)
  - [Use of attachments](#use-of-attachments)
- [Common operations](#common-operations)
  - [General](#general)
    - [Add attached images](#add-attached-images)
    - [Add involved people](#add-involved-people)
    - [Add related events](#add-related-events)
    - [Add related tools](#add-related-tools)
    - [Add related publications](#add-related-publications)
    - [Add destination](#add-destination)
  - [Complementary materials](#complementary-materials)
    - [Add a new page](#add-a-new-page)
  - [Events](#events)
    - [Add a new event](#add-a-new-event)
    - [List an external event](#list-an-external-event)
  - [Projects](#projects)
    - [Add a new page](#add-a-new-page-1)
  - [Tools](#tools)
    - [Add a new page](#add-a-new-page-2)
    - [List an external tool](#list-an-external-tool)
  - [Topics](#topics)
    - [Add a related publication](#add-a-related-publication)

# Structure of the website
The website is structured as follow:
```
.
|-- _complementary/         => Complementary materials for papers
|-- _data/                  => Data to populate lists
|   └── menus/                  => Entries for side menus
|
|-- _events/                => Events
|-- _includes/              => Files to be commonly included (header, footer)
|-- _layouts/               => Custom layouts for pages
|-- _projects/              => Projects
|-- _tools/                 => Tools
|-- _topics/                => Topics (to appear in homepage)
|-- assets/                 => Assets for the website (CSS, common images)
|   └── css/                    => Stylesheets
|   └── images/                 => Common images for easy inclusion
|       └── logos/                  => Logos that are commonly used
|
|-- _config.yml             => Configuration file of the website
|-- 404.md                  => Custom 404 error page
|-- collaborations.md       => Collaborations page
|-- events.md               => Events page
|-- index.md                => Homepage
|-- projects.md             => List of projects
|-- teaching.md             => Teaching page
└── tools.md                => List of tools
```

Some folders (`_complementary`, `_projects`, `_tools` and `_topics`) also contain an `assets` subfolder where to upload images or attachments that are specifically related to a complementary material, project, tool or topic, respectively. Further information about attachment management can be found [below](#use-of-attachments).

# General instructions
## Language
This website is composed of several markdown pages that are automatically compiled and converted to HTML. Some templates (listed below) will guide through the creation of new pages. To update the website, you just need to push your changes to the repository; after a while the website will update accordingly.

On top of every page, a YAML preamble (started and ended with `---`) defines some metadata of the page (like the title and the layout to be used) as well as custom variables. Each layout requires some variables, while other may be optionally assigned; variables' values will then be parsed and placed inside the webpage according to the specific layout. Please contact Marco should you need some extra fields in any layout.

Only plaintext is allowed inside YAML preambles, while common markdown or HTML tags can be used outside.

Example of YAML syntax:
```yaml
---
# Only plaintext is allowed in YAML preambles
variable1: normal text
variable2: "text with special characters like: colons"
variable3: >
    Multiline text
    that can stand on
    different lines
    until the next assignment appears
variable4: other normal text
---

Here you can use both markdown and HTML syntax.
```

## Use of attachments
Common images can be found in and used from the folder [`assets/images`](assets/images) (e.g., logos are in [`assets/images/logos`](assets/images/logos)), without uploading them over and over.

Custom images or attachments specifically related to complementary materials, projects or tools should be uploaded in the related `assets` folder inside a new folder whose name must coincide with that of the related complementary material/project/tool page.

Custom images or attachments specifically related to events, instead, should be uploaded in a new `assets` folder inside the event folder.

Specifically:
- for **complementary materials**: inside the folder `_complementary/assets/[ConferenceAcronym][Year]/[CustomNameOfFiles]`.

- for **events**: inside the folder `_events/[EventAcronym]/assets/[CustomNameOfFiles]`.

- for **projects**: inside the folder `_projects/assets/[ProjectName]/[CustomNameOfFiles]`.

- for **tools**: inside the folder `_tools/assets/[ToolName]/[CustomNameOfFiles]`.

# Common operations
## General
The following operations can be done in any page, regardless the category.

### Add attached images
To add some images, just add the following structure in the related page:
```yaml
images:
    # Repeat the following structure to add more images
    - title:                    # Title of the image
      source:                   # Path to the image
```

Images will be displayed at the end of the page in a *lightbox* structure (i.e., a popup will open and display the image bigger when clicking on it).

### Add involved people
To add a list of involved people to a specific page, just open the [`_data/people.yml`](_data/people.yml) file and check whether the person (and the correct affiliation) is already listed. If not, just add it through the following structure:
```yaml
- id:                       # Choose a unique ID for the person, will be referenced later
  name:                     # Name
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
```

Then, insert a new line with a dash (-) followed by the assigned "id" under the `people` structure in the intended page, for instance:
```yaml
people:
  - id1
  - id2
  - [...]
```

**Important**: if the person is already listed in the `people.yml` file but with a former affiliation, please don't update the existent entry, as this would cause every page referring to the entry to update accordingly; instead, add a new entry with a different ID.

### Add related events
To add a list of related events to a specific page, they must be listed in the [`_data/events.yml`](_data/events.yml) file. Thus, insert a new line with a dash (-) followed by the assigned "id" under the `events` structure in the intended page, for instance:
```yaml
events:
  - id1
  - id2
  - [...]
```

### Add related tools
To add a list of related tools to a specific page, they must be listed in the [`_data/tools.yml`](_data/tools.yml) file. Thus, insert a new line with a dash (-) followed by the assigned "id" under the `tools` structure in the intended page, for instance:
```yaml
tools:
  - id1
  - id2
  - [...]
```

### Add related publications
To add a list of related publications to a specific page, just open the [`_data/publications.yml`](_data/publications.yml) file and check whether the publication is already listed (the list is sorted by year). If not, just add it through the following structure:
```yaml
- id:                       # Choose a unique ID for the publication, will be referenced later
  title:                    # Title of the publication
  authors:                  # Authors of the publication
  destination:              # Unique ID of the destination (see below)
  destinationAddon:         # Addon to the destination journal or proceedings (e.g., volume, pages) (optional)
  year:                     # Year of the publication
  doi:                      # DOI of the publication (optional)
  urlComplementary:         # URL to complementary material (optional)
  urlNews:                  # URL to the news of accepted paper on this website (optional)
```

Then, insert a new line with a dash (-) followed by the assigned "id" under the `publications` structure in the intended page, for instance:
```yaml
publications:
  - id1
  - id2
  - [...]
```

### Add destination
As explained in the previous section, each publication should be linked to the related destination (conference, workshop or journal) through the `destination` field.

To add a specific destination, just open the [`_data/destinations.yml`](_data/destinations.yml) file and check whether the destination is already listed (journals are on the top, while conferences and workshops are sorted by year). If not, just add it through the following structure:
```yaml
- id:                       # Choose a unique ID for the destination, will be referenced later
  name:                     # Name of the journal, conference or workshop
  proceedings:              # Name of the proceedings (optional, only if different from "name")
  acronym:                  # Acronym of  the journal, conference or workshop
  url:                      # URL of the journal, conference or workshop
  type:                     # Type of destination (among conference, journal and workshop)
  location:                 # Location of the destination (if applicable, e.g., not for journal)
  startDate:                # Starting date of the destination (if applicable, e.g., not for journal)
  endDate:                  # Ending date of the destination (if applicable, e.g., not for journal)
```

Then, insert the assigned "id" in the `destination` field within the publications list.

## Complementary materials
### Add a new page
To create a new page for a complementary material, just add a new file `[ConferenceAcronym][Year].md` to the [`_complementary`](_complementary/) folder. The content of the file should respect the [template](_complementary/_template.md).

Guidelines on attachments can be found [above](#use-of-attachments).

URL of the new page: `https://daisy.fbk.eu/complementary/[ConferenceAcronym][Year]`.

The page will **not** be listed on the website (unless explicitly linked to the related publication), but the link can be used in papers or other publications.

## Events
### Add a new event
The website can show kind of sub-websites for events. To create a new one, just create a new folder named `[EventAcronym]/` inside the `_events` folder. The main page should be named `index.md`, while other side pages can have any name as they will be explicitly linked. The content of the file should respect the [template](_events/_template.md).

Guidelines on attachments can be found [above](#use-of-attachments).

To display a menu on the right part of the page (e.g., to link other subpages) you need to create a new file called `[EventAcronym].yml` and place it in the [`_data/menus`](_data/menus) folder. The file should have this structure:
```yaml
- label:                # Label to be display on top of the menu
  items:
    # Repeat the following structure for each page
    - name:             # Name of the page
      link:             # Link to the page
```

The name of this `.yml` file should be the value of the `menubar` variable in every page related to the event.

Finally, to list the event, you should edit the file [`_data/events.yml`](_data/events.yml) and append the following structure:
```yaml
- id:                   # Choose a unique ID for the event
  name:                 # Name of the event
  acronym:              # Acronym of the event
  startDate:            # Start date in YYYY-MM-DD format
  endDate:              # End date in YYYY-MM-DD format
  description:          # Description of the event (optional)
  url:                  # URL to the event page (also external)
```

After this operation, the tool will be listed on the website (inside the [Events](https://daisy.fbk.eu/events) page).

### List an external event
To list an external event, you should just edit the file [`_data/events.yml`](_data/events.yml) and append the following structure:
```yaml
- id:                   # Choose a unique ID for the event
  name:                 # Name of the event
  acronym:              # Acronym of the event
  startDate:            # Start date in YYYY-MM-DD format
  endDate:              # End date in YYYY-MM-DD format
  description:          # Description of the event (optional)
  url:                  # URL to the event page (also external)
```

## Projects
### Add a new page
To create a new page for a project, just add a new file `[ProjectName].md` to the [`_projects`](_projects/) folder. The content of the file should respect the [template](_projects/_template.md).

Guidelines on attachments can be found [above](#use-of-attachments).

URL of the new page: `https://daisy.fbk.eu/projects/[ProjectName]`.

The project will be automatically listed on the website (inside the [Projects](https://daisy.fbk.eu/projects) page).

## Tools
### Add a new page
To create a new page for a tool, just add a new file `[ToolName].md` to the [`_tools`](_tools/) folder. The content of the file should respect the [template](_tools/_template.md).

Guidelines on attachments can be found [above](#use-of-attachments).

URL of the new page: `https://daisy.fbk.eu/tools/[ToolName]`.

The tool must then be listed by editing the page [`_data/tools.yml`](_data/tools.yml) and appending the following structure:
```yaml
- id:                   # Choose a unique ID for the tool
  name:                 # Name of the tool
  description:          # Description of the tool, will be displayed in the list
  urlCode:              # URL of the code repository (optional)
  urlDocumentation:     # URL of the documentation page (optional)
```

In this case, the `urlDocumentation` field would be the URL of the page (see above).

After this operation, the tool will be listed on the website (inside the [Tools](https://daisy.fbk.eu/tools) page).

### List an external tool
To list a tool whose documentation is not in the new website, just edit the page [`_data/tools.md`](_data/tools.md) and appending the following structure:
```yaml
- id:                   # Choose a unique ID for the tool
  name:                 # Name of the tool
  description:          # Description of the tool, will be displayed in the list
  urlCode:              # URL of the code repository (optional)
  urlDocumentation:     # URL of the documentation page (optional)
```

URLs can also point to external resources (as previously made websites or external repositories).

## Topics
### Add a related publication
Each of the topic and spotlights in homepage may contain a list of relevant papers. To add a new one, just follow the instructions [above](#add-related-publications). The pages of the topics will be found in the `_topics` folder.