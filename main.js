"use strict";
exports.__esModule = true;
var message = "Hello world I am here";
console.log(message);
var x = 10;
var y = 20;
var sum;
// const toatal; // return an error that const variable must be initialized.
var title = "Sample project";
var isBeginner = true;
var total = 0;
var name = "Smith";
var sentance = "My name is " + name + "\nI am a beginner in typescript";
console.log(sentance);
var n = null;
var m = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// Tupling
var list3 = ["name", 22];
// enum
var Color;
(function (Color) {
    Color[Color["red"] = 4] = "red";
    Color[Color["blue"] = 5] = "blue";
    Color[Color["green"] = 6] = "green";
})(Color || (Color = {}));
;
var c = Color.green;
console.log("c is " + c + " ");
var randomValue = 10;
randomValue = "Help";
randomValue = true;
// let myVariable :any = 20;
var myVariable = 10;
// myVariable();
// myVariable.toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        name in obj;
}
if (hasName(myVariable)) {
    console.log("Myvariable ", myVariable);
}
// (myVariable as string).toUpperCase();
// // unknown
// let newVar:unknown = 10;
// // newVar(); //trow error becouse of define as unknown datatype 
// (newVar as string).toUpperCase();
// console.log();
// Type inferance
var a;
a = 10;
a = true;
var b = 20;
// b = true; it shown an error like  cannot assing boolean value to a number.
// union of types 
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
