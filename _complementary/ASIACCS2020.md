---
title: Exploring Architectures for Cryptographic Access Control Enforcement in the Cloud for Fun and Optimization
status: accepted
paper: ASIACCS2020
conference: 15th ACM ASIA Conference on Computer and Communications Security (ACM ASIACCS 2020)

people:
    - StefanoBerlato
    - RobertoCarbone
    - AdamJLee
    - SilvioRanise

peopleOrder: surname
---

Below, you find links to complementary material and additional resources referenced in the paper.



### Cloudify Blueprint

We present the Cloudify blueprint we developed for an architecture that we later deployed for the eGovernment scenario. The source code of the Cloudify Blueprint is available [**here**](/assets/areas/complementary/ASIACCS2020/blueprint.yaml).

Each white rectangle is a node and it represents a cloud service (e.g., security groups, cloud functions). Links are relationships between nodes and are used to control the deployment flow. The blueprint contains three main clusters (blue borders). The cluster on top models the relational database service (i.e., MS, a Relational Database Service in AWS) while the cluster in the middle models the cloud function (i.e., RM, a Lambda function in AWS). The last cluster on the bottom-right corner models the storage service (i.e., DS, a S3 service in AWS). The proxy runs in the users' computers. Therefore, the proxy is not part of the blueprint.

![Cloudify Blueprint](/assets/areas/complementary/ASIACCS2020/blueprint.png)



### Fully Working Prototype

We developed a fully working prototype (please see [**the repository**](https://github.com/stfbk/CryptoAC)) implementing the cryptographic access control scheme developed by [**Garrison et al**](https://arxiv.org/pdf/1602.09069). The prototype was tested with several simulated sequences of operations combining the creation of users and roles, assignment and revoking of permissions and the creation, update and management of files. The prototype offers a user interface based on web technologies and RESTful APIs.

<video width="1280" height="720" controls>
    <source src="/assets/areas/complementary/ASIACCS2020/prototype.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>    
<br />

### Web Dashboard

We implemented a proof-of-concept application of our architectural model and the Multi-Objective Optimization Problem (MOOP) in a web dashboard (please see [**the repository**](https://github.com/stfbk/CryptoAC)). For demonstration purposes, the MOOP is reduced to a constrained weighted sum optimization problem. The dashboard allows configuring pre-filters on the possible architectures, weights and soft-hard constraints. The optimization problem is solved in real-time and the resulting architectures, along with the effect on the security and usability goals, are shown in the last blue sections. You can freely [**interact with the dashboard**](/assets/areas/complementary/ASIACCS2020/dashboard.html).