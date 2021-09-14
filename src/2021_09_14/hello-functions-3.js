
// Change the code in main.js to the following:
// ------------------------------------------------
// import * as exercises from "./2021_09_14/hello-functions-3"
// console.clear()
// exercises.exercise5()
// ------------------------------------------------

function saySomething(someText) {
  const prefix = 'Saying: '
  console.log(prefix + someText)
}

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
