---
title: FLAD
subtitle: Adaptive Federated Learning for DDoS Attack Detection
people: 
    - RobertoDoriguzziCorin
    - DomenicoSiracusa
peopleOrder: surname 
# publications: 
#    - ?
---

FLAD (a Federated Learning approach to DDoS Attack Detection) is an adaptive Federated Learning (FL) approach for training feed-forward neural networks, that implements a mechanism to monitor the classification accuracy of the global model on the clients’ validations sets, without requiring any exchange of data. Thanks to this mechanism, FLAD can estimate the performance of the aggregated model and dynamically tune the FL process by assigning more computation to those clients whose attacks profiles are harder to learn.

More details on the architecture of FLAD and its performance in terms of detection accuracy and execution time are available in the following research paper:

`
R. Doriguzzi-Corin and D. Siracusa, "FLAD: Adaptive Federated Learning for DDoS Attack Detection," in arXiv preprint arXiv:2205.06661, doi: 10.48550/arXiv.2205.06661, 2022.
`

You may find the preprint of the paper in the [arXiv repository](https://arxiv.org/abs/2205.06661).

FLAD is available on [GitHub](https://github.com/doriguzzi/flad-federated-learning-ddos). The README.md file includes a step-by-step guide to install and use FLAD.
