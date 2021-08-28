/*
	This is the main interface between the engine and the UI

	Created: August 25, 2021
	Author: Ben Landon
	Username: https12345678
*/

var editor = document.getElementById("svgEditor");
var displayArea = document.getElementById("displayArea");
var editorUpdateLoop = setInterval(updateEditor, 1);
engine.init();