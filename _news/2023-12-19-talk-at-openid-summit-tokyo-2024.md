---
title: Talk at OpenID Summit Tokyo 2024
tags: [seminars]
customExcerpt: >
    On January 21, 2024, Amir Sharif will give the talk "Waiting for the EUDI Wallet: Securing the transition from SAML 2.0 to OpenID Connect" in the context of the OpenID Summit Tokyo 2024.
    
people:
    - AmirSharif
    - GiadaSciarretta
    - RobertoCarbone
    - SilvioRanise
    - FrancescoAntonioMarino
    - GiuseppeDeMarco

projects:
    - F&C_eID

peopleOrder: none
     
---

On January 19, 2024, Amir Sharif will give the talk "Waiting for the EUDI Wallet: Securing the transition from SAML 2.0 to OpenID Connect" in the context of the [OpenID Summit Tokyo 2024](https://www.openid.or.jp/summit/2024/en/). Here is the abstract of the talk:
<blockquote>
    <p>Italy has two National Digital Identity schemes, namely: SPID and CieID (the latter uses the national ID card). Both of them are based on SAML2 and are on their way to supporting OpenID Connect. The decision to embrace OpenID Connect stems from its core features, such as flexibility, ease of implementation, better support for mobile applications, widespread adoption, particularly in the private sector, and a consolidated and active community. Recognizing the importance of a smooth transition, we meticulously reviewed various documents from the OAuth Working Group, outlining security best practices, and the OpenID Foundation, specifying a profile for iGov and a framework for ecosystems of trust based on OpenID Federation 1.0. Notably, the latter introduces a hierarchical federation model emphasizing security, interoperability, scalability, and transparency through dynamic delegation mechanisms—an approach Italy eagerly adopts.</p>

    <p>In the first part of this talk, we delve into the Italian OpenID Connect 1.0 profile, founded on the iGov and Federation profiles. We clarify key security measures derived from the aforementioned specifications and best current practices, like using the issuer identifier (iss) to address Mix-Up and employing Proof Key for Code Exchange (PKCE) to mitigate code injection/replay, just to name but a few. We elaborate on how the Italian OpenID Connect 1.0 profile aligns with and implements the iGov and OpenID Federation 1.0 drafts, ensuring a secure and interoperable digital identity landscape.  The Italian OpenID Connect 1.0 profile has undergone validation in the OpenID Foundation Gain-PoC Working Group.</p>

    <p>In response to the announcement of the revised electronic Identification, Authentication, and Trust Services (eIDAS) regulation, commonly known as eIDAS 2.0, in the second part of this talk, we discuss the development of a Wallet-based solution within the Italian digital identity ecosystem as part of a migration strategy. Our journey began with delicately crafting technical specifications tailored to the unique requirements identified from eIDAS 2.0, the Architecture Reference Framework (ARF), and supplementing it with additional ones not covered in the ARF document, but required to provide a secure and privacy-preserving solution. We attempted to construct a strong, user-centric digital identification system using OpenID for Verifiable Credential Issuance, OpenID for Identity Assurance, SD-JWT VC draft, OpenID Federation 1.0 draft, and ISO 18013-5  as our starting point. We discuss how our Wallet solution integrates these documents to provide hints into our design and development, based on the security assessment performed for our National Digital Identity Schemes. We start by giving an overview of the roles and entities involved in our Wallet solution, the Large Scale Pilots that are based on it and, finally, we provide a high-level design of the Trust Model together with a description of the implications on the credential issuance flow. This provides a quick look at how these specs fit into our Wallet-based solution.</p>

    <p>We conclude the talk with a summary of the Italian Digital Identity Ecosystem and the open points in our ecosystem that require continuous monitoring and improvement. We remain dedicated to tackling these issues to improve the effectiveness and security of the Italian digital identity ecosystem.</p>
</blockquote>