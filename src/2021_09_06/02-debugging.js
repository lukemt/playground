debugger
console.log('start')

function sayHello(name) {
  console.log('Hello ' + name)
}

sayHello('Lukas')
sayHello('Petry')
sayHello('')

const variable = sayHello

variable('Dieter')

console.log(typeof variable)
