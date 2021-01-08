---
title: "Digital identity: enrollment, authentication, and all that"

people:
    - GiadaSciarretta
    - RobertoCarbone
    - SilvioRanise

peopleOrder: surname
      
publications:
    - CODASPY2020_PN
    - TOPS2020
    - ETAA2020_OIDC 
---

The course introduces the basic notions underlying the various aspects of digital identity management with a focus on a security-by-design approach complemented with the use of automated formal analysis techniques for security. First, it is explained why identity is the building block of any security strategy for current and future applications and services. Then, the various phases of the life cycle of digital identities are explained and the main security issues are highlighted. The interdependencies among the design and implementation choices performed in the various phases are also discussed.  Finally, solutions for enrollment and authentication are described together with threat models and the most important mitigation techniques.  During the various topics, the security goals and the security analysis problems are formalized so that automated analysis techniques based on constraint solving and model checking can be used to assist designers in the various phases of the development. Digital identity management solutions taken from the real world are considered to illustrate the various notions and techniques.

*Program:*

* Basics of digital identity management: the life cycle of digital identity, standards (SAML 2.0 and OpenID Connect), some scenarios (SPID and Carta Identità Digitale 3.0)
* Security issues and mitigations: direct and indirect attacks, types of attackers and their capabilities, security analysis at different level of abstractions (authentication factors or cryptographic protocols)
* Security analysis at work: Carta Identità Digitale 3.0 and Cartella Clinica del Cittadino (TreC).

**Period:** end of April, 2021 

**Duration**: 20 hours (5 half-days)

**Location:** online course (the link will be communicated to the registered students)

**Assessment Method:** small project or oral presentation of relevant literature

# Syllabus

------

##### Part 1: Introduction to Identity Management (IdM)

Overview of the course

Basics on IdM
* Digital identity lifecycle: 
   * Enrollment 
   * Authentication
   * Authorization
* Assurance levels
* Limits of password-based authentication 
* Passwordless authentication 
* Multi-factor authentication 
* Single-Sign On (SAML, OIDC)

Focus on two IdM standards
* A standard for SSO and Access Delegation: OAuth 2.0/OIDC  
* A standard for passwordless authentication: FIDO2 

Security issues of SSO protocols at design and implementation level
* Security-by-design examples  
* Wrong implementation choices  

Digital identity solutions for legal provisioning                
* eIDAS 
   * SPID 
   * CIE 3.0 
* PSD2 basics: SCA and dynamic linking 

Digital identity solutions for (legal) contract signing 
* Electronic signatures 
* Attribute provisioning  

Distributed identity
* Self-sovereign identity (DID) 
* Discussion on CIE  

##### Part 2: Our methodology and tools 

Our methodology for the design, development, and maintenance of IdM solutions 

Use case scenarios level (MuFASA)

Cryptographic protocol level - part 1

Cryptographic protocol level - part 2 (SATMC)

Implementations level - part 1 (MicroID Gym)

Implementations level - part 2 (TLSAssistant)

