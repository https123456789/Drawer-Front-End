/*
    This file contains all of the code for the interpreter

    Created: August 28, 2021
    Author: Ben Landon
    Username: https123456789
*/

class Interpreter {
    constructor() {
        self.active = false;
    }
    init() {
        self.active = true;
    }
    parse(command) {
        var retVal = null;
        switch(command) {
            case "rect":
                retVal = '<rect x="0" y="0" width="100%" height="100%"/>';
            default:
                retVal = "";
        }
        return(retVal);
    }
}