---
title: Security & Trust
subtitle: Research Unit in Fondazione Bruno Kessler
layout: page
show_logos: true
---

# Who We Are
In line with the mission of [Fondazione Bruno Kessler](https://www.fbk.eu/en) (FBK), which aims to achieve scientific research of excellence and have an impact on society, the Security & Trust Research Unit of the [Center for Cybersecurity](https://cs.fbk.eu/) of FBK develops cutting-edge security solutions in the following areas:
- Identity and Access Management (e.g., on-boarding, single and multi-factor authentication, access delegation, authorization and access control)
- Legal compliance (e.g., privacy and e-payment provisions)
- Complex and Heterogeneous systems (e.g., API, Cloud, Mobile, IoT and Blockchain)

# Research Areas
{% assign researchAreas = site.data.topics | where_exp: "topic", "topic.category == 'topic'" %}
{% include list-topics.html source=researchAreas %}

# In the Spotlight
{% assign spotlights = site.data.topics | where_exp: "topic", "topic.category == 'spotlight'" %}
{% include list-topics.html source=spotlights %}