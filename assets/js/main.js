const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = menuBtn.querySelector('i')

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
  if (mobileMenu.classList.contains('open')) {
    menuIcon.classList.replace('bx-menu-alt-right', 'bx-x')
  } else {
    menuIcon.classList.replace('bx-x', 'bx-menu-alt-right')
  }
})
const audio = document.getElementById('main-audio')
const trackItems = document.querySelectorAll('.track-item')
const currentTitle = document.getElementById('current-title')
const currentArtist = document.getElementById('current-artist')
const diskVisual = document.getElementById('disk-visual')
const progressBar = document.getElementById('progress-bar')
const progressContainer = document.getElementById('progress-container')

let isPlaying = false

function togglePlay (trackElement) {
  const src = trackElement.getAttribute('data-src')
  const title = trackElement.getAttribute('data-title')
  const artist = trackElement.getAttribute('data-artist')
  const icon = trackElement.querySelector('.play-btn-circle i')

  const isSameTrack = audio.getAttribute('src') === src

  if (!isSameTrack) {
    audio.src = src
    currentTitle.innerText = title
    currentArtist.innerText = artist
    resetIcons()
    playAudio(icon)
  } else {
    if (isPlaying) {
      pauseAudio(icon)
    } else {
      playAudio(icon)
    }
  }
}

function playAudio (icon) {
  audio.play()
  isPlaying = true
  icon.classList.replace('bx-play', 'bx-pause')
  diskVisual.classList.add('animate-spin-slow')
  diskVisual.style.animationPlayState = 'running'
}

function pauseAudio (icon) {
  audio.pause()
  isPlaying = false
  icon.classList.replace('bx-pause', 'bx-play')
  diskVisual.style.animationPlayState = 'paused'
}

function resetIcons () {
  document.querySelectorAll('.play-btn-circle i').forEach(i => {
    i.classList.remove('bx-pause')
    i.classList.add('bx-play')
  })
}

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const percent = (audio.currentTime / audio.duration) * 100
    progressBar.style.width = percent + '%'
  }
})

progressContainer.addEventListener('click', e => {
  const width = progressContainer.clientWidth
  const clickX = e.offsetX
  audio.currentTime = (clickX / width) * audio.duration
})

trackItems.forEach(item => {
  item.addEventListener('click', () => togglePlay(item))
})

audio.addEventListener('ended', () => {
  isPlaying = false
  diskVisual.style.animationPlayState = 'paused'
  resetIcons()
})
window.addEventListener('click', e => {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open')
    menuIcon.classList.replace('bx-x', 'bx-menu-alt-right')
  }
})

function toggleFAQ (element) {
  const parent = element.parentElement
  const isAlreadyActive = parent.classList.contains('active')

  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active')
  })

  if (!isAlreadyActive) {
    parent.classList.add('active')
  }
}
