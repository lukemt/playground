// arrays und objekte

// array
const names = ['Peter', 'Dieter', 'Rolf']
// log first item
console.log(names[0])

// -------------
// objekte

const name = 'Peter'
const birthDate = '09.03.1991'
const town = 'Ulm'

const peterPerson = {
  name: 'Peter',
  birthDate: '09.03.1991',
  town: 'Ulm',
}

// console.log(typeof peterPerson)
// console.log(peterPerson)

const dieterPerson = {
  name: 'Dieter',
  birthDate: '01.03.1982',
  town: 'Ulm',
}

const newArray = [peterPerson, dieterPerson]

console.log(newArray[0].name)

// -------------------------
// array mit objekten zusammen definieren

const newArray2 = [
  {
    name: 'Peter',
    birthDate: '09.03.1991',
    town: 'Ulm',
    nickNames: ['Peet', 'Mr. Peter'],
  },
  {
    name: 'Dieter',
    birthDate: '01.03.1982',
    town: 'Ulm',
  },
]

console.log(newArray2.length)

newArray2.push({
  name: 'Rolf',
  birthDate: '12.11.1903',
  town: 'München',
})

console.log(newArray2.length)

// name des dritten eintrags
console.log(newArray2[0].nickNames[0])
