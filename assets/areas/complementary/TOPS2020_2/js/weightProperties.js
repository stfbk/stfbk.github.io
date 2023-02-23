"use strict";

let weightsProperties = {}

// initialize the weights to 1
Object.values(properties).forEach(function(property) {
    weightsProperties[property] = 1;
});


$("." + classWeightProperty).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "propertyName_weight"
    let clickedPropertyID = $(this).attr("id").split(splitChar);
    let property = properties[clickedPropertyID[0]];

    let newWeight = parseInt($(this).val());

    // limit lower bound but not upper bound
    if (newWeight >= 0) {

        weightsProperties[property] = newWeight;
    }

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

