After almost two years, today marks the release of a new release of both our open-source TLS modular framework and the related auditable dataset of TLS requirements. Both releases include several refinements able to increase the analysis speed, provide more accurate results, and reduce the space required to deploy the tool.



Here is a more detailed breakdown of the introduced changes:

{% include toc.md %}

## TLSAssistant v3.2
A large part of the effort focused on streamlining the compliance evaluation, improving dependency stability, and resolving analysis modules’ inconsistencies.

### 1. Compliance Engine and Reporting Framework
- Dynamic Analysis & Cryptographic Upgrades: replaced legacy pyopenssl bindings with the cryptography library. Expanded signature algorithm detection and compliance tracking to dynamically evaluate algorithms based on live certificates. Support to EdDSA, post-quantum (PQ) algorithms, and specialized elliptic curve configurations (such as handling for brainpool curves);
- Report Module: transitioned the standard compliance evaluation to the current generate_report workflow and upgraded reporting renderers (including z3c.rml). - Improved STIX output generation during scan errors and enhanced user output with explicit status tags like "partially compliant";
- Multi-Host & Output Flexibility: moved multi-host scan outputs to HTML format for better readability and optimized report cleanup by removing intermediate .rml artifacts post-PDF compilation.

### 2. Analysis Modules
- Targeted Vulnerability Fixes: resolved edge-case evaluation and flag handling across multiple vulnerability modules, including RC4, nomore, mitzvah, sloth, and alpaca checks;
- Network & Host Processing Optimizations: added the --resolve-ip flag to explicitly manage domain resolution and network connectivity. Introduced graceful error handling for failed scans and domain failures, logging resolution errors as non-fatal warnings;
- HSTS & IP Edge Cases: added automated skipping for HSTS checks when targeting IP addresses.

### 3. Configuration generation & Data Integration
- Cipher & Group Extraction: resolved configuration extraction logic for OpenSSL 3.4+, preventing TLS 1.2 ciphers from surfacing in TLS 1.3-only configurations and correcting FFDHE/Oakley group recognition;
- API changes: migrated Certificate Transparency lookup operations from crt.sh to ctlogs.dev to increase reliability and prevent timeouts. Updated core dataset integrations (tls-compliance-dataset) to support modern TLS parameter standards.

### 4. CI/CD and Containerization
- Docker & Build Pipeline Optimization: re-architected container definitions into a multi-stage Docker build, fixed legacy key-value formatting warnings, and reduced final image sizes by stripping unused build layers;
- CI Test Automation: strengthened automated GitHub Actions workflows with additional testbed suites, automated vulnerability tests, and environment checkout checks.

## TLS Compliance Dataset v1.1
The changes primarily focus on integrating new compliance guidelines, refining validation conditions, and maintaining dataset accuracy.

### 1. Guideline Additions and Updates
ACN: ACN (Italian National Cybersecurity Agency) guidelines were first added in May 2025, then updated following subsequent issuances on June 2026;
CNSA: integrated support for Commercial National Security Algorithm (CNSA) guidelines in June 2026. Both the 1.0 and 2.0 requirements were integrated, along with a meta “transition” guideline. The integration has then been aligned with RFC 9151 requirements;
BSI: updated BSI federal and customer-facing guidelines to the latest publication;
ENISA: added ENISA (European Cybersecurity Agency) guidelines in May 2025;
NIST: updated NIST signature algorithms and guidelines in May 2025;
TLSRef: renamed and updated the old Mozilla Server-Side TLS configurations to match the new project name.

### 2. Guidelines Removal
NIST (pre-2024): SP 800-52 Rev. 2 contains a default set of requirements plus a second strengthening to come into force starting from January 1st, 2024. This update removes all the requirements not applicable starting from 2024.

### 3. Cryptographic Parameter Alignment
Signature Algorithms (sigalgs): split signature algorithms into distinct categories for certificates versus protocol-level usage. Updated signature algorithm conditions, and fixed certificate-level signature algorithm handling (sigalgscert);
Key Lengths Requirements: updated key sizes across guidelines to maintain coherence with Finite Field Diffie-Hellman Ephemeral (FFDHE) requirements.

### 4. Dataset Refinements
Converter Tooling & Logic Fixes: added comment support to the ods_converter tool in July 2025. Resolved issues with logical "OR" evaluation rules, condition handling, nomenclature consistency, missing dataset entries, and general documentation.
