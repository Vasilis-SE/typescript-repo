// Basic types
const intNum:number = 10;
const floatNum:number = 20.0; // It will print 20 cause of 0
const alphabet:string = "abcdefghijklmnopqrstuvwxyz";
const booleanFlag:boolean = false;
const noneExistingVal:null = null;
const emptyVal:undefined = undefined;

console.log(intNum, floatNum, alphabet, booleanFlag, noneExistingVal, emptyVal);

// Super set ANY (it can be all the above)
const var1:any = "July";
console.log(var1);

// Type Assertion - Is called when changing ones type to another
let str1:string = '2';
let num1:number = <number> <any> str1;
console.log(`${str1} [${typeof str1}] >> ${num1} [${typeof num1}]`);
