"use strict";



let penaltiesProperties = {}

// initialize the penaltiesProperties to 0
Object.values(properties).forEach(function(property) {
    penaltiesProperties[property] = 0;
});


$("." + classPenaltyProperty).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "propertyName_weight"
    let clickedPropertyID = $(this).attr("id").split(splitChar);
    let property = properties[clickedPropertyID[0]];
    
    let newPenalty = parseInt($(this).val());

    // limit upper bound but not lower bound
    if (newPenalty <= 0) {

        penaltiesProperties[property] = newPenalty;
    }

    
    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

