////////////////////////////////////////////////
// .filter()
////////////////////////////////////////////////

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const result = words.filter(word => word.length > 6)

console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]

/////////////////////////////////////////////////
// long form (array function)

const add = (a, b) => a + b

const add2 = (a, b) => {
  return a + b
}

/////////////////////////////////////////////////
// long form with filter

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'a',
  'ab',
]

const result = words.filter(word => {
  return word.length > 6 || word.length < 3
})

// console.log(result)

/////////////////////////////////////////////////
// filter and index

const words2 = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'prese',
  'a',
  'ab',
]

const result2 = words2.filter(
  (word, index) => index < 3 || word.length > 6 || word.length < 3
)

// console.log(result2)

/////////////////////////////////////////////////
// and-operator

const words3 = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
  'a',
  'ab',
]

const result3 = words3.filter(word => word.length < 6 && word.length > 3)

// console.log(result3)

/////////////////////////////////////////////////
//

// const bigWords = words.filter((word) => word.length > 3)
// const mediumWords = bigWords.filter((word) => word.length < 6)
// console.log(mediumWords)

////////////////////////////////////

const mediumWords = words.filter(word => word.length < 6 && word.length > 3)
const mediumWordsStartingWithL = mediumWords.filter(
  word => word.startsWith('l') || word.startsWith('L')
)
console.log(mediumWordsStartingWithL)

////////////////

const wordsX = [
  'Erwin',
  'Erungenschaft',
  'elite',
  'ERP-System',
  'destruction',
  'present',
  'Erde',
  'erkannt',
]
const erWords = wordsX.filter(word => word.toLowerCase().startsWith('er'))
console.log(erWords)

// long form
const erWords2 = wordsX.filter(word => {
  const wordsLower = word.toLowerCase()
  const startsWithEr = wordsLower.startsWith('er')
  return startsWithEr
})
console.log(erWords2)

////// filter with objects
const shapes = [
  {
    color: 'red',
    radius: '7px',
  },
  {
    color: 'blue',
    radius: '50%',
  },
  {
    color: 'red',
    radius: '50%',
  },
]

const shapesOnlyRed = shapes.filter(shape => shape.color == 'red')
console.log(shapesOnlyRed);

// Result we would like:
// const shapesOnlyRed = [
//   {
//     color: 'red',
//     radius: '7px',
//   },
//   {
//     color: 'red',
//     radius: '50%',
//   },
// ]

