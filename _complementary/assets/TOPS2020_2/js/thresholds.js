"use strict";



let thresholds = {}

// initialize the thresholds to 0
Object.values(goals).forEach(function(goal) {
    thresholds[goal] = 0;
});


$("." + classThreshold).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "goalName_weight"
    let clickedGoalID = $(this).attr("id").split(splitChar);
    let goal = goals[clickedGoalID[0]];
    
    let newThreshold = parseInt($(this).val());

    // no lower bound nor upper bound limit
    thresholds[goal] = newThreshold;

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

