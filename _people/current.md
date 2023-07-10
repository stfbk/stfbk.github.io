---
title: People
layout: page
permalink: /people/
---

<h1>Heads</h1>
{% assign details = "picture, role, internalUnit, email, phone, personalPage, website" | split: ", " %}
{% include list-people.html source=site.data.members.current.head style="card" details=details %}

<h1>Members</h1>
{% assign details = "picture, role, email, phone, personalPage, website" | split: ", " %}
{% include list-people.html source=site.data.members.current.members style="card" details=details sort="name" %}

{%- if site.data.members.current.collaborators.size > 0 -%}
  <h1>Collaborators</h1>
  {% assign details = "picture, unit, institution, email, phone, personalPage, website" | split: ", " %}
  {% include list-people.html source=site.data.members.current.collaborators style="card" details=details sort="name" %}
{%- endif -%}

{%- if site.data.members.current.students.size > 0 -%}
  <h1>Students</h1>
  {% assign details = "picture, institution, topic, type, thesis" | split: ", " %}
  {% include list-people.html source=site.data.members.current.students style="card" details=details sort="name" %}
{%- endif -%}

{%- if site.data.members.current.junior.size > 0 -%}
  <h1>FBK Junior Students</h1>
  {% assign details = "institution, topic" | split: ", " %}
  {% include list-people.html source=site.data.members.current.junior style="card" details=details sort="name" %}
{%- endif -%}