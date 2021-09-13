
function saySomething(someText) {
  const prefix = 'Saying: '
  console.log(prefix + someText)
}

// ==========================================================
// Solutions:
// ==========================================================

export function exercise9solution() {
  const array = [1, 2, 3, 4, 5]
  saySomething(array[0])
  saySomething(array[1])
  saySomething(array[2])
  saySomething(array[3])
  saySomething(array[4])
}

// ==========================================================

export function exercise10solution() {
  const array = [1, 2, 3, 4, 5]
  array.forEach(element => {
    saySomething(element)
  })
}

// ==========================================================

function square(number) {
  return number * number
}

export function exercise11solution() {
  const array = [1, 2, 3, 4, 5]
  array.forEach((element) => {
    const squaredNumber = square(element)
    saySomething(squaredNumber)
  })
}

// ==========================================================

// solution:
export function exercise12solution() {
  const array = [1, 2, 3, 4, 5]
  const squaredNumbers = array.map(number => {
    return square(number)
  })
  squaredNumbers.forEach(number => {
    return saySomething(number)
  })
}

// or:
export function exercise12solution2() {
  const array = [1, 2, 3, 4, 5]
  const squaredNumbers = array.map(number => square(number))
  squaredNumbers.forEach(number => saySomething(number))
}

// or:
export function exercise12solution3() {
  const array = [1, 2, 3, 4, 5]

  const mapFunction = number => square(number)
  const squaredNumbers = array.map(mapFunction)

  const forEachFunction = number => saySomething(number)
  squaredNumbers.forEach(forEachFunction)
}

// or:
export function exercise12solution4() {
  const array = [1, 2, 3, 4, 5]

  const mapFunction = square // the square function is not called here it's just given a new name
  const squaredNumbers = array.map(mapFunction)

  const forEachFunction = saySomething
  squaredNumbers.forEach(forEachFunction)
}

// or:
export function exercise12solution5() {
  const array = [1, 2, 3, 4, 5]

  const squaredNumbers = array.map(square)

  squaredNumbers.forEach(saySomething)
}
