// fetch
fetch('http://hp-api.herokuapp.com/api/characters')
  .then(response => response.json())
  .then(data => console.log(data))
