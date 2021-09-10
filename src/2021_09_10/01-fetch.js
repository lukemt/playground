import { doSomethingWithData } from "./02-fetch-use-data"

// fetch
export function fetchExample() {

  console.log('START')
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(allData => {
      // IT WORKED:
      console.log('got allData!')
      doSomethingWithData(allData)
      console.log('ECHTES ENDE')
    })
    .catch(error => {
      // IT DID NOT WORK:
      console.log('an error occurred!!!!!!', error)
    })

  console.log('VORLÄUFIGES ENDE, WARTEN...')
  
}