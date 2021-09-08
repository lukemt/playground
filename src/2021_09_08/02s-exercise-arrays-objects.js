// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
]

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornInFifteenHund = inventors.filter(
  inventor => inventor.year < 1600 && inventor.year >= 1500
)
console.table(bornInFifteenHund)

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorNameList = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
)
console.log('Inventor names: ', inventorNameList)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortByBirthday = inventors.sort((a, b) => a.year - b.year)
console.table(sortByBirthday)

// 4. Sort the inventors by years lived

// solution 1
// const sortedByAge = inventors.slice().sort((a, b) => {
//   const ageA = a.passed - a.year
//   const ageB = b.passed - b.year
//   return ageA - ageB
// })

// solution 2
// const inventorsWithAge = inventors.map(inventor => ({
//   first: inventor.first,
//   last: inventor.last,
//   age: inventor.passed - inventor.year
// }))
// const sortedByAge = inventorsWithAge.slice().sort((a,b) => a.age - b.age)
// console.table(sortedByAge);

// solution 3
// const sortedByAge = inventors
//   .map(inventor => ({
//     first: inventor.first,
//     last: inventor.last,
//     age: inventor.passed - inventor.year,
//   }))
//   .slice()
//   .sort((a, b) => a.age - b.age)

// console.table(sortedByAge)

// solution 4
const sortedByAge = inventors
  .map(inventor => {
    return {
      first: inventor.first,
      last: inventor.last,
      age: inventor.passed - inventor.year,
    }
  })
  .slice()
  .sort((a, b) => a.age - b.age)

console.table(sortedByAge)

// solution 5
const yearsLived = inventors
  .slice()
  .sort((a, b) => b.passed - b.year - (a.passed - a.year))
console.table(yearsLived)

// 5. sort Exercise
// Sort the people alphabetically by last name
// solution 1
// const alpha = people.slice().sort() // problem if cases differ we got a problem!

// solution 1
// const alpha2 = people.slice().sort((a, b) => {
//   if (a.toLowerCase() > b.toLowerCase()) {
//     return 1
//   } else {
//     return -1
//   }
// })
// console.log('People sorted alphabbetically 1: ', alpha2)

// solution 2
const alpha2 = people.slice().sort((a, b) => a.localeCompare(b))
console.log('People sorted alphabbetically 2: ', alpha2)

// solution 3
const alpha3 = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ')
  const [bLast, bFirst] = nextOne.split(', ')
  return aLast.localeCompare(bLast)
})
console.log('People sorted alphabbetically: ', alpha3)

// 5.1. Bonus Sort by first name
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ')
  const [bLast, bFirst] = nextOne.split(', ')
  return aFirst.localeCompare(bFirst)
})
console.log('People sorted alphabbetically: ', alpha)
