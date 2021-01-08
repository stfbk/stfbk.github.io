---
title: "Digital identity: enrollment, authentication, and all that"
layout: page

people:
    - GiadaSciarretta
    - RobertoCarbone
    - SilvioRanise

peopleOrder: surname
      
publications:
    - CODASPY2020_PN
    - TOPS2020
    - ETAA2019_MuFASA
    - ETAA2020_MIG
---

The course introduces the basic notions underlying the various aspects of digital identity management with a focus on a security-by-design approach complemented with the use of automated formal analysis techniques for security. First, it is explained why identity is the building block of any security strategy for current and future applications and services. Then, the various phases of the life cycle of digital identities are explained and the main security issues are highlighted. The interdependencies among the design and implementation choices performed in the various phases are also discussed.  Finally, solutions for enrollment and authentication are described together with threat models and the most important mitigation techniques.  During the various topics, the security goals and the security analysis problems are formalized so that automated analysis techniques based on constraint solving and model checking can be used to assist designers in the various phases of the development. Digital identity management solutions taken from the real world are considered to illustrate the various notions and techniques.

**Period:** end of April, 2021 

**Duration**: 20 hours (5 half-days)

**Location:** online course (the link will be communicated to the registered students)

**Schools:** [University of Trento - Mathematics Doctoral Programme](https://www.unitn.it/drmath/46/courses),  [University of Genova - PhD Program in Security, Risk and Vulnerability](https://sicurezza.unige.it/)

**Assessment Method:** small project or oral presentation of relevant literature

# Syllabus

The course is divided into two parts. *Part 1* introduces the basic notions underlying the various aspects of digital identity management; while *Part 2* describes the methodology developed in our unit for the automated security analysis of identity management solutions.

##### Part 1: Introduction to Identity Management 

- Overview of the course

- Basics on Identity Management
  - Digital identity lifecycle (enrollment, authentication, authorization)
  - Assurance levels
  - Passwordless authentication 
  - Multi-factor authentication 
  - Single-Sign On (SAML, OIDC)
- Focus on two Identity Management standards
  - A standard for SSO and Access Delegation: OAuth 2.0/OIDC  
  - A standard for passwordless authentication: FIDO2 
- Security issues of SSO protocols at design and implementation level (security-by-design examples, wrong implementation choices) 
- Digital identity solutions for legal provisioning (eIDAS, SPID, CIE 3.0, PSD2)
- Digital identity solutions for (legal) contract signing (electronic signatures, attribute provisioning)  
- Distributed identity (self-sovereign identity - DID) 

##### Part 2: Our methodology and tools 

- Our methodology for the design, development, and maintenance of IdM solutions 

- Use case scenarios level (MuFASA - a tool for high-level specification and analysis of multi-factor authentication)

- Cryptographic protocol level - part 1

- Cryptographic protocol level - part 2 (SATMC - a SAT-based Model-Checker for security protocols)

- Implementations level - part 1 (MicroID Gym - an identity management workout with container-based microservices)

- Implementations level - part 2 (TLSAssistant - a tool for the analysis of TLS configuration with a report system that suggests appropriate mitigations)


