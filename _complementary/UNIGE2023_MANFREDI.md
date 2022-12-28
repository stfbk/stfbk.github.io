---
title: "Automated Assistance for Actionable Security: Security and Compliance of TLS Configurations"

people:
    - SalvatoreManfredi
    - SilvioRanise
    - GiadaSciarretta

tools:
    - TLSAssistant

publications:
    - DBSec2019_TLSA
    - CPS4CIP2020_TLS
    - ETACS2021
    - JOWUA2022
    - CODASPY2022_TLSA2
    - SACMAT2022_TLSA2

---


# Abstract

Since its first version was published in 1999 as an RFC, Transport Layer Security (TLS) has rapidly become the de facto standard for providing confidentiality and integrity to communications exchanged in an unsecure environment. Despite the fact that the protocol has undergone a number of structural and logical revisions over the past 23 years, its implementations still contain a significant flaw. In essence, the lack of a default secure configuration reduces the usability of TLS because system administrators, who are responsible for its configuration, must begin with an insecure configuration, study the state of the art in terms of technologies and new vulnerabilities, and understand how to secure their deployment.

While TLS cipher suites and extensions have evolved over the past decade, increasing the protocol's overall security, supporting software has been slow to drop support for insecure ciphers, broken hash algorithms, and outdated protocol versions. All components that system administrators and app developers may accidentally make available on their systems.
In addition to managing the webserver itself, administrators must also manage cross-cutting elements such as certificate management, the TLS library, and the system on which these applications are installed.
Administrators can take advantage of the availability of state-of-the-art tools, TLS analyzers capable of detecting a wide variety of vulnerabilities on a target system. Some are downloadable, while others can be run directly through the browser, but they all share one drawback: they cannot guide system administrators and app developers through the process of fixing the discovered vulnerabilities. This partially defeats the purpose of these tools, as administrators will still need to spend time researching scientific literature and determining how to fix the discovered misconfiguration.

To assist system administrators and app developers with the crucial task of configurating their deployments, we contribute with:
- a study of the state-of-the-art in terms of TLS analyzers capable of inspecting webservers' configuration, performing vulnerability detection and compliance analysis, with a focus on their features, limitations and application domains;
    
- the design and development of TLSAssistant, a modular and extendable framework that can assist system administrators and app developers in correctly configuring TLS deployments.
    The strengths of the tool include its ability to generate actionable reports, containing accurate, concise information and code fragments that can be copied and pasted into the webserver configuration in order to mitigate the detected vulnerabilities;

- the development of a methodology that can assist users in assessing the compliance of their systems against a single or multiple agency-issued security guidelines;

- the application of TLSAssistant in a variety of corporate scenarios and projects, describing its impact and the lessons learned from its deployment. 



**Machine-readable recommendation**:
The full set of machine-readable recommendations, compiled by reviewing NIST, BSI, ANSSI, AgID and Mozilla guidelines, is made available [**here**](https://drive.google.com/drive/folders/1Qhwe4Gpr9yyMQK5xak5NDlZo5DgtfbEy).
