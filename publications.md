---
title: Publications
layout: page
permalink: /publications/

---

{% assign publicationsByYear = site.data.publications | where_exp: "publication", "publication.id_iris != nil" | group_by: "year" | sort: "name" | reverse %}

{% for year in publicationsByYear %}
  <h1>{{ year.name }} <small>({{ year.items.size }})</small></h1>
  <div>
    {% include list-publications.html source=year.items sort="title" %}
  </div>
{% endfor %}