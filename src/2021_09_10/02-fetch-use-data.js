export function doSomethingWithData(allData) {
  console.log('doSomethingWithData called')
  console.log(allData)
  allData.forEach(character => {
    console.log(character.name)
  });
}