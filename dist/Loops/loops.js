"use strict"; // Simple for loop with index

console.log('\n------ For ------\n');
var _final = '';

for (var i = 0; i < 10; i++) {
  _final += i + '';
}

console.log(_final); // For every element of for loop

console.log('\n------ For Of ------\n');
_final = '';
var alphabet1 = 'abcdefghijklmnopqrstuvwxyz';

for (var _i = 0, alphabet1_1 = alphabet1; _i < alphabet1_1.length; _i++) {
  var _char = alphabet1_1[_i];
  _final += _char + ' > ';
}

console.log(_final); // While loop

console.log('\n------ While ------\n');
_final = '';
var counter = 0;

while (counter < 20) {
  _final += counter + ' ';
  console.log(_final);
  counter++;
} // Do while loop


console.log('\n------ Do While ------\n');

do {
  _final += counter + ' ';
  console.log(_final);
  counter++;
} while (counter < 20);