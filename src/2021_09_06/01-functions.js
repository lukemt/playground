// Funktionen

function sayHello(name) {
  console.log('Hello ' + name)
}

sayHello("Lukas")
sayHello("Petry")
sayHello("")

const variable = sayHello

variable("Dieter")

console.log(typeof variable)

// --------------------

const sayHello = function (name) {
  console.log('Hello ' + name)
}

sayHello('Lukas')
sayHello('Petry')
sayHello('')

console.log(typeof sayHello)

// --------------------

const sayHello = (vorname, nachname) => {
  console.log('Hello ' + vorname + ' ' + nachname)
}

sayHello('Lukas', 'Petry')
sayHello('Petry')
sayHello('')

// ----- syntax besonderheit 1
const sayHello = vorname => {
  console.log('Hello ' + vorname)
}

// ----- syntax besonderheit 2
const sayHello = vorname => console.log('Hello ' + vorname)

// const add = (a, b) => {
//   return a + b
// }

const add = (a, b) => a + b

sayHello('Lukas')
sayHello('Petry')
sayHello('')

const result = add(2, 2)
console.log(result)
