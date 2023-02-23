"use strict";

function isValueInDictionary(dict, value) {

    let isIn = false;

    Object.values(dict).forEach(v => {
        if (v === value) {
            isIn = true;
        }
    });
    return isIn;
}


function isKeyInDictionary(dict, value) {

    let isIn = false;

    Object.keys(dict).forEach(v => {
        if (v === value) {
            isIn = true;
        }
    });
    return isIn;
}



function isAssignmentInArray(array, assignment) {

    return array.some(tempAssignment => 
        ((tempAssignment.getEntity() === assignment.getEntity()) && (tempAssignment.getDomain() === assignment.getDomain())))

}



function log(message) {
    console.log(message);
}




function getKeyFromValue(dict, value) {
    return Object.keys(dict).filter(function(key) {return dict[key] === value})[0];
}




function getColorFromValue(value) {

    let color;

    if (value > 0) 
        color = "#2ecc71"
    else if (value < 0) 
        color = "#e74c3c"
    else 
        color = "#212529"

    return color;
}