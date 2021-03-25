"use strict"; // Basic types

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var intNum = 10;
var floatNum = 20.0; // It will print 20 cause of 0

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var booleanFlag = false;
var noneExistingVal = null;
var emptyVal = undefined;
console.log(intNum, floatNum, alphabet, booleanFlag, noneExistingVal, emptyVal); // Super set ANY (it can be all the above)

var var1 = "July";
console.log(var1); // Type Assertion - Is called when changing ones type to another

var str1 = '2';
var num1 = str1;
console.log(str1 + " [" + _typeof(str1) + "] >> " + num1 + " [" + _typeof(num1) + "]");