
var prefilterClass 		= "prefilter"
var weightClass 		= "weight"
var constraintClass 	= "constraint"
var hardconstraintClass = "hardconstraint"
var softconstraintClass = "softconstraint"
var penaltyClass 		= "penalty"
var whatifClass 		= "whatif"

// properties
var redundancy 			= "redundancy"
var scalability 		= "scalability"
var reliability 		= "reliability"
var maintenance 		= "maintenance"
var dosresilience 		= "dosresilience"
var vendorlockin 		= "vendorlockin"
var onpremisesavings 	= "onpremisesavings"
var cspsavings 			= "cspsavings"

var properties = [redundancy, scalability, reliability, maintenance, dosresilience, vendorlockin, onpremisesavings, cspsavings]

var splitChar = "_"


$(document).ready(function(){

	// ===== ===== ===== START WIRING WITH UI ===== ===== =====

	// update the best architecture
	computeBestArchitecture();

    // enable tooltips
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})


	// enable pre-filters
	$( "." + prefilterClass ).click(function() {

		var opacityLevel = "0.5"

		var thisClass = $(this).attr("id").split(splitChar);
		var opacity = $(this).css("opacity");

		console.log("clicked " + thisClass[0] + splitChar + thisClass[1])

		var influenceToRemoveFrom = window[thisClass[1] + "_influence"];
		var originalInfluence = window["original_" + thisClass[1] + "_influence"]

		// we have to fade out
		if (opacity == 1) {

			// first, check that this is possible, i.e. the user
			// is not removing the last configuration possible
			// TODO
			if (Object.keys(influenceToRemoveFrom).length == 1 && thisClass[1] !== "rm") {
				// do nothing
			}
			else {

				delete influenceToRemoveFrom[thisClass[0]]
				delete influenceToRemoveFrom["hybridClientOnPremise"];
				delete influenceToRemoveFrom["hybridOnPremiseCloud"];

				$(this).css("opacity", opacityLevel);
			}


		}
		// we have to fade in
		else {

			influenceToRemoveFrom[thisClass[0]] = originalInfluence[thisClass[0]];

			if(originalInfluence.hasOwnProperty('hybridClientOnPremise')){
				influenceToRemoveFrom["hybridClientOnPremise"] = JSON.parse(JSON.stringify(originalInfluence["hybridClientOnPremise"]));
			}
			if(originalInfluence.hasOwnProperty('hybridOnPremiseCloud')){
				influenceToRemoveFrom["hybridOnPremiseCloud"] = JSON.parse(JSON.stringify(originalInfluence["hybridOnPremiseCloud"]));
			}

			$(this).css("opacity", 1);
		}

		// update the best architecture
		computeBestArchitecture();

	});



   // enable weights
   $( "." + weightClass ).change(function(){

		var thisClass = $(this).attr("id").split(splitChar);
		var newValue = $(this).val();

		console.log("changed weight of " + thisClass[0] + splitChar + thisClass[1] + " to " + newValue);

		// now add the weight to the optimization
		weights[properties_number[thisClass[0]]] = newValue;

		// update the best architecture
		computeBestArchitecture();
	});



   // enable constraints
   $( "." + constraintClass ).change(function(){

		var thisClass = $(this).attr("id").split(splitChar);
		var newValue = $(this).val();

		console.log("changed threshold of " + thisClass[0] + splitChar + thisClass[1] + " to " + newValue);

		// now apply the constraint to the optimization
		penalties[properties_number[thisClass[0]]]["greaterOrEqualThan"] = newValue;

		// update the best architecture
		computeBestArchitecture();
	});



   // enable hard constraints
   $( "." + hardconstraintClass ).change(function(){

		var thisClass = $(this).attr("id").split(splitChar);

		console.log("set hard constraint for " + thisClass[0] + splitChar + thisClass[1]);

		// now apply the hard constraint to the optimization and eventually remove the soft
		penalties[properties_number[thisClass[0]]]["isHardOrSoft"] = "hard";

		// update the best architecture
		computeBestArchitecture();
	});



   // enable soft constraints
   $( "." + softconstraintClass ).change(function(){

		var thisClass = $(this).attr("id").split(splitChar);

		console.log("set soft constraint for " + thisClass[0] + splitChar + thisClass[1]);

		// now apply the soft constraint to the optimization and eventually remove the hard
		penalties[properties_number[thisClass[0]]]["isHardOrSoft"] = "soft";

		// update the best architecture
		computeBestArchitecture();
	});



   // enable penalties
   $( "." + penaltyClass ).change(function(){

		var thisClass = $(this).attr("id").split(splitChar);
		var newValue = $(this).val();

		console.log("changed penalty of " + thisClass[0] + splitChar + thisClass[1] + " to " + newValue);

		// now apply the constraint to the optimization
		penalties[properties_number[thisClass[0]]]["elsePenaltyOf"] = newValue;

		// update the best architecture
		computeBestArchitecture();
	});


	   // enable what-if analysis
   $( "." + whatifClass ).change(function(){

		var thisClass = $(this).attr("id").split(splitChar);

		console.log("whatif on " + thisClass[0] + splitChar + thisClass[1] );

		// now do it
		// TODO
	});



})

