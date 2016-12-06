// killing the tool
function killFunction () {
	alert("Sorry, this hasn't been coded yet")
	throw new Error("Something went badly wrong!")
	exit();
}

// Range function
function between(x, min, max) {
  return x >= min && x <= max;
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
function publication () {
	prompt ("Is the publication year of this work known? y/n");
	if (publication === "y" || publication === "yes") {
		publicationFunction();	
	}
	if (publication === "y" || publication === "no") {
			killFunction();
	}
function publicationFunction () {
	var published = prompt ("Which year was this work published?");
}
}

// Death of author
var dead = prompt ("Is the author of this work dead? y/n");
	if (dead === "y" || dead === "yes") {
		deathFunction();
	}
	if (dead === "n" || dead === "no") {
/*		livingFunction();	*/
		killFunction();
	}
function deathFunction () {
	var death = prompt ("Which year did the author of the work die?");
}

// country-funtions
//United States
function unitedStates() {
	publication();
}
