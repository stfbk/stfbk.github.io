---
title: Former People
layout: page
permalink: /people/former
---

{% include toc.md %}

{%- if site.data.members.former.head.size > 0 -%}
  <h1>Former Heads of Unit</h1>
  {% assign details = "formerRole, currentRole, year, personalPage" | split: ", " %}
  {% include list-people.html source=site.data.members.former.head style="list" details=details sort="name" %}
{%- endif -%}

{%- if site.data.members.former.members.size > 0 -%}
  <h1>Former Members</h1>
  {% assign details = "formerRole, currentRole, year, personalPage" | split: ", " %}
  {% include list-people.html source=site.data.members.former.members style="list" details=details sort="name" %}
{%- endif -%}

{%- if site.data.members.former.phdStudents.size > 0 -%}
  <h1>Former PhD Students</h1>
  {% assign details = "institution, thesis, year, cycle, personalPage" | split: ", " %}
  {% include list-people.html source=site.data.members.former.phdStudents style="list" details=details sort="name" %}
{%- endif -%}

{%- if site.data.members.former.students.size > 0 -%}
  <h1>Former Bachelor's and Master's Students</h1>
  {% assign details = "institution, thesis, year, type, topic" | split: ", " %}
  {% include list-people.html source=site.data.members.former.students style="list" details=details sort="name" %}
{%- endif -%}

{%- if site.data.members.former.junior.size > 0 -%}
  <h1>Former FBK Junior Students</h1>
  {% assign details = "institution, year, topic" | split: ", " %}
  {% include list-people.html source=site.data.members.former.junior style="list" details=details sort="name" %}
{%- endif -%}