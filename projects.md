---
title: Projects
layout: page
permalink: /projects/
---

Here you can find a list of the projects the unit is/has been involved in.

{% assign todayDate = 'now' | date: '%Y-%m-%d' %}
{% assign currentProjectsWithoutEnd = site.data.projects | where_exp: "project", "project.endDate == nil" %}
{% assign currentProjectsWithEnd = site.data.projects | where_exp: "project", "project.endDate >= todayDate" %}
{% assign currentProjects = currentProjectsWithoutEnd | concat: currentProjectsWithEnd %}
{% assign formerProjects = site.data.projects | where_exp: "project", "project.endDate < todayDate" %}

<h1>Current Projects</h1>
<div>
  {% include list-projects.html source=currentProjects style="card" %}
</div>

<h1>Former Projects</h1>
<div>
  {% include list-projects.html source=formerProjects style="card" %}
</div>