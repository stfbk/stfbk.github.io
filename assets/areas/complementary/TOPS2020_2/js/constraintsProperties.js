"use strict";



let setConstraintsProperties = {}

// initialize the constraints to none
Object.values(properties).forEach(function(property) {
    setConstraintsProperties[property] = constraints.none;
});


$("." + classConstraintProperty).on('click', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "property_constraint"
    let clickedPropertyID = $(this).attr("id").split(splitChar);
    let property = properties[clickedPropertyID[0]];

    if (!(clickedPropertyID[1] in constraints))
        log("error, received unexpected constraint: " + clickedPropertyID[1])

    setConstraintsProperties[property] = constraints[clickedPropertyID[1]];

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

