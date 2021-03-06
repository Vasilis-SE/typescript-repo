// Simple for loop with index
console.log('\n------ For ------\n');
let final:string = '';
for(let i:number=0; i<10; i++)
    final += i + '';

console.log(final);

// For every element of for loop
console.log('\n------ For Of ------\n');
final = '';
let alphabet:string = 'abcdefghijklmnopqrstuvwxyz';
for(let char of alphabet) 
    final += char + ' > ';

console.log(final);

// While loop
console.log('\n------ While ------\n');
final = '';
let counter:number = 0;
while( counter < 20 ) {
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
} while( counter < 20 );