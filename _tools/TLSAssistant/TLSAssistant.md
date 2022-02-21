---
title: TLSAssistant
permalink: /tools/TLSAssistant/

people:
    - SalvatoreManfredi
    - SilvioRanise
    - GiadaSciarretta
    - MatteoRizzi

publications:
    - DBSec2019_TLSA
    - ICTSecMag202006_TLSA
    - CPS4CIP2020_TLS
    - SecAssAPIFinancial_book_2020
    - ETACS2021
    - CODASPY2022_TLSA2

---

**TLSAssistant** is a modular extensive framework that combines state-of-the-art TLS analyzers with a report system that suggests appropriate mitigations and shows the full set of viable attacks. It is open-source, released under [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) license and and you can contribute by visiting the project's [repository](https://github.com/stfbk/tlsassistant). 

The tool has been developed within [Digimat](https://ict.fbk.eu/partnerships/co-innovation-labs/ipzs/), a joint lab between [Poligrafico e Zecca dello Stato](https://www.ipzs.it/ext/index.html) and the [Center for Cybersecurity](https://www.fbk.eu/it/cybersecurity/) of the Fondazione Bruno Kessler .

<img class="image-centered" src="/assets/images/logos/IPZS.png" alt="IPZS_logo" width="400px"/>

{% include toc.md %}



# Architecture

<img class="image-centered" src="../assets/TLSAssistant/current_architecture.png" alt="current_architecture" />

**TLSAssistant v2** is an evolution of the previous monolithic version: [TLSAssistant v1.x](https://github.com/stfbk/tlsassistant/tree/v1.x)

It currently integrates four tools:

* Android analysis
  * [mallodroid](https://github.com/stfbk/mallodroid)
  * [SUPERAnalyzer](https://github.com/SUPERAndroidAnalyzer/super)
* Server analysis
  * [testssl.sh](https://github.com/drwetter/testssl.sh)
  * [tlsfuzzer](https://github.com/tomato42/tlsfuzzer)

To have a deeper understanding of the architecture, we must first grasp how it is organized. 

TLSAssistant makes advantage of the idea of a "Module," which is a collection of objects and classes that are joined in the same file by context (e.g., the type of vulnerability analyzed). Each module adheres to [standards](#standards) that must be followed in order to develop a compliant module. 

We have different type of modules

* **Analysis Modules:** modules that perform the analysis using independent code or external tools. This type of module will employ a submodule called **wrapper** to interface with external tools. The **output module** receives the Analysis module's output. 
  * **Wrapper Modules**: modules that wrap an external software or an API call. Given that output must be refined by the Analysis module, a wrapper should not be directly connected to the output module. Most of the time, the wrapper is an entire API of non-Python software.
* **Core Module**: the modules' router. It parses the specified configuration, runs each module, gathers the output and redirects it to the output module.
* **Output Module**: formats the output properly by according to the mitigation standard and the provided information.

## Defined standards

- [Modules](Standard_TLSAssistant_Modules)
- [Mitigations](Standard_Mitigations)
- [Configurations](Config_Requirements_TLSA) 

## List of modules

### Server-related 

#### Wrapper Modules

| Module name | Wraps                                                        |
| ----------- | ------------------------------------------------------------ |
| testssl.sh  | testssl.sh subprocess call                                   |
| HSTS HTTPS  | API Call to check HSTS SET, Preloading and HTTPS Enforcement. Can be used to obtain information about the webserver. |
| tlsfuzzer   | tlsfuzzer script selection and call, following parameters and parsing output. |
| Certificate | Subdomain enumeration by crt.sh API call. Useful for `*.mysite.tld` |

#### Analysis Modules

| Module Name              | Wrapper Used |
| ------------------------ | ------------ |
| 3SHAKE                   | testssl.sh   |
| BEAST                    | testssl.sh   |
| BREACH                   | testssl.sh   |
| CCS Injection            | testssl.sh   |
| Certificate Transparency | testssl.sh   |
| CRIME                    | testssl.sh   |
| DROWN                    | testssl.sh   |
| FREAK                    | testssl.sh   |
| HEARTBLEED               | testssl.sh   |
| HSTS preloading          | HSTS HTTPS   |
| HSTS set                 | HSTS HTTPS   |
| HTTPS enforced           | HSTS HTTPS   |
| LOGJAM                   | testssl.sh   |
| Lucky13                  | testssl.sh   |
| Mitzvah                  | testssl.sh   |
| NOMORE                   | testssl.sh   |
| Perfect Forward Secrecy  | testssl.sh   |
| Poodle                   | testssl.sh   |
| Renegotiation            | testssl.sh   |
| ROBOT                    | testssl.sh   |
| SLOTH                    | tlsfuzzer    |
| Sweet32                  | testssl.sh   |
| TicketBleed              | testssl.sh   |

### Android-Related

#### Wrapper Modules

| Module Name   | Wraps                               |
| ------------- | ----------------------------------- |
| mallodroid    | Mallodroid python3 import and call. |
| SUPERAnalyzer | SUPERAnalyzer subprocess call.      |

#### Analysis Modules

| Module Name                        | Wrapper Used  |
| ---------------------------------- | ------------- |
| Accepting all SSL Certificates     | SUPERAnalyzer |
| Certificate or KeyStore Disclosure | SUPERAnalyzer |
| Weak HostnameVerifier              | mallodroid    |
| Obfuscated Code                    | SUPERAnalyzer |
| SSL GetInsecure Method             | SUPERAnalyzer |
| SSL Error                          | mallodroid    |
| Weak TrustManager                  | mallodroid    |
| Weak Algorithms                    | SUPERAnalyzer |
| WebView has SSL Errors             | SUPERAnalyzer |

###   Core and Output related

| Module Name               | Type   |
| ------------------------- | ------ |
| Core                      | Core   |
| Stix                      | Output |
| Configuration             | Core   |
| Parse Input Configuration | Core   |
| Report                    | Output |



## Flow

In this architecture, we have two different flow:

* **Flow of the end-user:**

  To add a new Analysis module (see left of Architecture Figure), the developer must follow the provided standard. As a result, the new functionality will be detected and implemented by the Core module. In addition to providing the code for implementing the tests for identifying a vulnerability, if a mitigation is known, the developer should define it by producing a JSON file in accordance with the mitigation standards.

* **Flow of the developer:**

  The end-user decides which modules to utilize in the analysis in Step 1 (see right of Architecture Figure) by supplying a configuration file or a command line list. Each configuration file is a context-specific collection of modules that conducts a certain kind of analysis (e.g., checking for vulnerabilities related to weak TLS ciphers). Step 2: The Core loads the configuration (if supplied) and the modules (from the list or configuration), ensuring that they are relevant to the kind of analysis requested. 

## Type of Analysis

Here a quick overview of the various types of analysis that may be requested:

1. **Single Host**: Because the testssl.sh program covers the majority of the vulnerabilities assessed by the tool, we decided to make the analysis more efficient by doing a pre-analysis (Step 3a) to create a cache with its results. During current and future analysis, they will be utilized by each of the related testssl.sh modules (Step 3b), such as POODLE (an attack that uses the availability of SSLv3 to weaken the connection).
2. **Single APK**: Each Android-related module, such as Unsecure TrustManager, performs the analysis (Step 3b) on the given APK.
3. **Multiple Hosts**: On each of the domains supplied in an input list, we execute a Single Host analysis. Each result is concatenated and delivered as a single output to the Output module. The list can also be generated by subdomain enumeration.
4. **TLS Configuration and Fixes**: If a configuration file is given, a WhiteBox analysis is conducted by loading the TLS configuration into memory and checking all accessible modules (Step 3b). Otherwise, if a configuration file and a valid hostname are given, a single host analysis is conducted, and the corrections are then merged into the provided TLS configuration. This is referred to as a Hybrid study since we run a BlackBox analysis on the hostname and then apply the changes to the configuration file.

## Caching system

Each wrapper module includes a caching mechanism. Because it is unlikely that any value would change dramatically in a single runtime, the caching approach allows the program to be less invasive and more powerful (with a runtime usually less than a minute).

### Pre-analysis (testssl.sh)

As stated before, a pre-analysis (step 3a) is required as a compromise between atomicity, efficiency, and execution speed. Because the testssl startup time is roughly 3 seconds, we need to limit the number of times the tool is called. To do this, the core will determine if the module being run is utilizing testssl.sh as a wrapper, and if so, it will get all testssl-related arguments. Following this, the core will fill the testssl wrapper cache, which will be executed once the analysis is complete.

# Demo video
<div class="h_iframe">
    <iframe src="https://drive.google.com/file/d/1ejI6QGQ3A9trs0U4ce8aprLVeDYrK5H-/preview"></iframe>
</div>
