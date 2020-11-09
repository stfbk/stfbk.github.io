"use strict";



let penalties = {}

// initialize the penalties to 0
Object.values(goals).forEach(function(goal) {
    penalties[goal] = 0;
});


$("." + classPenalty).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "goalName_weight"
    let clickedGoalID = $(this).attr("id").split(splitChar);
    let goal = goals[clickedGoalID[0]];
    
    let newPenalty = parseInt($(this).val());

    // limit upper bound but not lower bound
    if (newPenalty <= 0) {

        penalties[goal] = newPenalty;
    }

    
    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

