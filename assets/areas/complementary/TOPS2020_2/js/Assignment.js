"use strict";

// contains structures related to the assignments between entities and domains


class Assignment {

    constructor(entity, domain) {
        this.entity = entity;
        this.domain = domain;
    }

    getEntity() {
        return this.entity;
    }

    getDomain() {
        return this.domain;
    }

    toString() {
        return this.entity.concat("_".concat(this.domain))
    }

}



const proxyClient           = new Assignment(entities.Proxy,    domains.Client);
const proxyOnPremise        = new Assignment(entities.Proxy,    domains.OnPremise);
const proxyClientOnPremise  = new Assignment(entities.Proxy,    domains.ClientOnPremise);

const RMOnPremise           = new Assignment(entities.RM,       domains.OnPremise);
const RMCSP                 = new Assignment(entities.RM,       domains.CSP);
const RMNull                = new Assignment(entities.RM,       "");

const MSOnPremise           = new Assignment(entities.MS,       domains.OnPremise);
const MSCSP                 = new Assignment(entities.MS,       domains.CSP);
const MSOnPremiseCSP        = new Assignment(entities.MS,       domains.OnPremiseCSP);

const DSOnPremise           = new Assignment(entities.DS,       domains.OnPremise);
const DSCSP                 = new Assignment(entities.DS,       domains.CSP);
const DSOnPremiseCSP        = new Assignment(entities.DS,       domains.OnPremiseCSP);

const possibleProxyAssignments  = Object.freeze([proxyClient, proxyOnPremise, proxyClientOnPremise]);
const possibleRMAssignments     = Object.freeze([RMOnPremise, RMCSP, RMNull]);
const possibleMSAssignments     = Object.freeze([MSOnPremise, MSCSP, MSOnPremiseCSP]);
const possibleDSAssignments     = Object.freeze([DSOnPremise, DSCSP, DSOnPremiseCSP]);

