


function solveMOCOP(shallWeDraw) {

    let startTime = new Date();

    // keep architectures that satisfy hard constraints
    let architecturesToOptimize = possibleArchitectures.filter(architecture => 
        (architecture.getGoals().reduce((a, b) => a + b) != Number.NEGATIVE_INFINITY)
    );

    let paretoOptimalArchitectures = [];

    while (architecturesToOptimize.length !== 0) {

        // find the Pareto Optimal
        currentOptimal = architecturesToOptimize.shift();

        architecturesToOptimize.forEach(function(currentArchitecture) {
            if (dominates(currentArchitecture, currentOptimal)) {
                currentOptimal = currentArchitecture;
            }
        });

        //log("dopo il primo giro, l'ottimale e' " + currentOptimal.getGoals());

        paretoOptimalArchitectures.push(currentOptimal)
        
        let architecturesToRemove = []

        // remove dominated architectures
        architecturesToOptimize.forEach(function(currentArchitecture, index) {
            if (dominates(currentOptimal, currentArchitecture)) {
                architecturesToRemove.push(index)
            }
        }); 

        // in reverse order, otherwise we mess up the indexes of the array
        for (var i = architecturesToRemove.length -1; i >= 0; i--)
            architecturesToOptimize.splice(architecturesToRemove[i], 1);
        
        
        //log("fine del loop");
    }

    let endTime = new Date();
    let timeDiff = endTime - startTime;
    //log("there are " + paretoOptimalArchitectures.length + " Pareto Optimal architectures");
    //log("problem solved in " + timeDiff + " milliseconds");


    if (isOrderByGoals) {
        // sort by goals (remember that the last goal is actually the penalty)
        paretoOptimalArchitectures.sort(function(arc1, arc2) {
            return arc2.getGoals().reduce((a, b) => a + b) - arc1.getGoals().reduce((a, b) => a + b);
        });
    }
    else {
        // sort by protections
        paretoOptimalArchitectures.sort(function(arc1, arc2) {
            return arc2.getProtectionLevel().reduce((a, b) => a + b) - arc1.getProtectionLevel().reduce((a, b) => a + b);
        });
    }

    if (shallWeDraw)
        drawArchitecturesMOCOP(paretoOptimalArchitectures);

    return timeDiff;
}


function dominates(dominatingArc, dominatedArc) {

    let dominatingArcObjectiveFunctions;
    let dominatedArcObjectiveFunctions;
    let numberOfObjectiveFunctions;

    // we do not care whether to order by goal or not, we do it all together



//    if (isOrderByGoals) {
//        dominatingArcObjectiveFunctions = dominatingArc.getGoals();
//        dominatedArcObjectiveFunctions = dominatedArc.getGoals();
//
//        // TODO -1 to remove the penalty, but we will have to think about it
//        numberOfObjectiveFunctions = dominatingArcObjectiveFunctions.length - 1;
//    }
//    else {
//        dominatingArcObjectiveFunctions = dominatingArc.getProtectionLevel();
//        dominatedArcObjectiveFunctions = dominatedArc.getProtectionLevel();
//        numberOfObjectiveFunctions = dominatingArcObjectiveFunctions.length;
//    }

    dominatingArcObjectiveFunctions = dominatingArc.getGoals()
    dominatedArcObjectiveFunctions = dominatedArc.getGoals()

    // to remove the penalty
    dominatingArcObjectiveFunctions.pop()
    dominatedArcObjectiveFunctions.pop()

    dominatingArcObjectiveFunctions = dominatingArcObjectiveFunctions.concat(dominatingArc.getProtectionLevel())
    dominatedArcObjectiveFunctions = dominatedArcObjectiveFunctions.concat(dominatedArc.getProtectionLevel())
    
    numberOfObjectiveFunctions = dominatingArcObjectiveFunctions.length
    

    let i;

    let dominates = true;
    let majorInAtLeastOne = false;


    for (i = 0; i < numberOfObjectiveFunctions; i++) {

        if (dominatedArcObjectiveFunctions[i] > dominatingArcObjectiveFunctions[i]) {
            dominates = false;
        }

        if (dominatingArcObjectiveFunctions[i] > dominatedArcObjectiveFunctions[i]) {
            majorInAtLeastOne = true;
        }
    }

    
    //log("abbiamo due contententi! dominating e' " + dominatingArcObjectiveFunctions + ", mentre dominated e' " + dominatedArcObjectiveFunctions + ". il risultato e' " + dominates + "-" + majorInAtLeastOne)


    return (dominates && majorInAtLeastOne);
}



function drawArchitecturesMOCOP(architectures) {


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

            // TODO we should ignore the penalty
            let currentGoals = architecture.getGoals();

            let currentGoalsValue = currentGoals.join(" "); //.reduce((a, b) => a + b)

            let valuesHTML = ""; let i = 0;
            Object.values(goals).forEach(goal => {
                valuesHTML = valuesHTML + `<span style="margin-right:0.5em; display:inline-block; font-family:Courier; color: `
                valuesHTML = valuesHTML + getColorFromValue(currentGoals[i])
                valuesHTML = valuesHTML + `">`;
                if (currentGoals[i] >= 0)
                    valuesHTML = valuesHTML + "+";
                valuesHTML = valuesHTML + currentGoals[i];
                valuesHTML = valuesHTML + `</span>`;
                i=i+1;
            });
            
            html = html + `<td class="text-center">`
            html = html + valuesHTML;

            html = html + `<i class="fa fa-question-circle " data-toggle="tooltip" data-placement="top" title="`
            let goalsHTML = ""; i = 0;
            Object.values(goals).forEach(goal => {goalsHTML = goalsHTML + goal + ", "; i=i+1;});
            html = html + goalsHTML.substring(0, goalsHTML.length - 2);
            html = html + `"></i>`




            let currentProtection = architecture.getProtectionLevel();

            let levelsHTML = ""; i = 0;
            Object.values(properties).forEach(property => {
                levelsHTML = levelsHTML + `<span style="margin-right:0.5em; display:inline-block; font-family:Courier; color: `
                levelsHTML = levelsHTML + getColorFromValue(currentProtection[i])
                levelsHTML = levelsHTML + `">`;
                if (currentProtection[i] >= 0)
                    levelsHTML = levelsHTML + "+";
                levelsHTML = levelsHTML + currentProtection[i];
                levelsHTML = levelsHTML + `</span>`;
                i=i+1;
            });
            
            html = html + `<td class="text-center">`
            html = html + levelsHTML;

            html = html + `<i class="fa fa-question-circle " data-toggle="tooltip" data-placement="top" title="`
            let protectionsHTML = ""; i = 0;
            Object.values(properties).forEach(property => {protectionsHTML = protectionsHTML + property + ", "; i=i+1;});
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





