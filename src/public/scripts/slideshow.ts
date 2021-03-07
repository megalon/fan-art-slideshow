console.log('Loaded slideshow page')

const interval = 2500

// Timeout to wait for page to load
setTimeout(() => {
  const slides = document.getElementsByClassName('slide')

  console.log(slides)
  console.log(slides[0])

  let i = 0
  slides[i].classList.add('active')

  setInterval(() => {
    slides[i++].classList.remove('active')
    if (i >= slides.length) i = 0
    slides[i].classList.add('active')
  }, interval)
}, 100)
