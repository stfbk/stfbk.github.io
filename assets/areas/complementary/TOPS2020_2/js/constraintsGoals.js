"use strict";



let setConstraintsGoals = {}

// initialize the constraints to none
Object.values(goals).forEach(function(goal) {
    setConstraintsGoals[goal] = constraints.none;
});


$("." + classConstraintGoal).on('click', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "goal_constraint"
    let clickedGoalID = $(this).attr("id").split(splitChar);
    let goal = goals[clickedGoalID[0]];

    if (!(clickedGoalID[1] in constraints))
        log("error, received unexpected constraint: " + clickedGoalID[1])

    setConstraintsGoals[goal] = constraints[clickedGoalID[1]];

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

