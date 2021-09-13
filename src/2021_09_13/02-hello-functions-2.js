// What will the following code do?
export function exercise1() {
  console.log('Hello');
}
// Answer: 
// It defines a function named exercise1.
// The function would print 'Hello' to the console.
// But the function is not invoked/called, so the console will not show anything.
// Let's fix that.
// Put the following code into the main.js file:
// ------------------------------------------------
// import { exercise1 } from "./2021_09_13/01-hello-functions-2"
// console.clear()
// exercise1()
// ------------------------------------------------
// Now, the console will show 'Hello'
// Amazing.

// ==========================================================

// Try to do the same thing with the following function:
export function exercise2() {
  console.log('Hello my friend');
}
// Make the console print 'Hello my friend' instead of 'Hello'.
// Amazing. Let's go on

// ==========================================================

// What will the function exercise3() log to the console when called?

function talk() {
  console.log('How are you?');
}
function farewell() {
  console.log('Goodbye');
}
function greet() {
  console.log('Hello');
}

export function exercise3() {
  greet();
  // your code here...
  farewell();
}

// Answer:
// The function greet() is invoked first, then farewell() is invoked.
// The console will show 'Hello' and 'Goodbye' in that order.
// talk() is not invoked, so the console will not show 'How are you?'
// Let's fix that. Change the function.

// ==========================================================

function saySomething(someText) {
  const prefix = 'Saying: '
  console.log(prefix + someText);
}

export function exercise4() {
  greet()
  saySomething('Wicked')
  farewell()
}
// what will you see in the console, when calling exercise4()?
// Try it out!

// ==========================================================
