// killing the tool
function killFunction () {
	alert("Sorry, this hasn't been coded yet :(")
	throw new Error("Sorry, this hasn't been coded yet.")
}

// variables
var multipleValues = [];
var published;

// questions
multipleValues[0] = prompt("Was this published before 1923? y/n")

// template creation
if (multipleValues[0] === "y" || multipleValues[0] === "yes") {
published = "-1923"
}
