---
title: PESS
subtitle: Progressive Embedding of Security Services
people: 
    - RobertoDoriguzziCorin
    - DomenicoSiracusa
peopleOrder: surname 
publications: 
    - iris_2019_3ea4c72f4dcb4e5933ff 
---

**PESS** is a heuristic algorithm for the provisioning of security services in softwarised networks, where network functions can be dynamically deployed on commodity hardware following the NFV paradigm, and the network is controlled using SDN technologies. In this context, the security services are defined as sequences (chains) of Virtual Security Network Functions (VSNFs), i.e. as software functions (e.g., Snort, Suricata, OpenDPI, etc.), which are provisioned in the network infrastructure according to the specific Quality of Service (QoS) needs of user applications and the security policies defined by the Telecom Service Provider (TSP). TSP's security policies (given as an input to PESS) include: the kind of VSNFs (e.g., firewall, Intrusion Prevention System (IPS), etc.) that should be deployed for a specific class of applications, their order (e.g., firewall first, then an IPS, etc.), and more (e.g., a parental control should be installed close to the user's premises).

The input of PESS is the model of the physical network, including available computing and network resources, plus the definition of the security service to deploy. The output of PESS is the mapping of the VSNFs onto the physical network (position of the VSNFs and one or more paths between them) and an updated model of the physical network that takes into account the resources used to provision the service. The updated model is used as an input for the next request.

PESS has been evaluated on real-word network topologies such as GARR (<https://www.garr.it/it/documenti/26-leaflet-garr-network>) and Stanford (<https://www.usenix.org/system/files/conference/nsdi12/nsdi12-final8.pdf>). Its performance in terms of quality of the security service provisioning solutions (deviation from optimality) and scalability are available in the following research paper:

PESS is available on [GitHub](https://github.com/doriguzzi/pess-security). The repository collects the Python scripts developed to implement and evaluate the PESS concept.

More details on the architecture of PESS and its performance in terms of detection accuracy and execution time are available in the following research paper:

`R. Doriguzzi-Corin, S. Scott-Hayward, D. Siracusa, M. Savi, and E. Salvadori, “Dynamic and Application-Aware Provisioning of Chained Virtual Security Network Functions,” in IEEE Transactions on Network and Service Management, vol. 17, no. 1, pp. 294–307, 2020, doi:10.1109/TNSM.2019.2941128.`
