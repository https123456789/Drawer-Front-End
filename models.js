/*
	This file contains the classes for all graphics objects

	Created: August 26, 2021
	Author: Ben Landon
	Username: https12345678
*/
class GraphicObject {
	constructor(type, template, loader) {
		self.ready = false;
		self.type = type;
		self.template = template;
		self.loader = loader;
	}
	init() {
		self.ready = true;
		self.text = _loadTemplate(self.type, self.template);
	}
	_loadTemplate(type, template) {
		var path = "" + type + "/" + template + ".js";
		self.loader.innerHTML += "";
	}
}

console.log("models.js is loaded.");