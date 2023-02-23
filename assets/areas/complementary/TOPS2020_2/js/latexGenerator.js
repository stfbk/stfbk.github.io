$("#" + idTitleDashboard).on('click', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    updateArchitecturesList();

    let latex = ""
    let isColorWhite = true


    possibleArchitectures.forEach(architecture => {
        
        if (isColorWhite) {
            latex = latex + "\\rowcolor{white}\n"
            isColorWhite = false
        }
        else {
            latex = latex + "\\rowcolor{cloud}\n"
            isColorWhite = true
        }
        

        let assignments = architecture.getAssignments();
        let processedAssignments = []

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

            processedAssignments.forEach(assignment => {

                if (domain === assignment.getDomain()) {

                    let currentEntity = assignment.getEntity();
                    let iconPath = entitiesToIconsLatex[getKeyFromValue(entities, currentEntity)];

                    if (currentEntity == entities.proxy) {
                        latex = latex + "\\includegraphics[trim={0 0 0 -3cm}, clip, width=3mm, height=4mm]{" + iconPath + "}\n"
                    }
                    else {
                        latex = latex + "\\includegraphics[width=3mm, height=3mm]{" + iconPath + "}\n"
                    }
                }

            });
            
            latex = latex + "&\n";

        });

        log(latex)

        let currentGoals = architecture.getGoals();
        
        let i = 0
        Object.values(goals).forEach(goal => {
            let value = currentGoals[i];
            if (value > 0)
                latex = latex + "\\textcolor{esmerald}{" + value + "}";
            else 
                latex = latex + "\\textcolor{alazarin}{" + value + "}";

            latex = latex + " & "
            i = i + 1
        });


        let currentProtection = architecture.getProtectionLevel();

        i = 0
        Object.values(properties).forEach(property => {
            let value = currentProtection[i];
            if (value > 0)
                latex = latex + "\\textcolor{esmerald}{" + value + "}";
            else if (value == 0)
                latex = latex + value;
            else 
                latex = latex + "\\textcolor{alazarin}{" + value + "}";

            latex = latex + " & "
            i = i + 1
        });

        latex = latex.substring(0, latex.length-2);
        latex = latex + "\\\\ \n \n \n"
        
        console.log(latex)
    });

});



