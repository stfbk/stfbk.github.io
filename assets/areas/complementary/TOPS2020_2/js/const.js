"use strict";

// contains constant values

const entities = Object.freeze({"Proxy":"Proxy", "RM":"Reference Monitor", "MS":"Metadata Storage", "DS":"Data Storage"});


const domains = Object.freeze({"Client":"Client", "OnPremise":"On-premise", "CSP":"Cloud Service Provider", "ClientOnPremise":"Client_On-premise", "OnPremiseCSP":"On-premise_Cloud Service Provider"});

const noHybridDomains = Object.freeze({"Client":domains.Client, "OnPremise":domains.OnPremise, "CSP":domains.CSP});
const hybridDomains = Object.freeze({"ClientOnPremise":domains.ClientOnPremise, "OnPremiseCSP":domains.OnPremiseCSP});


const goals = Object.freeze({"redundancy":"Redundancy", "scalability":"Scalability", "reliability":"Reliability", "maintenance":"Maintenance", "dosResilience":"DOS Resilience", "vendorLockIn":"Vendor Lock-in", "onPremiseSavings":"On-premise Savings", "cspSavings":"CSP Savings"});


const properties = Object.freeze({"C":"Confidentiality", "I":"Integrity", "A":"Availability"});


const channelChar = " <=> ";

const pointsOfAttack = Object.freeze({"Proxy":entities.Proxy, "RM":entities.RM, "MS":entities.MS, "DS":entities.DS, "ProxyDS":entities.Proxy + channelChar + entities.DS, "ProxyMS":entities.Proxy + channelChar + entities.MS, "RMDS":entities.RM + channelChar + entities.DS, "RMMS":entities.RM + channelChar + entities.MS});


const attackers = Object.freeze({"MaliciousInsiderCSP":"Malicious Insider in CSP", "MaliciousInsiderOnPremise":"Malicious Insider in on-premise", "MitMClientOnPremise":"MitM <Client, On-premise>", "MitMClientCSP":"MitM <Client, CSP>", "MitMOnPremiseCSP":"MitM <On-premise, CSP>", "MatD":"MatD"});


let affectedPointsOfAttack = {};
affectedPointsOfAttack[attackers.MaliciousInsiderCSP]       = domains.CSP;
affectedPointsOfAttack[attackers.MaliciousInsiderOnPremise] = domains.OnPremise;
affectedPointsOfAttack[attackers.MitMClientOnPremise]       = [domains.Client, domains.OnPremise];
affectedPointsOfAttack[attackers.MitMClientCSP]             = [domains.Client, domains.CSP];
affectedPointsOfAttack[attackers.MitMOnPremiseCSP]          = [domains.OnPremise, domains.CSP];
affectedPointsOfAttack[attackers.MatD]                      = domains.Client;



const constraints = Object.freeze({"none":"None", "hard":"Hard", "soft":"Soft"});

const likelihoods = Object.freeze({"none":0, "low":1, "medium":2, "high":3});

const impacts     = Object.freeze({"none":0, "low":1, "medium":2, "high":3});

const protections = Object.freeze({"high":3, "medium":2, "low":1, "none":0});

const sortOrder = Object.freeze({"goals":"goals", "protections":"protections"});





const iconsBasePath = "img/entities/";
const iconProxyPath = iconsBasePath + "proxy.png";
const iconMSPath    = iconsBasePath + "ms.png";
const iconRMPath    = iconsBasePath + "rm.png";
const iconDSPath    = iconsBasePath + "ds.png";


const entitiesToIcons = Object.freeze({"Proxy":iconProxyPath, "RM":iconRMPath, "MS":iconMSPath, "DS":iconDSPath});



const iconsLatexBasePath = "resources/pdf/";
const iconLatexProxyPath = iconsLatexBasePath + "proxy.pdf";
const iconLatexMSPath    = iconsLatexBasePath + "ms.pdf";
const iconLatexRMPath    = iconsLatexBasePath + "rm.pdf";
const iconLatexDSPath    = iconsLatexBasePath + "ds.pdf";

const entitiesToIconsLatex = Object.freeze({"Proxy":iconLatexProxyPath, "RM":iconLatexMSPath, "MS":iconLatexRMPath, "DS":iconLatexDSPath});



const splitChar = "_"

const classPreFilter        = "class-prefilter"
const classWeightGoal       = "class-weight-goal"
const classWeightProperty   = "class-weight-property"

const classThresholdGoal        = "class-threshold-goal"
const classThresholdProperty    = "class-threshold-property"

const classConstraintGoal       = "class-constraint-goal"
const classConstraintProperty   = "class-constraint-property"

const classPenaltyGoal          = "class-penalty-goal"
const classPenaltyProperty      = "class-penalty-property"

const classLikelihood       = "class-likelihood"
const classSortOrder        = "class-sort-order"

const idBestArchitecturesTableBody = "bestArchitectures"
const idTitleDashboard = "titleDashboard"

const idRadioMOCOP = "radioMOCOP"
const idRadioCWSOP = "radioCWSOP"
const idRadioGoals = "radioGoals"
const idRadioProtection = "radioProtection"

const startHeader  =`
<tr>
    <td class="text-center">Client</t>
    <td class="text-center">On-premise</td>
    <td class="text-center">CSP</td>
`
const goalsUp = `<td class="text-center ` + classSortOrder + `" id="` + sortOrder.goals + `">Goals &uarr;</td>`
const goalsDown = `<td class="text-center ` + classSortOrder + `" id="` + sortOrder.goals + `">Goals &darr;</td>`
const protectionUp = `<td class="text-center ` + classSortOrder + `" id="` + sortOrder.protections + `">Protections &uarr;</td>`
const protectionDown = `<td class="text-center ` + classSortOrder + `" id="` + sortOrder.protections + `">Protections &darr;</td>`
const endHeader = `</tr>`

const noArchitecture  =`
<tr>
    <td class="text-center" colspan="5">
        <i class="fa fa-heart-broken" data-toggle="tooltip" data-placement="right" title="No architecture satisfy your inputs: try softening pre-filters and hard constraints"></i>
    </td>
</tr>
`