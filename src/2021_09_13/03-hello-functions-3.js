
// Change the code in main.js to the following:
// ------------------------------------------------
// import * as exercises from "./2021_09_13/01-hello-functions-2"
// console.clear()
// exercises.exercise5()
// ------------------------------------------------

export function exercise5() {
  let text = 'Hello'
  saySomething(text)
  text = 'Goodbye'
  saySomething(text)
}
// What will you see in the console?

// ==========================================================

export function exercise6() {
  let text = 'Hello'
  text = 'Goodbye'
  saySomething(text)
  saySomething(text)
}
// And now?
// Answer: Two times 'Saying: Goodbye', but the console will group it
// ==========================================================

function prefix(prefixText) {
  const prefixStr = 'Always: '
  return prefixStr + prefixText
}

export function exercise7() {
  const text = prefix('Wicked')
  saySomething(text)
}

// What's happening here?
// Run exercise7() and see what happens.
// Try to understand what's happening.
// Use the debugger to find out.

// PAY ATTENTION:
// In the prefix function there are two variables: prefixText and prefixStr
// in the exercise7() function there is only one variable: text

// ==========================================================

// Really Weird:

export function exercise8() {
  const prefixStr = 'Yeah: '
  const prefixText = prefixStr + 'Wicked'
  let text = prefixText
  text = prefix(prefixStr)
  saySomething(text)
}
// The console will show 'Saying: Always: Yeah:'
// Can you understand why?
// Use the debugger to find out.

// ==========================================================

// make the console print:
// 'Saying: 1'
// 'Saying: 2'
// 'Saying: 3'
// 'Saying: 4'
// 'Saying: 5'

export function exercise9() {
  const array = [1, 2, 3, 4, 5]
  // your code here...
}

// Solution: see 01-solutions.js

// ==========================================================

// Let's make the thing a bit less repetitive by using forEach:
export function exercise10() {
  const array = [1, 2, 3, 4, 5]
  // your code here...
}

// Better, right?

// Solution: see 01-solutions.js

// ==========================================================

// square each number before printing it

function square(number) {
  // your code here...
}

export function exercise11() {
  const array = [1, 2, 3, 4, 5]
  array.forEach(element => {
    // your code here...
    // const squaredNumber =
    // ...
  })
}

// solution: see 01-solutions.js

// ==========================================================

// use map to square each number and forEach to print it

export function exercise12() {
  const array = [1, 2, 3, 4, 5]
  // your code here...
}

// solution: see 01-solutions.js

// Now,
// Look at the solutions file and see how you can use map and forEach
// in quite different ways to do the same thing.
// This is because functions can be stored as variables in JavaScript.
// Try to understand what's happening.
