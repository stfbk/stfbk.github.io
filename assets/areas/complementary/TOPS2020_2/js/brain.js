"use strict";

let isOrderByGoals = true;
let isMOCOP = true;

let scenarioRequirementsOnGoals = "scenarioRequirementsOnGoals"
let scenarioRequirementsOnProtectionLevels = "scenarioRequirementsOnProtectionLevels"

function solveMOOP() {

    // invoke either MOCOP or the other
    if (isMOCOP)
        solveMOCOP(true);
    else
        solveCWSOP(true);
}





$("#" + idBestArchitecturesTableBody).on('click', 'td.' + classSortOrder , function(event){

    event.stopPropagation();
    event.stopImmediatePropagation();
 
    let selectedSortOrder = $(this).attr("id");
   
    isOrderByGoals = (selectedSortOrder === sortOrder.goals)

    solveMOOP();
});





$("#" + idRadioMOCOP).on('change', function(event){

    event.stopPropagation();
    event.stopImmediatePropagation();

    isMOCOP = true
    
    $("#" + scenarioRequirementsOnGoals).collapse("hide");
    $("#" + scenarioRequirementsOnProtectionLevels).collapse("hide");
    $("#" + idRadioGoals).attr("name", "goals");
    $("#" + idRadioGoals).prop("checked", true);
    $("#" + idRadioProtection).prop("checked", true);

    solveMOOP();
});

$("#" + idRadioCWSOP).on('change', function(event){

    event.stopPropagation();
    event.stopImmediatePropagation();

    $("#" + scenarioRequirementsOnGoals).collapse("show");
    $("#" + scenarioRequirementsOnProtectionLevels).collapse("show");
    $("#" + idRadioGoals).attr("name", "Objective");

    isMOCOP = false

    solveMOOP();
});





$("#" + idRadioGoals).on('change', function(event){

    event.stopPropagation();
    event.stopImmediatePropagation();

    isOrderByGoals = true

    solveMOOP();
});

$("#" + idRadioProtection).on('change', function(event){

    event.stopPropagation();
    event.stopImmediatePropagation();

    isOrderByGoals = false

    solveMOOP();
});





$( document ).ready(function() {
    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();

    // remember to comment to exclude experimentation
    //experimentation();
});



function experimentation() {

    // tune here
    let currentCase = "best";
    isOrderByGoals = false;
    isMOCOP = false;
    let numberOfRepetitions = 1000;

    console.log("started experimentation, current case is " + currentCase + ", ordered by goals is " + isOrderByGoals + ", is MOCOP is" + isMOCOP + ", number of repetitions is " + numberOfRepetitions)

    
    // best case
    if (currentCase === "best") {
        possibleArchitectures.forEach(function(currentArchitecture, index) {
            if (index === 0)
                currentArchitecture.setMaximize(true)
        }); 
    }

    // worst case
    else if (currentCase === "worst") {
        possibleArchitectures.forEach(function(currentArchitecture) {
                currentArchitecture.setMaximize(true)
        }); 
    }

    // average case
    else if (currentCase === "average") {
        possibleArchitectures.forEach(function(currentArchitecture, index) {
            if (index < 41)
                currentArchitecture.setMaximize(true)
        }); 
    }


    let i = 0;
    let sum = 0;
    for(i = 0; i < numberOfRepetitions; i++) {
        if (isMOCOP)
            sum = sum + solveMOCOP(false);
        else
            sum = sum + solveCWSOP(false);
    }
    sum = sum / numberOfRepetitions;
    log(sum);
}

