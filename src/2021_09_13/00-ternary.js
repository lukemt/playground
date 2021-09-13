// The Ternary Expression
// (Bedingung ? Positiver Wert : Negativer Wert)

export function ternaryExpression() {

  let age = 180
  let message

  // if (age < 3) {
  //   message = 'Hi, baby!'
  // } else {
  //   message = 'What an unusual age!'
  // }

  message = age < 3 ? 'Hi, baby!' : 'What an unusual age!'

  console.log(message)

  // ---------

  message =
    age < 3
      ? 'Hi, baby!'
      : age < 18
        ? 'Hello!'
        : age < 100
          ? 'Greetings!'
          : 'What an unusual age!'

  console.log(message)

}