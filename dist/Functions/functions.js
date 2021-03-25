"use strict";
// Basic simple function
var addition1 = function (param1, param2) {
    console.log(param1 + param2);
};
// Function with returning value
var addition2 = function (param1, param2) { return param1 + param2; };
// Function with optional parameters
var addition3 = function (param1, param2) { return param1 + (param2 || 0); };
// Function with rest parameters
var addition4 = function () {
    var param = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        param[_i] = arguments[_i];
    }
    var final = 0;
    for (var _a = 0, param_1 = param; _a < param_1.length; _a++) {
        var num = param_1[_a];
        final += num;
    }
    return final;
};
// Function with defualt parameters
var addition5 = function (param1, param2) {
    if (param1 === void 0) { param1 = 0; }
    if (param2 === void 0) { param2 = 0; }
    return param1 + param2;
};
// Call functions
addition1(1, 1);
console.log(addition2(2, 2));
console.log(addition2(8, 2));
console.log(addition4(8, 2, 4, 6, 7, 8, 12, 342, 543, 32, 23));
console.log(addition5());