function depictBestArchitecture(architecturesConfig) {

	var bestValue = []
	var bestArray = []
	var bestConfig = []

	architecturesConfig.forEach(function(architectureConfig) {

		bestValue.push(architectureConfig["value"])
		bestArray.push(architectureConfig["properties"])
		bestConfig.push(architectureConfig["configuration"])
	});




	$('[class^="toRemoveOnUpdate"]').remove();

	if (bestValue == Number.NEGATIVE_INFINITY) {
		$("#noarchitecture").removeClass("d-none")
	}
	else {
		$("#noarchitecture").addClass("d-none")
	}

	// for each best configuration
	bestArray.forEach(function(bestArrayConf) {

		var stringToAppend = "<tr class=\"toRemoveOnUpdate\"> <th data-toggle=\"tooltip\" data-placement=\"left\" title=\"The resulting value\"> Value </th>"

		bestArrayConf.forEach(function(bestValuei, index, array) {

			var charToAdd;
			var color = "#34495e"

			if (bestValuei > 0) {
				charToAdd = "+"
				color = "#2ecc71"
			}
			else if (bestValuei < 0) {
				charToAdd = "-"
				bestValuei = - bestValuei
				color = "#e74c3c"
			}
			else if (index !== array.length - 1) {
				charToAdd = "="
				bestValuei = 1
			}

			var stringToAdd = "";

			for (var j = 0; j < bestValuei; j++) {

				stringToAdd = stringToAdd + charToAdd
			}

			if (index === array.length - 1){
				if (charToAdd === "-") {
					stringToAdd = "-" + bestValuei
				}
				else {
					stringToAdd = "+" + bestValuei
				}
			}

			stringToAppend = stringToAppend + "<td class=\"text-center\" style=\"color: " + color + "\"> <p>" + stringToAdd + "</p> </td>";
		});

		stringToAppend = stringToAppend + "</tr>";

		$("#propertiesAnalysis tr:last").after(stringToAppend)
	});


	console.log(bestConfig)

	bestConfig.forEach(function(bestConfigI) {

		var stringToAppend = "<tr class=\"toRemoveOnUpdate\">"

		var stringToAdd = {}
		stringToAdd["client"] = "<td class=\"text-center\">"
		stringToAdd["onPremise"] = "<td class=\"text-center\">"
		stringToAdd["csp"] = "<td class=\"text-center\">"


		for (var key in bestConfigI) {

			// key === "nullInfluence" when there is no RM
			if (key !== "nullInfluence") {

				var StringToAddTemp = "<img src=\"" + key + ".png\" class=\"img-fluid mx-1 whatif\" width=\"30em\" height=\"30em\" />"

				if (bestConfigI[key] == "hybridClientOnPremise") {
					stringToAdd["client"] = stringToAdd["client"] + StringToAddTemp
					stringToAdd["onPremise"] = stringToAdd["onPremise"] + StringToAddTemp
				}
				else if (bestConfigI[key] == "hybridOnPremiseCloud") {
					stringToAdd["onPremise"] = stringToAdd["onPremise"] + StringToAddTemp
					stringToAdd["csp"] = stringToAdd["csp"] + StringToAddTemp
				}
				else {
					stringToAdd[bestConfigI[key]] = stringToAdd[bestConfigI[key]] + StringToAddTemp

				}
			}
		}

		stringToAppend = stringToAppend + stringToAdd["client"] + "</td>" + stringToAdd["onPremise"] + "</td>" + stringToAdd["csp"] + "</td></tr>";

			$("#bestArchitectures tr:last").after(stringToAppend)
	});



}


// ===== ===== ===== END WIRING WITH UI ===== ===== =====


// ===== ===== ===== START OF OPTIMIZATION PROBLEM ===== ===== =====

// properties

var numberOfBestArchitecturesToShow = 81;

// properties-number
var properties_number = {}
properties_number[redundancy] 		= 0;
properties_number[scalability] 		= 1;
properties_number[reliability] 		= 2;
properties_number[maintenance] 		= 3;
properties_number[dosresilience] 	= 4;
properties_number[vendorlockin] 	= 5;
properties_number[onpremisesavings] = 6;
properties_number[cspsavings] 		= 7;

// matrix entity-properties
var original_proxy_influence = {
		"client"				:{"redundancy":+0, "scalability":+1, "reliability":+1, "maintenance":+1, "dosresilience":+1, "vendorlockin":+0, "onpremisesavings":+1, "cspsavings":+0},
		"onPremise"				:{"redundancy":+0, "scalability":-1, "reliability":-1, "maintenance":-1, "dosresilience":-1, "vendorlockin":+0, "onpremisesavings":-1, "cspsavings":+0},
		"hybridClientOnPremise"	:{"redundancy":+0, "scalability":+0, "reliability":+0, "maintenance":+0, "dosresilience":+0, "vendorlockin":+0, "onpremisesavings":+0, "cspsavings":+0},
	}

