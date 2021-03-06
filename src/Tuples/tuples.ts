let mytuple = [1,2,3,'hello', 5, 'world'];
mytuple.push(6);

let message:string[] = mytuple.filter((val) => { return typeof val === 'string' });
let numbers:number[] = mytuple.filter((val) => { return typeof val === 'number' });

console.log( message.join(' ') );
console.log( numbers.join(' ') );