//functions
function deathFunction () {
	var death = prompt ("Which year did the author of the work die?");
}
function publicationFunction () {
	var published = prompt ("Which year was this work published?");
}
function killFunction () {
	alert("Sorry, this hasn't been coded yet")
	throw new Error("Something went badly wrong!");
}

// variables
var country = prompt ("In which country was this file first published? (ISO-code, lower case)");

var publication = prompt ("Is the publication year of this work known? y/n");
	if (publication = "y" || "yes") {
		publicationFunction();	
	}
	if (publication = "n" || "no") {
			killFunction();
	}
var dead = prompt ("Is the author of this work dead? y/n");
	if (dead == "y" || "yes") {
/*		deathFunction();	*/
		killFunction();
	}
	if (dead == "n" || "no") {
		livingFunction();
	}

// countries
switch (country) {
	case "us":
		UnitedStates();
		break;
	default:
		killFunction();
		break;
}
