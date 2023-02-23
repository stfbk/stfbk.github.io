"use strict";

let setLikelihood = {}



// initialize the likelihoods to high
Object.values(attackers).forEach(function(attacker) {
    setLikelihood[attacker] = likelihoods.high
});


$("." + classLikelihood).on('change', function(event){
    
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    // the ID is of the form "likelihood_attacker"
    let clickedSelectID = $(this).attr("id").split(splitChar);
    let attacker = clickedSelectID[1];
    let newLikelihoodKey = this.value;
    

    if (!(newLikelihoodKey in likelihoods))
        log("error, received unexpected likelihood: " + newLikelihoodKey)


    let newLikelihoodValue = likelihoods[newLikelihoodKey];
    setLikelihood[attackers[attacker]] = newLikelihoodValue;

    switch(newLikelihoodValue) {
        case likelihoods.high:
            $("#dot_" + attacker).css("background-color", "rgba(240, 84, 79, 0.9)");
            break;
        case likelihoods.medium:
            $("#dot_" + attacker).css("background-color", "rgba(255, 201, 41, 0.9)");
            break;
        case likelihoods.low:
            $("#dot_" + attacker).css("background-color", "rgba(102, 186, 107, 0.9)");
            break;
        case likelihoods.none:
            $("#dot_" + attacker).css("background-color", "rgba(240, 240, 240, 0.9)");
            break;
      }

    
    
    // update the list of architectures and solve the MOOP
    updateArchitecturesList();
    solveMOOP();
});
