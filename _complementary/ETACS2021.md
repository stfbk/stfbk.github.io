---
title: Do Security Reports Meet Usability? 
subtitle: Lessons Learned from Using Actionable Mitigations for Patching TLS Misconfigurations
paper: ETACS2021
conference: Workshop on Education, Training and Awareness in Cybersecurity (ETACS 2021)

people:
    - SalvatoreManfredi
    - MarianoCeccato
    - GiadaSciarretta
    - SilvioRanise

---

## The presentation is on the *ARES & CD-MAKE Conference*  [Youtube channel](https://www.youtube.com/watch?v=Ba9ISclXhG4). 

**Replication package**:
All experimental material, including the vulnerable webservers, slides and questionnaires, together with the experimental data and the assets used for the training are available [**here**](https://drive.google.com/drive/folders/1oimZX1Su7MGMixm16mvitn8I7NsA9Noo).

## Abstract
Several automated tools have been proposed to detect vulnerabilities. These tools are mainly evaluated in terms of their accuracy in detecting vulnerabilities, but the evaluation of their usability is a commonly neglected topic.
Usability of automated security tools is particularly crucial when dealing with problems of cryptographic protocols for which even small—apparently insignificant—changes in their configuration can result in vulnerabilities that, if exploited, pave the way to attacks with dramatic consequences for the confidentiality and integrity of exchanged messages. This becomes even more acute when considering such ubiquitous protocols as the one for Transport Layer Security (TLS for short).
In this paper, we present the design and the lessons learned of a user study, meant to compare two different approaches when reporting misconfigurations. Results reveal that including contextualized actionable mitigations in security reports significantly impact the accuracy and the time needed to patch TLS vulnerabilities.
Along with the lessons learned, we share the experimental material that can be used during cybersecurity labs to let students configure and patch TLS first-hand.