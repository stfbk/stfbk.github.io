---
title: Publications
layout: page
permalink: /publications/
sort_by: id_iris
sort_natural: false
sort_reverse: true
---

<div class="columns is-multiline collaborations">
    <div class="column is-12">
        {% if site.data.publications %}
            {% assign publicationsByYear = site.data.publications | where_exp: "publication", "publication.id_iris != nil" | group_by: "year" | sort: "name" | reverse %}

            {% for year in publicationsByYear %}
                {% assign yearn = year.name | plus:0 %}
                {% if yearn >= 2018 %}
                    <h1>{{ year.name }} <small>({{ year.items.size }})</small></h1>

                    {% if year.items.size > 0 %}
                        {% include list-publications.html source=year.items sort_by="id_iris" sort_natural="false" sort_reverse="true" %}
                    {% endif %}
                {% endif %}
            {% endfor %}
        {% endif %}
    </div>

    <div class="column is-12">
        <h1>Past Publications</h1>
        <p>DAISY was formed in 2025 and RiSING was formed in 2018. Here follows the list of publications by DAISY and RiSING members released before that date.</p>
        {% for year in publicationsByYear %}
            {% assign yearn = year.name | plus:0 %}
            {% if yearn < 2018 %}
                <h2>{{ year.name }} <small>({{ year.items.size }})</small></h2>
                {% include list-publications.html source=year.items sort_by="id_iris" sort_natural="false" sort_reverse="true" %}
            {% endif %}
        {% endfor %}
    </div>
</div>