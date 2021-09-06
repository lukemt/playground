// 1. Create colorful boxes from this array with a size of 100 x 100px
// 2. set the colors from the array
// 3. set the borderRadius to the value from the array
// 4. set the content of each element to the given text from the array

const shapes = [
  {
    color: 'hotpink',
    radius: '10px',
    text: 'Wow'
  },
  {
    color: '#C0FFEE',
    radius: '30px',
    text: ''
  },
  {
    color: 'hsl(260deg, 60%, 80%)',
    radius: '50%'
  },
  {
    color: 'steelblue',
    radius: '0'
  },
]

const body = document.body

shapes.forEach(shape => {
  const box = document.createElement('div')
  box.style.width = '100px'
  box.style.height = '100px'
  box.style.backgroundColor = shape.color
  box.style.borderRadius = shape.radius
  box.textContent = shape.text
  body.appendChild(box)
})
