---
title: The Good, the Bad and the (Not So) Ugly of Out-Of-Band Authentication with eID Cards and Push Notifications
subtitle: Design, Formal and Risk Analysis
paper: CODASPY2020_PN

people:
    - MarcoPernpruner
    - RobertoCarbone
    - SilvioRanise
    - GiadaSciarretta

---

In our paper, we present a novel passwordless, multi-factor authentication protocol based on eID cards. To assess the security of this protocol, we have formally modelled it through the specification language **ASLan++**, a high-level language that formalizes the interactions between the different protocol roles. These models have then been given in input to **SATMC** (SAT-based Model Checker), an open and flexible platform for model-checking security protocols via reduction to SAT.

SATMC takes as input a security protocol and can determine whether the concurrent execution of a finite number of sessions of the specified protocol satisfies the expected security properties inspite of the interference of a malicious intruder. The verification of the security properties is performed interfacing with state-of-the-art SAT solvers (MiniSat and zChaff are currently supported) and is based on the use of LTL logic.

For our analyses, we used SATMC (Version 3.5.7) launched within Eclipse using the STIATE Plugin (Version 1.0.0.1). 

ASLan++ file and analyses outputs are available [**here**](https://github.com/stfbk/CODASPY2020_FormalAnalysis).

SATMC + STIATE Plugin + instructions to add STIATE Plugin in Eclipse are available [**here**](https://drive.google.com/a/fbk.eu/file/d/1Qc5T_VxXYPLh6i4IbEmuZlh_vM5cKu3_/view?usp=sharing).

The AVANTSSAR deliverable D2.3 "ASLan++ specification and tutorial" is available [**here**](https://drive.google.com/a/fbk.eu/file/d/1TsPxkw09ziDaY21ytgIZyg7m9I9lpBMb/view?usp=sharing).