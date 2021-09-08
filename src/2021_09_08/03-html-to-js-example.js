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

// Rewrite of the HTML to use createElement() and appendChild()
const cardSection = document.createElement('section');
cardSection.classList.add('card');
document.body.appendChild(cardSection); // TODO: Move to the end of the file

const cardBookmark = document.createElement('button');
cardBookmark.classList.add('card__bookmark');
cardSection.appendChild(cardBookmark);

const cardQuestion = document.createElement('h2');
cardQuestion.classList.add('card__question');
cardQuestion.textContent = 'What is the meaning of life?';
cardSection.appendChild(cardQuestion);

const cardButton = document.createElement('button');
cardButton.classList.add('card__button');
cardButton.textContent = 'Show answer';
cardSection.appendChild(cardButton);

const cardAnswer = document.createElement('p');
cardAnswer.classList.add('card__answer');
cardAnswer.classList.add('card__answer--hidden');
cardAnswer.textContent = '42';
cardSection.appendChild(cardAnswer);

const cardTags = document.createElement('ul');
cardTags.classList.add('tags');
cardSection.appendChild(cardTags);

const cardTag1 = document.createElement('li');
cardTag1.classList.add('tags__item');
cardTag1.textContent = 'Philosophy';
cardTags.appendChild(cardTag1);

const cardTag2 = document.createElement('li');
cardTag2.classList.add('tags__item');
cardTag2.textContent = 'Literature';
cardTags.appendChild(cardTag2);

const cardTag3 = document.createElement('li');
cardTag3.classList.add('tags__item');
cardTag3.textContent = 'Tricky';
cardTags.appendChild(cardTag3);
