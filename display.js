/*
    This file controls the display of the HTML on the page

    Created: August 28, 2021
    Author: Ben Landon
    Username: https123456789
*/

var page = document.body;
var scroller = setInterval(scroll, 1000);
function scroll() {
    window.scrollTo(0, 0);
    console.log(window.scrollX + ", " + window.scrollY);
}