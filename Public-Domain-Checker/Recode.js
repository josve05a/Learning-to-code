// variables
var multipleValues = [];
var published;
var deathyear;

// questions
multipleValues[0] = prompt("Was this published before 1923? y/n")
multipleValues[1] = prompt("Which year did the author die? If the author is alive, type ALIVE")

// template creation
if (multipleValues[0] === "y" || multipleValues[0] === "yes") {
	published = "-1923"
}

if (multipleValues[1] === "alive" || multipleValues[1] === "ALIVE") {
	deathyear = ""
} else {
	deathyear = "|deathyear=" + multipleValues[1]	
}

alert("{{PD-old-auto" + published + deathyear + "}}");
