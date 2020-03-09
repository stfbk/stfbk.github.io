---
title: Paper accepted at ASIACCS 2020
where: 15th ACM ASIA Conference on Computer and Communications Security
whereAcronym: ASIACCS 2020
whereUrl: https://asiaccs2020.cs.nthu.edu.tw/
whereType: conference
whereLocation: Taipei, Taiwan

startDate: "2020-06-01"
endDate: "2020-06-05"

papers:
    - title: "Exploring Architectures for Cryptographic Access Control Enforcement in the Cloud for Fun and Optimization"
      authors: Stefano Berlato, Roberto Carbone, Silvio Ranise and Adam J. Lee
      abstract: >
        To facilitate the adoption of cloud by organizations, Cryptographic Access Control (CAC) is the obvious solution to control data sharing among users while preventing partially trusted Cloud Service Providers (CSP) to access sensitive data. Indeed, several CAC schemes have been proposed in the literature. Despite their differences, available solutions are based on a common set of entities—e.g., a data storage service or a proxy mediating the access of users to encrypted data—that operate in different (security) domains—e.g., on-premise or the CSP. However, the majority of the CAC schemes assumes a fixed assignment of entities to domains; this has security and usability implications that are not made explicit and can make inappropriate the use of a CAC scheme in certain scenarios with specific requirements. For instance, assuming that the proxy runs at the premises of the organization avoids the vendor lock-in effect but may substantially mine scalability. To the best of our knowledge, no previous work considers how to select the best possible architecture (i.e., the assignment of entities to domains) to deploy a CAC scheme for the requirements of a given scenario. In this paper, we propose a methodology to assist administrators to explore different architectures of CAC schemes for a given scenario. We do this by identifying the possible architectures underlying the CAC schemes available in the literature and formalize them in simple set theory. This allows us to reduce the problem of selecting the most suitable architecture satisfying a heterogeneous set of requirements arising from the considered scenario to a Multi-Objective Optimization Problem (MOOP) for which state-of-the-art solvers can be invoked. Finally, we show how the capability of solving the MOOP can be used to build a prototype tool assisting administrators to preliminary perform a ``What-if'' analysis to explore the trade-offs among the various architectures and then use available standards and tools (such as TOSCA and Cloudify) for automated deployment in multiple CSPs.

people:
    - name: Stefano
      surname: Berlato
      role: Researcher
      affiliations:
        - unit: Security & Trust
          institution: Fondazione Bruno Kessler
          place: Trento, Italy
      email: sberlato@fbk.eu
      website: https://stefanoberlato.it/
      usernameFBK: sberlato

    - name: Roberto
      surname: Carbone
      role: Researcher
      affiliations:
        - unit: Security & Trust
          institution: Fondazione Bruno Kessler
          place: Trento, Italy
      email: carbone@fbk.eu

    - name: Silvio
      surname: Ranise
      role: Head of Unit
      affiliations:
        - unit: Security & Trust
          institution: Fondazione Bruno Kessler
          place: Trento, Italy
      email: ranise@fbk.eu

    - name: Adam J.
      surname: Lee
      role: Associate Dean for Academic Programs
      affiliations:
        - unit: Computer Science Department
          institution: University of Pittsburgh
          place: Pittsburgh, United States
      email: adamlee@cs.pitt.edu
      website: https://people.cs.pitt.edu/~adamlee/
      usernameFBK: adamlee
---
