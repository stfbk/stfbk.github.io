---
title: People
layout: page
permalink: /people/
---

{% assign details = "picture, role, email, website" | split: ", " %}

<h1>Head of Unit</h1>
{% include list-people.html source=site.data.members.current.head style="card" details=details sort="name" %}

<h1>Members</h1>
{% include list-people.html source=site.data.members.current.members style="card" details=details sort="name" %}

<h1>Bachelor's and Master's Students</h1>
{% assign details = "institution, topic, type, thesis" | split: ", " %}
{% include list-people.html source=site.data.members.current.students style="card" details=details sort="name" %}