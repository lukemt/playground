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

// 1. Only show students
const onlyStudents = weasleys.filter(person => person.profession === 'Student')
console.log(onlyStudents)

// 2. Only show thode who are not students
const notStudents = weasleys.filter(person => person.profession !== 'Student')
console.log(notStudents)

// 3. Only show the ones born before 1980
const bornBefore1980 = weasleys.filter(person => person.yearOfBirth < 1980)
console.log(bornBefore1980)

// 4. Only show persons with names starting with 'G'
const namesStartingWithG = weasleys.filter(person =>
  person.name.startsWith('G')
)
console.log(namesStartingWithG)

// 5. Only show persons with names ending with 'y'
const namesEndingWithY = weasleys.filter(person => person.name.endsWith('y'))
console.log(namesEndingWithY)