var original_rm_influence = {
		"onPremise"				: {"redundancy":-1, "scalability":-1, "reliability":-1, "maintenance":-1, "dosresilience":-1, "vendorlockin":+1, "onpremisesavings":-1, "cspsavings":+1},
		"csp"					: {"redundancy":+1, "scalability":+1, "reliability":+1, "maintenance":+1, "dosresilience":+1, "vendorlockin":-1, "onpremisesavings":+1, "cspsavings":-1},
		"nullInfluence"	: 		{"redundancy":+0, "scalability":+0, "reliability":+0, "maintenance":+0, "dosresilience":+0, "vendorlockin":+0, "onpremisesavings":+0, "cspsavings":+0}
	}

var original_ms_influence = {
		"onPremise"				: {"redundancy":-1, "scalability":-1, "reliability":-1, "maintenance":-1, "dosresilience":-1, "vendorlockin":+1, "onpremisesavings":-1, "cspsavings":+1},
		"csp"					: {"redundancy":+1, "scalability":+1, "reliability":+1, "maintenance":+1, "dosresilience":+1, "vendorlockin":-1, "onpremisesavings":+1, "cspsavings":-1},
		"hybridOnPremiseCloud"	: {"redundancy":+0, "scalability":+0, "reliability":+0, "maintenance":+0, "dosresilience":+0, "vendorlockin":+0, "onpremisesavings":+0, "cspsavings":+0},
	}

var original_ds_influence = {
		"onPremise"				: {"redundancy":-1, "scalability":-1, "reliability":-1, "maintenance":-1, "dosresilience":-1, "vendorlockin":+1, "onpremisesavings":-1, "cspsavings":+1},
		"csp"					: {"redundancy":+1, "scalability":+1, "reliability":+1, "maintenance":+1, "dosresilience":+1, "vendorlockin":-1, "onpremisesavings":+1, "cspsavings":-1},
		"hybridOnPremiseCloud"	: {"redundancy":+0, "scalability":+0, "reliability":+0, "maintenance":+0, "dosresilience":+0, "vendorlockin":+0, "onpremisesavings":+0, "cspsavings":+0},
	}



var proxy_influence = JSON.parse(JSON.stringify(original_proxy_influence));
var rm_influence 	= JSON.parse(JSON.stringify(original_rm_influence));
var ms_influence 	= JSON.parse(JSON.stringify(original_ms_influence));
var ds_influence 	= JSON.parse(JSON.stringify(original_ds_influence));


// weights for optimization
weights = [1, 1, 1, 1, 1, 1, 1, 1]


// penalties (soft constraints). For hard constraints, just give -1000
// Note: penalty should be NEGATIVE, since it will be added from the vector sum
penalties = [	{"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null}, {"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null},
				{"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null}, {"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null},
				{"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null}, {"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null},
				{"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null}, {"greaterOrEqualThan":0, "elsePenaltyOf":0, "isHardOrSoft":null}]



function computeBestArchitecture() {

	var architecturesConfig = []

	// loop on every possible architecture
	for (var proxy_key in proxy_influence) {
		for (var ms_key in ms_influence) {
			for (var ds_key in ds_influence) {
				for (var rm_key in rm_influence) {

					// start from 0
					var architectureSum = 0;

					// properties array
					var tempArray = []

					// for hard constraints
					var toConsider = true;

					// for each property
					properties.forEach(function(property) {

						// start from 0
						var propertySum = 0;
						var propertyNumber = properties_number[property];

						// sum influence of each entity
						propertySum = propertySum +
							proxy_influence[proxy_key][property] +
							rm_influence[rm_key][property] +
							ms_influence[ms_key][property] +
							ds_influence[ds_key][property]

						// multiply by weight
						propertySum = propertySum * weights[propertyNumber]

						// if under the threshold
						if (propertySum < parseInt(penalties[propertyNumber]["greaterOrEqualThan"])) {

							// if constraint is soft
							if (penalties[propertyNumber]["isHardOrSoft"] == "soft") {

								// apply penalty
								architectureSum = architectureSum + parseInt(penalties[propertyNumber]["elsePenaltyOf"])
							}
							// if constraint is hard
							else if (penalties[propertyNumber]["isHardOrSoft"] == "hard") {

								// get rid of this architecture
								toConsider = false
							}
						}

						tempArray.push(propertySum);

						// sum the property in the architecture final value
						architectureSum = architectureSum + propertySum
					});

					tempArray.push(architectureSum);

					// if the architecture respects hard constraints
					if (toConsider) {

						architecturesConfig.push( {
							"configuration":{"proxy": proxy_key, "ms": ms_key, "rm": rm_key, "ds": ds_key},
							"properties":tempArray,
							"value":architectureSum })
					}
				}
			}
		}
	}

	// sort basing on value
	architecturesConfig.sort(function(a, b) {
		return parseFloat(b["value"]) - parseFloat(a["value"]);
	});

  // log
  console.log("there are " + architecturesConfig.length  + " architectures");

	// take best 5
	architecturesConfig = architecturesConfig.slice(0, numberOfBestArchitecturesToShow);

	// now draw
	depictBestArchitecture(architecturesConfig);


}

// ===== ===== ===== END OF OPTIMIZATION PROBLEM ===== ===== =====
