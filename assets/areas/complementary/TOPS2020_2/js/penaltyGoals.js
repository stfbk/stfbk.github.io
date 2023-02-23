"use strict";



let penaltiesGoals = {}

// initialize the penaltiesGoals to 0
Object.values(goals).forEach(function(goal) {
    penaltiesGoals[goal] = 0;
});


$("." + classPenaltyGoal).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "goalName_weight"
    let clickedGoalID = $(this).attr("id").split(splitChar);
    let goal = goals[clickedGoalID[0]];
    
    let newPenalty = parseInt($(this).val());

    // limit upper bound but not lower bound
    if (newPenalty <= 0) {

        penaltiesGoals[goal] = newPenalty;
    }

    
    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

