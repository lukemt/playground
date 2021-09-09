// Hello World
console.log('Hello World')

// as a function...
function helloWorld() {
  console.log('Hello World')
}

// with a function call
helloWorld()

// a function with parameters
function hello(name) {
  console.log('Hello ' + name)
}

// with a function call
hello('World')

// a function with multiple parameters
function hello2(name, age) {
  console.log('Hello ' + name + ' you are ' + age + ' years old')
}

// with a function call
hello2('World', 42)

// another function call
hello2('Peter', 24)

// a function with a return value
function greet(name) {
  return 'Hello ' + name
}

// with a function call
const greeting = greet('World')
console.log(greeting)

// which of the previous functions is a pure function (meaning it has no side effects)?
// Answer: greet()

// ----------------------

// a function that takes this: [{age: 54, name: "Magarete", sex: "female"}]
// and turns it into this: ["Mrs. Magarete (54)"]
