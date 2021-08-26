/*
	This script manages the editor

	Created: August 26, 2021
	Author: Ben Landon
	Username: https12345678
*/

var window = [100, 100];

function updateEditor() {
	editor.style.width = window.innerWidth + "px";
	editor.style.height = window.innerHeight/2 + "px";
	console.log(editor.style.width);
	console.log(editor.style.height);
}

var editorUpdateLoop = setInterval(updateEditor, 1000);