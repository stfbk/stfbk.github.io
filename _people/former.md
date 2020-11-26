---
title: Former People
layout: page
---

<h1>Former Members</h1>
{% assign details = "picture, formerRole, currentRole, year" | split: ", " %}
{% include list-people.html source=site.data.members.former.members style="list" details=details sort="name" %}

<h1>Former Bachelor's and Master's Students</h1>
{% assign details = "institution, thesis, year, type" | split: ", " %}
{% include list-people.html source=site.data.members.former.students style="list" details=details sort="name" %}