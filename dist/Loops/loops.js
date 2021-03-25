"use strict";
// Simple for loop with index
console.log('\n------ For ------\n');
var final = '';
for (var i = 0; i < 10; i++)
    final += i + '';
console.log(final);
// For every element of for loop
console.log('\n------ For Of ------\n');
final = '';
var alphabet1 = 'abcdefghijklmnopqrstuvwxyz';
for (var _i = 0, alphabet1_1 = alphabet1; _i < alphabet1_1.length; _i++) {
    var char = alphabet1_1[_i];
    final += char + ' > ';
}
console.log(final);
// While loop
console.log('\n------ While ------\n');
final = '';
var counter = 0;
while (counter < 20) {
    final += counter + ' ';
    console.log(final);
    counter++;
}
// Do while loop
console.log('\n------ Do While ------\n');
do {
    final += counter + ' ';
    console.log(final);
    counter++;
} while (counter < 20);
