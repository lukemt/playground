// .map()

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

////////////////////////
// long form

const array2 = [1, 4, 9, 16];

// pass a function to map
const map2 = array2.map(x => {
  return x * 2
});

console.log(map2);
// expected output: Array [2, 8, 18, 32]

//////////////////////////////////////////
// make every name upper case
const namen = ["Hans", "Peter", "Elfriede", "ulf"]
const namesUpper = namen.map(name => name.toUpperCase())
console.log(namesUpper);

//////////////////////////////////////////
// make a number out of every entry
const names = ["Hans", "Peter", "Elfriede", "ulf"]
const nameLengths = names.map(name => name.length)
console.log(nameLengths)
//  [4, 5, ?, 3]

//////////////////////////////////////////
// make an object out of every entry
const names2 = ["Hans", "Peter", "Elfriede", "ulf"]
// const nameObjects = names2.map(name => ({
//   name: name,
//   letters: name.length,
//   namesUpper: name.toUpperCase(),
// }))
// long form:
const nameObjects = names2.map(name => {
  const newObject = {
    name: name,
    letters: name.length,
    namesUpper: name.toUpperCase(),
  }
  return newObject
})

console.log(nameObjects)
console.table(nameObjects)
/*
[
  {
    name: "Hans",
    letters: 4,
    nameUpper: "HANS"
  },
  {
    name: "Peter",
    letters: 5,
    nameUpper: "PETER"
  },
  ....
]
*/

// console.log(JSON.stringify(nameObjects, null, 2));

const advancedArray = [
  {
    name: 'Hans',
    letters: 4,
    namesUpper: 'HANS',
  },
  {
    name: 'Peter',
    letters: 5,
    namesUpper: 'PETER',
  },
  {
    name: 'Elfriede',
    letters: 8,
    namesUpper: 'ELFRIEDE',
  },
  {
    name: 'ulf',
    letters: 3,
    namesUpper: 'ULF',
  },
]

const upperNames = advancedArray.map(object => object.namesUpper)
console.log(upperNames);
// ['HANS', 'PETER', 'ELFRIEDE', ...]

