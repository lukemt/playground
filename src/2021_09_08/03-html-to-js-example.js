/* 
<section class="card">
  <button class="card__bookmark"></button>
  <h2 class="card__question">What is the meaning of life?</h2>
  <button class="card__button">Show answer</button>
  <p class="card__answer card__answer--hidden">42</p>
  <ul class="tags">
    <li class="tags__item">Philosophy</li>
    <li class="tags__item">Literature</li>
    <li class="tags__item">Tricky</li>
  </ul>
</section>
*/

function renderCard(cardData) {
  console.log(cardData.question)
  // Rewrite of the HTML to use createElement() and appendChild()
  const cardSection = document.createElement('section')
  cardSection.classList.add('card')
  document.body.appendChild(cardSection) // TODO: Move to the end of the file

  const cardBookmark = document.createElement('button')
  cardBookmark.classList.add('card__bookmark')
  cardBookmark.setAttribute('aria-label', 'Bookmark Card')
  cardSection.appendChild(cardBookmark)

  const cardQuestion = document.createElement('h2')
  cardQuestion.classList.add('card__question')
  cardQuestion.textContent = cardData.question
  cardSection.appendChild(cardQuestion)

  const cardButton = document.createElement('button')
  cardButton.classList.add('card__button')
  cardButton.textContent = 'Show answer'
  cardSection.appendChild(cardButton)

  const cardAnswer = document.createElement('p')
  cardAnswer.classList.add('card__answer')
  cardAnswer.classList.add('card__answer--hidden')
  cardAnswer.textContent = cardData.answer
  cardSection.appendChild(cardAnswer)

  const cardTags = document.createElement('ul')
  cardTags.classList.add('tags')
  cardSection.appendChild(cardTags)

  cardData.tags.forEach(tag => {
    const cardTag = document.createElement('li')
    cardTag.classList.add('tags__item')
    cardTag.textContent = tag
    cardTags.appendChild(cardTag)
  })
  // Hint: .forEach() for things with side effects
  // cardData.tags.forEach(tag => {
  //   console.log(tag)
  // })
  // .map() for changing the form of array elements
  // const neu = cardData.tags.map(tag => {
  //   return tag + "!"
  // })
}

const cardDataExample = [
  {
    question: 'Age of Arthur',
    answer: '42',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social'],
  },
  {
    question: 'Weird Question',
    answer: 'Weird answer',
    isBookmarked: true,
    showAnswer: false,
    tags: ['history', 'social'],
  },
]

renderCard(cardDataExample[0])
renderCard(cardDataExample[1])
