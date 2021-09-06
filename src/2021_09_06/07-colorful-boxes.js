// 1. Create colorful boxes from this array with a size of 100 x 100px

const colors = ['hotpink', '#C0FFEE', 'hsl(160deg, 60%, 80%)', 'steelblue', 'lakritzschwarz']

/*
- master plan
  - forEach
  - createElement zb 'div'
  - set the color of each element
  - appendChild
*/

// const body = document.querySelector('body')
const body = document.body

colors.forEach((color) => {
  const box = document.createElement('div')
  box.style.backgroundColor = color
  box.style.width = '100px'
  box.style.height = '100px'
  body.appendChild(box)
})