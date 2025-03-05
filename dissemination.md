---
title: Dissemination
layout: page
permalink: /dissemination/

---

{% include toc.md %}

{% assign disseminationByCategory = site.data.dissemination | group_by: "category" | sort: "name" %}

{% for category in disseminationByCategory %}
  {% assign categoryID = category.name | replace: " ", "-" | downcase %}
  <h1 id="{{ categoryID }}">{{ category.name }}</h1>

  <div>
    {% include list-dissemination.html source=category.items style="table" %}
  </div>
{% endfor %}