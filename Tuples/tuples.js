var mytuple = [1, 2, 3, 'hello', 5, 'world'];
mytuple.push(6);
var message = mytuple.filter(function (val) { return typeof val === 'string'; });
var numbers = mytuple.filter(function (val) { return typeof val === 'number'; });
console.log(message.join(' '));
console.log(numbers.join(' '));
