---
title: LUCID
subtitle: A Practical, Lightweight Deep Learning Solution for DDoS Attack Detection
people: 
    - RobertoDoriguzziCorin
    - DomenicoSiracusa
peopleOrder: surname 
publications: 
    - iris_2020_3de554176570db423bcd
    - iris_2023_218be0b36d780a2d0eaf
    - iris_2021_d41062774c467ff7c845
---

**LUCID** (Lightweight, Usable CNN in DDoS Detection) is a lightweight Deep Learning-based DDoS detection framework suitable for online resource-constrained environments, which leverages Convolutional Neural Networks (CNNs) to learn the behaviour of DDoS and benign traffic flows with both low processing overhead and attack detection time. LUCID includes a dataset-agnostic pre-processing mechanism that produces traffic observations consistent with those collected in existing online systems, where the detection algorithms must cope with segments of traffic flows collected over pre-defined time windows.

LUCID is available on [GitHub](https://github.com/doriguzzi/lucid-ddos/tree/master). The README.md file includes a step-by-step guide to install and use LUCID.

More details on the architecture of LUCID and its performance in terms of detection accuracy and execution time are available in the following research paper:

`R. Doriguzzi-Corin, S. Millar, S. Scott-Hayward, J. Martínez-del-Rincón and D. Siracusa, "Lucid: A Practical, Lightweight Deep Learning Solution for DDoS Attack Detection," in *IEEE Transactions on Network and Service Management*, vol. 17, no. 2, pp. 876-889, June 2020, doi: 10.1109/TNSM.2020.2971776.`
