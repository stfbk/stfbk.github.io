---
title: 1st International Workshop on Security and Risk in Identity Management (SeRIM 2025)
subtitle: Keynote
menubar: SeRIM2025
---

<div class="keynote">
    <h2 class="title">Modeling the Web to Secure the Web: Formal Analysis of Single Sign-On Authentication and Authorization Protocol Standards</h2>
    <div class="speaker">
        <p class="name">Prof. Dr. Ralf Küsters</p>
        <p class="affiliation">University of Stuttgart</p>
    </div>
    <div class="abstract">
        <p>Over the past decade, web-based authorization and authentication protocols—such as OAuth and OpenID Connect—have become essential for enabling Single Sign-On (SSO) and delegated access. Initially popularized through "social logins" (e.g., via Google or Facebook), these protocols now support billions of users. They have also been adapted for IoT scenarios, accommodating devices with limited input and display capabilities.</p>
        <p>More recently, with extensions such as FAPI 1.0 and 2.0, these protocols have been adopted in high-risk domains such as finance (e.g., open banking), insurance (open insurance), and healthcare (e.g., electronic patient records), often driven by legal regulations in various countries. Beyond end-user applications, they are also critical in cloud and distributed systems, securing both user authentication and service-to-service communication.</p>
        <p>Over the last decade, my group has developed what we call the Web Infrastructure Model (WIM) to formally analyze the security of web-based protocols and applications, including web-based authorization and authentication standards. Our analysis has uncovered numerous new attacks on these standards, such as Audience Injection Attacks, IdP Mix-Up Attacks, State Leak Attacks, PKCE Chosen Challenge Attacks, Cuckoo's Token Attacks, and 307 Redirect Attacks.</p>
        <p>We have also proposed fixes and, based on the WIM, proved—for the first time—that the fixed standards are secure under appropriate assumptions. Throughout this work, we have closely collaborated with standardization bodies to improve the standards, and in some cases, we have supported the standardization process with formal analysis from the outset.</p>
        <p>In addition, our initial findings led to the launch of the OAuth Security Workshop (OSW) in 2016. Now in its tenth edition, OSW fosters exchange between standardization bodies and industry on the one hand, and academic research on the other.</p>
        <p>In this talk, I will present the WIM and some of the analyses we have conducted using it. I will also briefly discuss our ongoing efforts to support tool-based analyses within the WIM, particularly through our recent protocol analysis tool, DY*.</p>        
    </div>
    <div class="bio">
        <p>Ralf Küsters is a Full Professor of Computer Science and the founding director of the Institute of Information Security at the University of Stuttgart. His research focuses on the design and formal analysis of security-critical and privacy-preserving systems, combining cryptographic and formal methods. His work covers a wide range of topics, including security and cryptographic protocols, web security, and electronic voting. In recognition of his long-term impact, he and his co-authors received the LICS 2023 Test-of-Time Award for their foundational work on the automated analysis of security protocols.</p>
    </div>
</div>