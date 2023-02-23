"use strict";

let weightsGoals = {}

// initialize the weights to 1
Object.values(goals).forEach(function(goal) {
    weightsGoals[goal] = 1;
});


$("." + classWeightGoal).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "goalName_weight"
    let clickedGoalID = $(this).attr("id").split(splitChar);
    let goal = goals[clickedGoalID[0]];
    
    let newWeight = parseInt($(this).val());

    // limit lower bound but not upper bound
    if (newWeight >= 0) {

        weightsGoals[goal] = newWeight;
    }

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

