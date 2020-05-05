---
title: The Good, the Bad and the (Not So) Ugly of Out-Of-Band Authentication with eID Cards and Push Notifications
subtitle: Design, Formal and Risk Analysis
status: accepted
conference: 10th ACM Conference on Data and Application Security and Privacy (CODASPY '20)

abstract: >
    Everyday life is permeated by new technologies allowing people to perform almost any kind of operation from their smart devices. Although this is amazing from a convenience perspective, it may result in several security issues concerning the need for authenticating users in a proper and secure way. Electronic identity cards (also called eID cards) play a very important role in this regard, due to the high level of assurance they provide in identification and authentication processes. However, authentication solutions relying on them are still uncommon and suffer from many usability limitations.
    In this paper, we thus present the design and implementation of a novel passwordless, multi-factor authentication protocol based on eID cards. To reduce known usability issues while keeping a high level of security, our protocol leverages push notifications and mobile devices equipped with NFC, which can be used to interact with eID cards. In addition, we evaluate the security of the protocol through a formal security analysis and a risk analysis, whose results emphasize the acceptable level of security.

people:
    - MarcoPernpruner_R_FBK
    - RobertoCarbone_R_FBK
    - SilvioRanise_H_FBK
    - GiadaSciarretta_R_FBK

---

In our paper, we present a novel passwordless, multi-factor authentication protocol based on eID cards. To assess the security of this protocol, we have formally modelled it through the specification language **ASLan++**, a high-level language that formalizes the interactions between the different protocol roles. These models have then been given in input to **SATMC** (SAT-based Model Checker), an open and flexible platform for model-checking security protocols via reduction to SAT.

SATMC takes as input a security protocol and can determine whether the concurrent execution of a finite number of sessions of the specified protocol satisfies the expected security properties inspite of the interference of a malicious intruder. The verification of the security properties is performed interfacing with state-of-the-art SAT solvers (MiniSat and zChaff are currently supported) and is based on the use of LTL logic.

For our analyses, we used SATMC (Version 3.5.7) launched within Eclipse using the STIATE Plugin (Version 1.0.0.1). 

ASLan++ file and analyses outputs are available [**here**](https://github.com/stfbk/CODASPY2020_FormalAnalysis).

SATMC + STIATE Plugin + instructions to add STIATE Plugin in Eclipse are available [**here**](https://drive.google.com/a/fbk.eu/file/d/1Qc5T_VxXYPLh6i4IbEmuZlh_vM5cKu3_/view?usp=sharing).

The AVANTSSAR deliverable D2.3 "ASLan++ specification and tutorial" is available [**here**](https://drive.google.com/a/fbk.eu/file/d/1TsPxkw09ziDaY21ytgIZyg7m9I9lpBMb/view?usp=sharing).