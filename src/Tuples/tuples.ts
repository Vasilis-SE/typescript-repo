let mytuple:any = [1,2,3,'hello', 5, 'world'];
mytuple.push(6);

let message1:string[] = mytuple.filter((val:any) => { return typeof val === 'string' });
let numbers1:number[] = mytuple.filter((val:any) => { return typeof val === 'number' });

console.log( message1.join(' ') );
console.log( numbers1.join(' ') );