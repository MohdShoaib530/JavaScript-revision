// function greet() {
//   console.log('hello my name is mohd shoaib ula ula a..a..a..');
// }
// greet();

// function sqr(x) {
//   // → x is a prameter
//   return x * x;
// }
// const square = sqr(5);
// console.log(square);
/* 
const numbers = [3, 4, 4, 4, 4, 4, 4, 4, 4];
function add() {
  const args = [...arguments];
  console.log(arguments);
}
add(...numbers); */

/* function sumOfAllParameters() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) sum += arguments[i];
  return sum;
}

let numbers = [1, 2, 4, 6, 7, 9];
let sumOf = sumOfAllParameters(...numbers);
console.log(sumOf); */

// arrow functions
const square = (x) => x * x;
const sumOfTwoNumbers = (x, y) => (sumOf = x + y);

// anonym function
/* let name = function () {
  console.log('hello my name is mohd shoaib');
};
name(); */

// immediately invoke function
// console.log('hi');
/* (function hi() {
  // → now we can use hi another place
})(); */
// iife
/* (function (x) {
  console.log(x * x);
})(6); */

/* function introduce() {
  console.log(`hello my name is ${this.name}`);
}
const person = { name: 'John' };
introduce.call(person); */

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

let person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); // Output: Hello, Alice!
greet.apply(person, ['Hello', '!']);
let newGreet = greet.bind(person, 'Hey', '!!!');
console.log(newGreet);
newGreet();
