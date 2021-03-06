"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Simple array with declaration
var arr1 = [1, 2, 3, 4, 5];
// Append to array old way
arr1.push(6);
arr1.push(7);
// Append to array es6
arr1 = __spreadArrays(arr1, [8, 9, 10]);
console.log(arr1.join(' -> '));
// Array using the Array constructor to define size of array
var power = Array(10);
for (var i = 1; i <= power.length; i++)
    power[(i - 1)] = i === 1 ? i : power[(i - 2)] * i;
console.log(power.join(' -> '));
// Using the every function
console.log('Every number is power is numeric: ', power.every(function (num, idx) { return /^-?[\d.]+(?:e-?\d+)?$/.test(num.toString()); }));
// Using filter funciton
console.log('Filter all numers from power where %2 == 0: ', JSON.stringify(power.filter(function (num) { return num % 2 === 0; })));
// Using map function
console.log('The square root of power variable: ', power.map(function (num) { return Math.sqrt(num); }));
