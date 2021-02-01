---
title: Former People
layout: page
---

<h1>Former Heads of Unit</h1>
{% assign details = "formerRole, currentRole, year" | split: ", " %}
{% include list-people.html source=site.data.members.former.head style="list" details=details sort="name" %}

<h1>Former Members</h1>
{% assign details = "formerRole, currentRole, year" | split: ", " %}
{% include list-people.html source=site.data.members.former.members style="list" details=details sort="name" %}

<h1>Former PhD Students</h1>
{% assign details = "institution, thesis, year, cycle" | split: ", " %}
{% include list-people.html source=site.data.members.former.phdStudents style="list" details=details sort="name" %}

<h1>Former Bachelor's and Master's Students</h1>
{% assign details = "institution, thesis, year, type, topic" | split: ", " %}
{% include list-people.html source=site.data.members.former.students style="list" details=details sort="name" %}