"use strict";

function solveCWSOP(shallWeDraw) {

    let startTime = new Date();

    // keep architectures that satisfy hard constraints
    let architecturesToOptimize = possibleArchitectures.filter(architecture => 
        (architecture.getGoals().reduce((a, b) => a + b) != Number.NEGATIVE_INFINITY)
    );
    architecturesToOptimize = architecturesToOptimize.filter(architecture => 
        (architecture.getProtectionLevel().reduce((a, b) => a + b) != Number.NEGATIVE_INFINITY)
    );

    if (isOrderByGoals) {
        // sort by goals (remember that the last goal is actually the penalty)
        architecturesToOptimize.sort(function(arc1, arc2) {
            //return Math.max(arc2.getGoals().reduce((a, b) => a + b))
            return arc2.getGoals().reduce((a, b) => a + b) - arc1.getGoals().reduce((a, b) => a + b);
        });
    }
    else {
        // sort by protections (remember that the last protection is actually the penalty)
        architecturesToOptimize.sort(function(arc1, arc2) {
            //return Math.max(arc2.getProtectionLevel().reduce((a, b) => a + b))
            return arc2.getProtectionLevel().reduce((a, b) => a + b) - arc1.getProtectionLevel().reduce((a, b) => a + b);
        });
    }

    let endTime = new Date();
    let timeDiff = endTime - startTime;
    //log("problem solved in " + timeDiff + " milliseconds");

    if (shallWeDraw)
        drawArchitecturesCWSOP(architecturesToOptimize)

    return timeDiff;
}


function drawArchitecturesCWSOP(architectures) {


    let tableBody = $("#" + idBestArchitecturesTableBody);

    tableBody.empty();

    let header = startHeader;

    if (isOrderByGoals) {
        header = header + goalsUp;
        header = header + protectionDown;
    }
    else {
        header = header + goalsDown;
        header = header + protectionUp;
    }
    
    header = header + endHeader;
    tableBody.append(header);

    if (architectures.length == 0) {
        tableBody.append(noArchitecture);
    }

    else {

        architectures.forEach(architecture => {

            let assignments = architecture.getAssignments();
            let processedAssignments = []

            let html = `<tr>`;

            // preprocessing of the assignments to solve hybrid configurations
            assignments.forEach(assignment => {
                
                let currentEntity = assignment.getEntity();
                let currentDomain = assignment.getDomain();

                if (isValueInDictionary(hybridDomains, currentDomain)) {

                    let split = currentDomain.split(splitChar);
                    let firstDomain = split[0]
                    let secondDomain= split[1]

                    processedAssignments.push(new Assignment(currentEntity, firstDomain))
                    processedAssignments.push(new Assignment(currentEntity, secondDomain))
                }
                else {
                    processedAssignments.push(new Assignment(currentEntity, currentDomain))
                }
            });

            Object.values(noHybridDomains).forEach(domain => {
                
                html = html + `<td class="text-center">`

                processedAssignments.forEach(assignment => {

                    if (domain === assignment.getDomain()) {

                        let iconPath = entitiesToIcons[getKeyFromValue(entities, assignment.getEntity())];

                        html = html + `<img src="`
                        html = html + iconPath
                        html = html + `" class="img-fluid" width="30em" height="30em" /> `
                    }

                });
                
                html = html + `</td>`

            });

            let currentGoals = architecture.getGoals();
            let currentGoalsValue = currentGoals.reduce((a, b) => a + b)

            html = html + `<td class="text-center">`
            html = html + `<span style="margin-right:0.5em; display:inline-block; color: `
            html = html + getColorFromValue(currentGoalsValue)
            html = html + `">`
            html = html + currentGoalsValue
            html = html + `</span>`

            html = html + `<i class="fa fa-question-circle " data-toggle="tooltip" data-placement="top" title="`
            let goalsHTML = ""; let i = 0;
            Object.values(goals).forEach(goal => {goalsHTML = goalsHTML + goal + " " + currentGoals[i] + ", "; i=i+1});
            goalsHTML = goalsHTML + "penalty " + currentGoals[i] ;
            html = html + goalsHTML;
            html = html + `"></i>`


            let currentProtection = architecture.getProtectionLevel();
            let currentProtectionValue = currentProtection.reduce((a, b) => a + b)

            html = html + `<td class="text-center">`
            html = html + `<span style="margin-right:0.5em; display:inline-block; color: `
            html = html + getColorFromValue(currentProtectionValue)
            html = html + `">`
            html = html + currentProtectionValue
            html = html + `</span>`
            
            html = html + `<i class="fa fa-question-circle " data-toggle="tooltip" data-placement="top" title="`
            let protectionsHTML = ""; i = 0;
            Object.values(properties).forEach(property => {protectionsHTML = protectionsHTML + property + " " + currentProtection[i] + ", "; i=i+1});
            html = html + protectionsHTML.substring(0, protectionsHTML.length - 2);
            html = html + `"></i>`
    

            html = html + `</td>`

            html = html + `</tr>`
           
            tableBody.append(html);
            
            html = "";

            }
        );
    }
    $('[data-toggle="tooltip"]').tooltip()
}





