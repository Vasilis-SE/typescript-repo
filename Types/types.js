// Basic types
var intNum = 10;
var floatNum = 20.0; // It will print 20 cause of 0
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var booleanFlag = false;
var noneExistingVal = null;
var emptyVal = undefined;
console.log(intNum, floatNum, alphabet, booleanFlag, noneExistingVal, emptyVal);
// Super set ANY (it can be all the above)
var var1 = "July";
console.log(var1);
// Type Assertion - Is called when changing ones type to another
var str1 = '2';
var num1 = str1;
console.log(str1 + " [" + typeof str1 + "] >> " + num1 + " [" + typeof num1 + "]");
