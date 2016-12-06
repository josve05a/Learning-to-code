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

// Publication year
function publicationFunction() {
publication = prompt ("Was this published before 1923? y/n");
	if (publication === "y" || publication === "yes") {
		published = "pre-1923";
	} else {
		published = "after-1923";
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

	publicationFunction();
	deathFunction();
	// If we know death year
		if (published == "pre-1923") {
			alert("{{PD-old-1923-auto|deathyear=" + death + "}}");	
			} else {
			alert("{{PD-old-auto|deathyear=" + death + "}}");	
			}

	// If we don't know the death year
	if (living == "yes") {
		if (published == "pre-1923") {
		alert("{{PD-1923}}");	
		} else {
		tryAlternatives();	
		}
	}

/* ------------------------------------------------ */
/* ------------------------------------------------ */
/* ------------------------------------------------ */
