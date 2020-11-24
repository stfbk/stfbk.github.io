---
title: Former People
layout: page
---

<h2>Former Members</h2>
{% assign details = "picture, formerRole, currentRole, year" | split: ", " %}
{% include list-people.html source=site.data.members.former.members style="list" details=details sort="name" %}

<h2>Former Bachelor's and Master's Students</h2>
{% assign details = "institution, thesis, year, type" | split: ", " %}
{% include list-people.html source=site.data.members.former.students style="list" details=details sort="name" %}