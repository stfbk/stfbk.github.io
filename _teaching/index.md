---
title: Teaching
layout: page
permalink: /teaching/
---

# Courses

{% assign courses_BSc = site.data.teaching | where_exp: "course", "course.level contains 'BSc'" | sort: "name" %}
{% assign courses_MSc = site.data.teaching | where_exp: "course", "course.level contains 'MSc'" | sort: "name" %}
{% assign courses_BSc_MSc = "" | split: "" %}
{% for course in courses_BSc %}
  {% unless courses_BSc_MSc contains course %}
    {% assign courses_BSc_MSc = courses_BSc_MSc | push: course %}
  {% endunless %}
{% endfor %}
{% for course in courses_MSc %}
  {% unless courses_BSc_MSc contains course %}
    {% assign courses_BSc_MSc = courses_BSc_MSc | push: course %}
  {% endunless %}
{% endfor %}
{% if courses_BSc_MSc.size > 0 %}
  <section class="teaching-section bsc-msc-courses">
    <h2>Bachelor's and Master's Courses</h2>
    {% include list-teaching.html source=courses_BSc_MSc style="table" %}
  </section>
{% endif %}

{% assign courses_PhD = site.data.teaching | where_exp: "course", "course.level contains 'PhD'" | sort: "name" %}
{% if courses_PhD.size > 0 %}
  <section class="teaching-section phd-courses">
    <h2>PhD Courses</h2>
    {% include list-teaching.html source=courses_PhD style="table" %}
  </section>
{% endif %}

{% assign courses_highSchools = site.data.teaching | where_exp: "course", "course.level contains 'High School'" | sort: "name" %}
{% if courses_highSchools.size > 0 %}
  <section class="teaching-section high-school-courses">
    <h2>High School Courses</h2>
    {% include list-teaching.html source=courses_highSchools style="table" %}
  </section>
{% endif %}

{% assign courses_other = site.data.teaching | where_exp: "course", "course.level == nil" | sort: "name" %}
{% if courses_other.size > 0 %}
  <section class="teaching-section other-courses">
    <h2>Other Courses</h2>
    {% include list-teaching.html source=courses_other style="table" %}
  </section>
{% endif %}
