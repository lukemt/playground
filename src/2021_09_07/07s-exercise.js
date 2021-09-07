// Array methods

const weasleys = [
  {
    name: 'Arthur',
    yearOfBirth: 1950,
    profession: 'Head of the Misuse of Muggle Artefacts Office',
  },
  {
    name: 'Molly',
    yearOfBirth: 1950,
    profession: 'Housewife',
  },
  {
    name: 'Bill',
    yearOfBirth: 1970,
    profession: 'Curse-Breaker for Gringotts Bank',
  },
  {
    name: 'Charlie',
    yearOfBirth: 1972,
    profession: 'Dragonologist',
  },
  {
    name: 'Percy',
    yearOfBirth: 1976,
    profession: 'Student',
  },
  {
    name: 'Fred',
    yearOfBirth: 1978,
    profession: 'Student',
  },
  {
    name: 'George',
    yearOfBirth: 1978,
    profession: 'Student',
  },
  {
    name: 'Ron',
    yearOfBirth: 1980,
    profession: 'Student',
  },
  {
    name: 'Ginny',
    yearOfBirth: 1981,
    profession: 'Student',
  },
]
// Create a new array with names only
const names = weasleys.map(weasley => weasley.name)
console.log(names)

// Create a new array with students only
const students = weasleys.filter(weasley => weasley.profession === 'Student')
console.log(students)

// Check if 'Bill' is a student (assume you do not know the position/index of Bill in the array)
const bill = weasleys.find(weasley => weasley.name === 'Bill')
const isBillStudent = bill.profession === 'Student'
console.log(isBillStudent)

// Sort the Weasleys by age ascending
const sortedByAge = weasleys.slice().sort((a, b) => b.yearOfBirth - a.yearOfBirth)
console.log(sortedByAge)

// Sort the Weasleys by name
const sortedByName = weasleys.slice().sort((a, b) => a.name.localeCompare(b.name))
console.log(sortedByName)
