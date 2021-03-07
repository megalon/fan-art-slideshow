console.log('Loaded slideshow page')

let requestURL = './art-and-credits.json'
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = () => {
  const artwork = request.response
  console.log(artwork)
}
