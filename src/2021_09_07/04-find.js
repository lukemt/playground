////////////////////////////////////////
// find() vs filter()

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.find(word => word.length > 6)
console.log(result)

///////////////////////////////////
//
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

const molly = weasleys.find(weasley => weasley.name == 'Molly')
console.log(molly)
console.log(molly.profession)

const molly = weasleys.filter(weasley => weasley.name == 'Molly')
console.log(molly)
console.log(molly[0].profession)
