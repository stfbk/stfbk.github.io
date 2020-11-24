---
title: People
layout: page
permalink: /people/
---

{% assign details = "picture, role, email, website" | split: ", " %}

<h2>Head of Unit</h2>
{% include list-people.html source=site.data.members.current.head style="card" details=details sort="name" %}

<h2>Members</h2>
{% include list-people.html source=site.data.members.current.members style="card" details=details sort="name" %}

<h2>Bachelor's and Master's Students</h2>
{% assign details = "institution, topic, type, thesis" | split: ", " %}
{% include list-people.html source=site.data.members.current.students style="card" details=details sort="name" %}