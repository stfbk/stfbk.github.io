"use strict";

// contains structures related to the architectures

class Architecture {

    constructor(assignments) {
        this.assignments = assignments;

        // maximize is a variable used for experimentation
        // if true, the architecture will return best values
        this.maximize = false;
    }

    setMaximize(maximize) {
        this.maximize = maximize
    }

    getAssignments() {
       return this.assignments;
    }


    getProtectionLevel() {

        let protectionsEffect = 0;
        let affectedDomainsAndChannels = [];
        let attackedPoints = []

        // compute the attackable domains and channels 
        // of course, include also the likelihood of the attacker
        Object.keys(attackers).forEach(attacker => {
            
            let attackerLikelihood = setLikelihood[attackers[attacker]]
            let currentAffectedPointsOfAttack = affectedPointsOfAttack[attackers[attacker]];
            
            // this attacker affects a pair of domains, so consider points of attacks form THAT domains
            if (Array.isArray(currentAffectedPointsOfAttack)) {

                let firstDomain = currentAffectedPointsOfAttack[0]
                let entitisInFirstDomain = [];

                let secondDomain = currentAffectedPointsOfAttack[1]
                let entitisInSecondDomain = [];

                this.assignments.forEach(assignment => {

                    // not === but .includes because there are also hybrid domains!
                    if (assignment.getDomain().includes(firstDomain)) {
                        entitisInFirstDomain.push(assignment.getEntity())
                    }
                    else if (assignment.getDomain().includes(secondDomain)) {
                        entitisInSecondDomain.push(assignment.getEntity())
                    }
                });


                entitisInFirstDomain.forEach(firstEntity => {
                    entitisInSecondDomain.forEach(secondEntity => {
    
                        let pointOfAttack = firstEntity + channelChar + secondEntity;
  
                        if (isValueInDictionary(pointsOfAttack, pointOfAttack)) {
                            attackedPoints.push([pointOfAttack, attackerLikelihood])
                        }
                    });
                });
            }
            // this attacker affects a single domain, so consider all the entities in THAT domain
            else {
                this.assignments.forEach(assignment => {
                    if (assignment.getDomain().includes(currentAffectedPointsOfAttack)) {
                        attackedPoints.push([assignment.getEntity(), attackerLikelihood])
                    }
                });
            }
        });


        // computer the worst impact across all affected points of attack for C, I and A separately

        // start assuming the lowest impact and increase it if we find a higher impact
        let worstRiskLevelC = impacts.none;
        let worstRiskLevelI = impacts.none;
        let worstRiskLevelA = impacts.none;

        attackedPoints.forEach(affectedPointOfAttackAndLikelihood => {
            
            let currentImpact = effectsOnImpact[affectedPointOfAttackAndLikelihood[0]]
            let currentLikelihood = affectedPointOfAttackAndLikelihood[1]

            let currentRiskLevelC = Math.min(currentImpact.getC(), currentLikelihood);
            let currentRiskLevelI = Math.min(currentImpact.getI(), currentLikelihood);
            let currentRiskLevelA = Math.min(currentImpact.getA(), currentLikelihood);

            if (currentRiskLevelC > worstRiskLevelC) {worstRiskLevelC = currentRiskLevelC}
            if (currentRiskLevelI > worstRiskLevelI) {worstRiskLevelI = currentRiskLevelI}
            if (currentRiskLevelA > worstRiskLevelA) {worstRiskLevelA = currentRiskLevelA}
        });

        // if we have to maximize, return best values
        if(this.maximize)
            return [100,100,100];
        
        else {
            // convert from risk level to protection level
            let protectionLevels = [Math.abs(worstRiskLevelC - impacts.high) * weightsProperties[properties.C], 
                Math.abs(worstRiskLevelI - impacts.high) * weightsProperties[properties.I], 
                Math.abs(worstRiskLevelA - impacts.high) * weightsProperties[properties.A]];

            let penalty = 0
            let i = 0

            Object.values(properties).forEach(property => {
                if (protectionLevels[i] < thresholdsProperties[property]) {

                    if (setConstraintsProperties[property] === constraints.hard)
                            protectionLevels[i] = Number.NEGATIVE_INFINITY;
                        else if (setConstraintsProperties[property] === constraints.soft)
                            penalty = penalty + penaltiesProperties[property]; 

                }
                i = i + 1;
            });
            protectionLevels.push(penalty);
            return protectionLevels;
        }
    }


    getGoals() {

        let goalsEffect = [];

        this.assignments.forEach(assignment => {
            goalsEffect.push(effectsOnGoal[assignment.toString()].getScore());
        });

        // so now goalsEffect is an array of array, i.e., an array of weighted scores
        // that now we sum together in a single array
        let summedGoalsEffect = []
        let penalty = 0

        Object.values(goals).forEach(goal => {
            let sum = 0
            goalsEffect.forEach(effect => {
                sum = sum + effect[goal]
            });

            if (sum < thresholdsGoals[goal]) {

                if (setConstraintsGoals[goal] === constraints.hard)
                    sum = Number.NEGATIVE_INFINITY;
                else if (setConstraintsGoals[goal] === constraints.soft)
                    penalty = penalty + penaltiesGoals[goal]; 
            }

            summedGoalsEffect.push(sum);
        });

        summedGoalsEffect.push(penalty)

        // if we have to maximize, return best values
        if(this.maximize)
            return [100,100,100,100,100,100,100,100];
        else
            return summedGoalsEffect;
    }
}


// generate all possible architectures by looping through all possible assignments
let possibleArchitectures = [];

function updateArchitecturesList() {
    
    possibleArchitectures = [];

    possibleProxyAssignments.forEach(
        proxyAssignment => {
            if (!isAssignmentInArray(filteredAssignments, proxyAssignment)) {
                possibleRMAssignments.forEach(
                    rmAssignment => {
                        if (!isAssignmentInArray(filteredAssignments, rmAssignment)) {
                            possibleMSAssignments.forEach(
                                msAssignment => {
                                    if (!isAssignmentInArray(filteredAssignments, msAssignment)) {
                                        possibleDSAssignments.forEach(
                                            dsAssignment => {
                                                if (!isAssignmentInArray(filteredAssignments, dsAssignment)) {
                                                    possibleArchitectures.push(new Architecture([proxyAssignment, rmAssignment, msAssignment, dsAssignment]));
                                                }
                                            }
                                        );
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
}