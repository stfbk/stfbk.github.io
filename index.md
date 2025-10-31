---
title: DAISY - Distributed AI for dependable cyberSecuritY
subtitle: Research Unit in Fondazione Bruno Kessler
layout: page
show_logos: true
---

## Who we are

The *Distributed AI for dependable cyberSecuritY (DAISY)* research unit
focuses on developing novel AI‑driven methods for cyber threat detection in distributed computing environments, with a particular emphasis on open-world challenges and the trade-off between minimizing cybersecurity risks and preserving perceived service quality in distributed applications. 

The unit pursues its research and development activities in the
following areas:

- **AI-driven Threat and Anomaly Detection**: AI methods for detecting cyber threats and network/system anomalies that are robust to open-world challenges such as adversarial machine learning attacks and concept drift 
- **Privacy-preserving training of AI-based threat detection methods**: distributed training of AI-based Intrusion and Anomaly detection systems with no sharing of private data in plain text
- **Efficient network and system monitoring**: monitoring network and computing devices through programmable data planes
- **Service and Security Orchestration**: automated networking and cloud
  computing solutions to effectively manage business and security
  applications
- **Cyber Deception**: algorithms and tools to lure attackers into decoys
  to gain insights on their behaviour

The DAISY unit lies within the [Cybersecurity center](https://cs.fbk.eu/) in [Fondazione Bruno Kessler](https://www.fbk.eu) (FBK).

## Research Areas

{% assign researchAreas = site.data.topics | where_exp: "topic", "topic.category == 'topic'" %}
{% include list-topics.html source=researchAreas sort_by="order" sort_natural="false" %}

## In the Spotlight

{% assign researchSpotlights = site.data.topics | where_exp: "topic", "topic.category == 'spotlight'" %}
{% include list-topics.html source=researchSpotlights sort_by="order" sort_natural="false" %}
