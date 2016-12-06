var country	=	prompt ("In which country was this file first published? (ISO-code, lower case)");
var dead	=	prompt ("Is the author of this work dead? y/n");
	if (dead == y) {
		var death	=	prompt ("Which year did the author of the work die? If alive type FALSE");	
	}
var publication	=	prompt ("In which year was this first published?");

switch (country) {
	case "us":
		UnitedStates();
		break;
	case "uk":
		UnitedKingdom();
		break;
}
