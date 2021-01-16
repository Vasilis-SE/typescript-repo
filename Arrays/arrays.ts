// Simple array with declaration
let arr1:number[] = [1,2,3,4,5];

// Append to array old way
arr1.push(6);
arr1.push(7);

// Append to array es6
arr1 = [ ...arr1, ...[8,9,10] ];

console.log( arr1.join(' -> ') );

// Array using the Array constructor to define size of array
let power:number[] = Array(10);
for(let i=1; i<=power.length; i++) 
    power[ (i-1) ] = i === 1 ? i : power[ (i-2) ] * i;

console.log( power.join(' -> ') );

// Using the every function
console.log('Every number is power is numeric: ', power.every((num, idx) => { return /^-?[\d.]+(?:e-?\d+)?$/.test( num.toString() ); }) );

// Using filter funciton
console.log('Filter all numers from power where %2 == 0: ', JSON.stringify(power.filter((num) => { return num % 2 === 0; })) );

// Using map function
console.log('The square root of power variable: ', power.map((num) => { return Math.sqrt(num) }));

