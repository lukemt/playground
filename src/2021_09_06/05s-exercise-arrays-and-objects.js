// Navigate in arrays and objects
export function exercise1() {
  const people = [
    {
      name: 'Harry',
      age: 11,
      parents: [{ mothersName: 'Lily', fathersName: 'James' }],
      pet: [{ animal: 'owl', name: 'Hedwig' }],
      house: [{ name: 'gryffindor', color: 'red' }],
      'hogwarts favorites': [
        'quidditch',
        'defense against the dark arts',
        'gryffindor common room',
      ],
    },
    {
      name: 'Ron',
      age: 10,
      parents: [{ mothersName: 'Molly', fathersName: 'Arthur' }],
      pet: [{ animal: 'rat', name: 'Scabbers' }],
      house: [{ name: 'gryffindor', color: 'red' }],
    },
    {
      name: 'Hermione',
      age: 12,
      parents: [{ mothersName: 'Mrs. Granger', fathersName: 'Mr. Granger' }],
      pet: [{ animal: 'cat', name: 'Crookshanks' }],
      house: [{ name: 'gryffindor', color: 'red' }],
    },
    {
      name: 'Draco',
      age: 12,
      parents: [{ mothersName: 'Narcissa', fathersName: 'Lucius' }],
      pet: [{ animal: 'eagle owl', name: undefined }],
      house: [{ name: 'slytherin', color: 'green' }],
    },
  ]

  // log out the name of the first person
  console.log(people[0].name)

  // log out the hogwarts favourites of the first person
  console.log(people[0]['hogwarts favorites'])

  // log out the age of the third person
  console.log(people[2].age)

  // log out the mothers name of the second person
  console.log(people[1].parents[0].mothersName)

  // log out the type of animal of the first persons pet
  console.log(people[0].pet[0].animal)

  // log out the name of each person
  people.forEach((person) => {
    console.log(person.name)
  })

  // create a HTMLElement with a class box for each person
  // and change the background of the HTMLElements with the house color

  const body = document.body

  people.forEach((person) => {
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundColor = person.house[0].color
    container.appendChild(body)
  })
}
