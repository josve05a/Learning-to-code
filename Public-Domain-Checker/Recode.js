// variables
var multipleValues = [];
var published;
var deathyear;
var art;
var old;

// killing the tool
function killFunction () {
	alert("Sorry, this")
	throw new Error("Sorry, this hasn't been coded yet.")
}

// this year
var d = new Date();
var n = d.getFullYear();

// questions
multipleValues[0] = prompt("Was this published before 1923? y/n")
multipleValues[1] = prompt("Which year did the author die? If the author is alive, type ALIVE")
multipleValues[2] = prompt("Is this work a faithful reproduction of a 2D-work (e.g. painting)? y/n")

// template creation
if (multipleValues[0] === "y" || multipleValues[0] === "yes") {
	published = "-1923"
}

if (multipleValues[1] === "alive" || multipleValues[1] === "ALIVE") {
	deathyear = ""
} else {
	deathyear = "|deathyear=" + multipleValues[1]	
}

if (multipleValues[1] <= (n - 70)) {
	old = "PD-old-auto"
}

if (multipleValues[2] === "y" || multipleValues[2] === "yes") {
	art = "PD-Art|"
}

//result
alert("{{" + art + old + published + deathyear + "}}");
