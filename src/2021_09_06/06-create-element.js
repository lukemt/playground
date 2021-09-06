// create elements with js
const body = document.querySelector('body')
const button = document.querySelector('button')
button.addEventListener('click', () => {
  const newElement = document.createElement('div')
  newElement.classList.add('box')
  newElement.textContent = 'some text'
  body.appendChild(newElement)
})
