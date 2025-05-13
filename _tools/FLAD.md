---
title: FLAD
subtitle: Adaptive Federated Learning for DDoS Attack Detection
people: 
    - RobertoDoriguzziCorin
    - DomenicoSiracusa
peopleOrder: surname 
publications: 
   - iris_2024_6afeb7e1ba60f98f9a03
   - iris_2024_f4bf3cb401d619ca09ed
---

FLAD (a Federated Learning approach to DDoS Attack Detection) is an adaptive Federated Learning (FL) approach for training feed-forward neural networks, that implements a mechanism to monitor the classification accuracy of the global model on the clients’ validations sets, without requiring any exchange of data. Thanks to this mechanism, FLAD can estimate the performance of the aggregated model and dynamically tune the FL process by assigning more computation to those clients whose attacks profiles are harder to learn.

More details on the architecture of FLAD and its performance in terms of detection accuracy and execution time are available in the following research paper:

`Doriguzzi-Corin, Roberto, and Domenico Siracusa. "FLAD: adaptive federated learning for DDoS attack detection." Computers & Security 137 (2024): 103597.DOI: https://doi.org/10.1016/j.cose.2023.103597`

You may find the preprint of the paper in the [arXiv repository](https://arxiv.org/abs/2205.06661).

FLAD is available on [GitHub](https://github.com/doriguzzi/flad-federated-learning-ddos). The README.md file includes a step-by-step guide to install and use FLAD.
