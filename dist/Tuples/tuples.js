"use strict";

var mytuple = [1, 2, 3, 'hello', 5, 'world'];
mytuple.push(6);
var message1 = mytuple.filter(function (val) {
  return typeof val === 'string';
});
var numbers1 = mytuple.filter(function (val) {
  return typeof val === 'number';
});
console.log(message1.join(' '));
console.log(numbers1.join(' '));