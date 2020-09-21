---
title: Micro-Id-Gym
subtitle: Identity Management Workouts with Container-Based Microservices

people:
    - AndreaBisegna_T_FBK
    - RobertoCarbone_R_FBK
    - SilvioRanise_H_FBK

publications:
    - MicroIDGym_2019

---

**Micro-Id-Gym** is a framework where users can develop hands-on experiences on how IdM solutions work and increase their awareness related to the underlying security issues.

<!--The tool is available on request. If you are interested in trying the tool, please contact us via email. 
(Contact information is available at the bottom of this webpage.)-->
{% include toc.md %}

# Architecture
The Micro-Id-Gym Backend is used to recreate locally a sandbox as an instance of an IdP and a C and it can be done by uploading the own proprietary sandbox or by composing a new sandbox choosing the instances of IdPs and Cs provided by the IdP and C repositories.

The Micro-Id-Gym Frontend consists of tools to support user pentesting activities on the System Under Test (SUT), namely a Proxy, a set of Pentesting Tools, and two tools called MSC Drawer and MSC STIX Visualizer. As already mentioned, the SUT can be a sandbox or any IdM protocol available on Internet.

<img class="image-centered" src="assets/Micro-Id-Gym/hla.png" alt="current_architecture" />

## Micro-Id-Gym Backend
The goal of the Micro-Id-Gym Backend is by construction to provide a test environment generator tailored to IdM protocols and deploy the environment in the SUT. Given a set of available IdM protocol implementations collected while using the tool for third parties, the SUT automatically sets-up a working environment in a local network.

## Micro-Id-Gym Frontend
The tools of the Micro-Id-Gym Frontend are used for the analysis of the HTTP messages generated during the authentication flow. The first step towards this process is to perform the authentication on the SUT. The messages exchanged during this process are displayed in the MSC Drawer. This is useful because at first glance the pentester can recognize whether the SUT follows the expected flow or not. The second step is to execute the automated tests provided by the Pentesting Tools.


# Additional Contributors
Bachelor's and master's students from the University of Trento,
involved in internships and theses in FBK.

- Lorenzo Tait: "A Customized Threat Modeling for Secure Deployment and
Pentesting of SAML SSO Solutions" (bachelor's thesis).

- Ivan Martini: "An Automated Security Testing Framework for SAML SSO
deployments" (bachelor's thesis).

- Valentina Odorizzi: "Progettazione e sviluppo di uno strumento per
l'analisi automatica di vulnerabilit&agrave; "Missing XML Validation" in SAML
SSO" (bachelor's thesis).

- Giulio Pellizzari: "Design and implementation of a tool to detect
Login Cross-Site Request Forgery in SAML SSO: G Suite Case Study" 
(bachelor's thesis).

- Leonidas Vasileiadis.
