"use strict";

var a = 4;
var b = 5;
if (a === b) console.log(a + " and " + b + " are equal");else console.log(a + " and " + b + " are different");
if (a > b) console.log(a + " is greater than " + b);else console.log(a + " is less than " + b);
var grade = "A";

switch (grade) {
  case 'A':
    console.log('Excellent!');
    break;

  case 'B':
    console.log('Good Job!');
    break;

  case 'C':
    console.log('Could Be Better!');
    break;

  case 'F':
    console.log('Failed!');
    break;
}