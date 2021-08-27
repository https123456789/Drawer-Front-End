/*
	This is the engine that processes, displays, and manages all objects

	Created: August 25, 2021
	Author: Ben Landon
	Username: https12345678
*/

class Loader {
	constructor() {
		self.ready = false;
		self.scripts = [];
		self.loader = document.getElementById("scriptLoader");
	}
	init() {
		self.ready = true;
		return(0);
	}
	add(path) {
		self.scripts.push(path);
		return(0);
	}
	load() {
		console.log(self.loader);
		self.loader.innerHTML = "<h3>Scripts</h3><ul>";
		for (var i = 0; i < self.scripts.length; i++) {
			self.loader.innerHTML += "<li>" + self.scripts[i] + "</li>";
		}
		self.loader.innerHTML += "</ul>";
		for (var i = 0; i < self.scripts.length; i++) {
			self.loader.innerHTML += "<script src='" + self.scripts[i] + "'></script>";
		}
		return(0);
	}
}
var extemplate = '<svg version="1.1" width="100px" height="100px">\n\n</svg>';
var engine = {
	time: 0,
	timer: setInterval(tick, 1),
	active: false,
	template: "blank",
	loaderHTML: document.getElementById("scriptLoader"),
	loader: new Loader(),
	init: function() {
		console.log("Loading template...");
		engine.loader.init();
		engine.loader.add("Templates/SVG/blank.js");
		engine.loader.load();
		document.getElementById("svgEditor").value = extemplate;
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