console.log('Loaded slideshow page')

const interval = 5000

let currentIndex = -1

// Timeout to wait for page to load
setTimeout(() => {
  const slides = document.getElementsByClassName('slide')
  slideShow(slides)
  setInterval(() => {
    slideShow(slides)
  }, interval)
}, 100)

function slideShow(slides: HTMLCollectionOf<Element>) {
  // Skip fading out first image
  if (currentIndex >= 0) {
    fadeOut(slides[currentIndex])
  }
  currentIndex++
  if (currentIndex >= slides.length) {
    currentIndex = 0
  }

  fadeIn(slides[currentIndex])
}

function fadeIn(e: Element) {
  e.classList.add('fadeIn')
}

function fadeOut(e: Element) {
  e.classList.remove('fadeIn')
}
