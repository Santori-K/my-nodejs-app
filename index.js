const { greet, user } = require('./functions');
const { add, subtract } = require('./math');

console.log(greet(user.name));
console.log(`Addition: ${add(5, 3)}`);
console.log(`Subtraction: ${subtract(10, 4)}`);