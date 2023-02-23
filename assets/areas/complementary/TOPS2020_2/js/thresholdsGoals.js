"use strict";



let thresholdsGoals = {}

// initialize the thresholdsGoals to 0
Object.values(goals).forEach(function(goal) {
    thresholdsGoals[goal] = 0;
});


$("." + classThresholdGoal).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "goalName_weight"
    let clickedGoalID = $(this).attr("id").split(splitChar);
    let goal = goals[clickedGoalID[0]];
    
    let newThreshold = parseInt($(this).val());

    // no lower bound nor upper bound limit
    thresholdsGoals[goal] = newThreshold;

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

