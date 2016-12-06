//global var's
var death;
var published;
var dead;
var living;

// killing the tool
function killFunction () {
	alert("Sorry, this hasn't been coded yet :(")
	throw new Error("Sorry, this hasn't been coded yet.")
}

// Country
var country = prompt ("In which country was this file first published? (ISO-code, lower case)");

switch (country) {
	case "us":
		unitedStates();
		break;
	default:
		killFunction();
		break;
}

// Publication year
function publicationFunction() {
var publication = prompt ("Is the publication year of this work known? y/n");
	if (publication === "y" || publication === "yes") {
		publicationFunction();	
	} else {
			killFunction();
	}
		
function publicationFunction () {
	published = prompt ("Which year was this work published?");
}
}
// Death of author
function deathFunction() {
var dead = prompt ("Is the author of this work dead? y/n");
	if (dead === "y" || dead === "yes") {
		dead = "yes";
		deathFunction();
	}
	if (dead === "n" || dead === "no") {
		living = "yes"
	}
function deathFunction () {
	death = prompt ("Which year did the author of the work die?");
}
}

// country-funtions
// United States
function unitedStates() {
	publicationFunction();
	deathFunction();
	// If we know death year
	if (dead == "yes") {
		if (published < 1923) {
			alert("{{PD-old-1923-auto|deathyear=" + death + "}}");	
			} else {
			alert("{{PD-old-auto|deathyear=" + death + "}}");	
			}
	}
	// If we don't know the death year
	if (living == "yes") {
		if (published < 1923) {
		alert("{{PD-1923}}");	
		} else {
		killFunction();	
		}
	}
}
