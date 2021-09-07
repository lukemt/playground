// .sort()

const months = ['benno', 'Dieter', 'Dec', 'AMD']
months.sort()
console.log(months)
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000]
const arraySorted = array1.sort((a, b) => a - b)
// expected output: Array [1, 100000, 21, 30, 4]

// sort() ändert das bestehende array

array1.sort((a, b) => {
  if (a > b) return -1
  else if (a < b) return 1
  else if (a == b) return 0
})
console.log(array1)

// Wenn man das urspüngliche Array nicht verändern möchte
// Array kopieren:
array1copy = array1.slice()

// Bsp: WRONG EXAMPLE
const animals = ['elephant', 'ant', 'bison', 'camel', 'duck']
const animalsSorted = animals.sort() // !!!!!!!!! animals will be sorted too!!!
console.log({ animals, animalsSorted })

// Bsp: long example
const animals2 = ['elephant', 'ant', 'bison', 'camel', 'duck']
const animals2copy = animals2.slice()
const animalsSorted2 = animals2copy.sort()
console.log({ animals2, animalsSorted2 })

// Bsp: short example
const animals3 = ['elephant', 'ant', 'bison', 'camel', 'duck']
const animalsSorted3 = animals3.slice().sort()
console.log({ animals3, animalsSorted3 })
