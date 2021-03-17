---
title: ASASP
subtitle: Automated Symbolic Analysis of Security Policies

publications:
    - DBSec2014
    - SACMAT2014_RBAC
    - STM2012
    - JCS2012
    - CADE2011
    - ASIACCS2011
    - STM2010

---

ASASP is a tool for the automated safety analysis of administrative access control policies in (extensions of) the Role-Based Access Control (RBAC) model. The goal of the tool is to establish if untrusted users can get permissions to access sensitive resources. ASASP is capable of performing an analysis that is parametric in the number of users, i.e. it certifies safety with respect to a finite but unknown number of users. ASASP is also capable of taking into account attribute-based assignments of roles to users and temporal constraints on the RBAC policies.

Role-Based Access Control (RBAC) policies have been widely adopted by enterprise and complex organizations around the world. Because of their size and complexity, automated techniques for their security analysis are crucial for design and maintenance. In particular, the definition of administrative domains by means of attributes restrieved from user profiles makes the RBAC model easier to use in real scenarios but complicates the development of security analysis techniques, that should be able to modularly reason about a wide range of attribute domains. Another complication is the use of contextual information, such as time and location, in the expression of the authorization conditions of RBAC policies.

The prototype tool ASASP (short for Automated Symbolic Analysis of Security Policies) implements a symbolic backward reachability analysis to solve user-role reachability problems, i.e. it is capable of establishing if there exists a coalition of administrators capable of giving a certain set of priviliges to a certain (untrusted) user. ASASP uses the model checker [MCMT](http://users.mat.unimi.it/users/ghilardi/mcmt/) to mechanize the backward reachability procedure and integrates several herustic to alleviate the state-space explosion problem while providing a flexibile framework to express various extensions of RBAC policies encompassing attributes and contextual information. Despite is flexibility, ASASP is competitive with other tools for the analysis of administrative RBAC policies such as [Mohawk](http://code.google.com/p/mohawk/) and [VAC](http://users.ecs.soton.ac.uk/gp4/VAC.html) or the tool by [Uzun et al.](http://dl.acm.org/citation.cfm?id=2295169) for the analysis of temporal RBAC policies. To the best of our knowledge, ASASP is the only tool capable of handling user-role assignments based on attributes.