"use strict";



let thresholdsProperties = {}

// initialize the thresholdsProperties to 0
Object.values(properties).forEach(function(property) {
    thresholdsProperties[property] = 0;
});


$("." + classThresholdProperty).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "propertyName_weight"
    let clickedPropertyID = $(this).attr("id").split(splitChar);
    let property = properties[clickedPropertyID[0]];
    
    let newThreshold = parseInt($(this).val());

    // no lower bound nor upper bound limit
    thresholdsProperties[property] = newThreshold;

    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});

