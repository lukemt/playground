// 1. write a function that multiplies two numbers
// the function should take two arguments
// the first argument should be the first number
// the second argument should be the second number
// the function should return the product of the two numbers

function multiply(a, b) {
  return a * b
}

// example usage: multiply(2, 3) // returns 6
console.log(multiply(2, 3));

// 2. rewrite the function into 3 different syntaxes
// see: 01-functions.js
const multiply = function(a, b) {
  return a * b
}

const multiply = (a, b) => {
  return a * b
}

const multiply = (a, b) => a * b