/*
	This is the engine that processes, displays, and manages all objects

	Created: August 25, 2021
	Author: Ben Landon
	Username: https12345678
*/

var engine = {
	time: 0,
	timer: setInterval(tick, 1),
	active: false,
	template: "blank",
	init: function() {
		function getTemplate() {
			var retVal = null;
			while (retVal == null) {
				retVal = prompt("Template:");
			}
			if (models.includes(retVal)) {
				return(retVal);
			} else {
				alert(retVal + " is not a valid template.");
				return(getTemplate());
			}
		}
		console.log("Loading template...");
		var template = getTemplate();
		var xhttp = new XMLHttpRequest();
		xhttp.onload = function() {
			document.getElementById("svgEditor").value = this.responseText;
		}
		xhttp.open("GET", "Templates/SVG/" + template + ".txt");
		xhttp.send();
		console.log("Template loaded.");
		self.active = true;
		console.log("Engine is active.");
		return(0);
	},
	display: function(text) {
		displayArea.innerHTML = text;
		if ((engine.time % 20000) == 0) {
			console.log("Display was updated.");
		}
	}
}

function tick() {
	engine.time += 1;
	var text = editor.value;
	engine.display(text);
	
	if ((engine.time % 10000) == 0) {
		console.log("engine.time = " + engine.time);
	}
}