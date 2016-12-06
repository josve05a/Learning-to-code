function deathFunction () {
	var death = prompt ("Which year did the author of the work die?");
}
function publicationFunction () {
	var published = prompt ("Which year was this work published?");
}


var country = prompt ("In which country was this file first published? (ISO-code, lower case)");
var dead = prompt ("Is the author of this work dead? y/n");
	if (dead == "y" || "yes") {
		deathFunction();
	}
var publication = prompt ("Is the publication year of this work known? y/n");
	if (publication = "y" || "yes") {
		publicationFunction();	
	}

switch (country) {
	case "us":
		UnitedStates();
		break;
	default:
		"Sorry, this hasn't been coded yet."
		break;
}


