
"use strict";

// this array will contain the list of the assignments filtered by the user. 
// When generating the architectures (i.e., looping over the assignments), 
// architectures with these assignments will be filtered
let filteredAssignments = [];


$("." + classPreFilter).on('click', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "entityName_domainName"
    let clickedIconID = $(this).attr("id").split(splitChar);
    let entity = entities[clickedIconID[0]];
    let domain = domains[clickedIconID[1]];


    let newFilteredAssignments = filteredAssignments.filter(
        assignment => ((assignment.getEntity() !== entity) || (assignment.getDomain() !== domain)))


    // true if the assignment was previously filtered out
    // therefore, we have to allow the assignment again
    if (newFilteredAssignments.length !== filteredAssignments.length) {
        filteredAssignments = newFilteredAssignments
        $(this).css("opacity", 1.0);
    }
    // false if the assignment was NOT previously filtered out
    // therefore, we have to filter the assignment out
    else {

        // there are three assignments for each entity. We do not want the user to remove them all, so stop when they are 2
        if (filteredAssignments.filter(assignment => (assignment.getEntity() === entity)).length != 2) {
            filteredAssignments.push(new Assignment(entity, domain))
            $(this).css("opacity", 0.5);
        }
    }

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});


