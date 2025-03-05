---
title: Events
layout: page
permalink: /events/
---

{% assign todayDate = 'now' | date: '%Y-%m-%d' %}
{% assign currentEvents = site.data.events | where_exp: "event", "event.startDate <= todayDate" | where_exp: "event", "event.endDate >= todayDate" | sort: "startDate" | reverse %}
{% assign incomingEvents = site.data.events | where_exp: "event", "event.startDate > todayDate" | sort: "startDate" | reverse %}
{% assign pastEvents = site.data.events | where_exp: "event", "event.endDate < todayDate" | sort: "startDate" | reverse %}

{% if currentEvents.size > 0 %}
  <h1>Ongoing Events</h1>
  <div>
    {% include list-events.html source=currentEvents %}
  </div>
{% endif %}

{% if incomingEvents.size > 0 %}
  <h1>Incoming Events</h1>
  <div>
    {% include list-events.html source=incomingEvents %}
  </div>
{% endif %}

{% if pastEvents.size > 0 %}
  <h1>Past Events</h1>
  <div>
    {% include list-events.html source=pastEvents %}
  </div>
{% endif %}