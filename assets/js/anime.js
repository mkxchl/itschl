document.addEventListener('DOMContentLoaded', () => {
  const heroTimeline = anime.timeline({
    easing: 'easeOutExpo'
  })

  heroTimeline
    .add({
      targets: 'main h1',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: 200
    })
    .add(
      {
        targets: 'main p',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 1000
      },
      '-=800'
    )
    .add(
      {
        targets: 'main .flex-col.sm\\:flex-row a',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(150),
        duration: 800,
        easing: 'easeOutBack'
      },
      '-=700'
    )

  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: '.grid-cols-2.sm\\:grid-cols-3 .glass-dark',
            scale: [0.9, 1],
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(100),
            duration: 800,
            easing: 'easeOutQuad'
          })

          anime({
            targets: '.progress-bar',
            width: el => el.getAttribute('data-target') || '0%',
            opacity: [0, 1],
            duration: 2000,
            delay: anime.stagger(200),
            easing: 'easeInOutQuart'
          })

          sectionObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  const mainLayout = document.querySelector('.lg\\:grid-cols-2')
  if (mainLayout) {
    sectionObserver.observe(mainLayout)
  } else {
    const expContainer = document.querySelector('.space-y-10')
    if (expContainer) sectionObserver.observe(expContainer)
  }

  const serviceCardsObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target.querySelectorAll(
              '.group.relative.glass-dark'
            ),
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
            duration: 1000,
            easing: 'easeOutQuad'
          })
          serviceCardsObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('section').forEach(section => {
    if (section.querySelector('.group.relative.glass-dark')) {
      serviceCardsObserver.observe(section)
    }
  })

  // --- 4. GITHUB ACTIVITY ANIMATION ---
  const githubObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: [
              '#github-activity h2',
              '#github-activity p',
              '#github-activity a',
              '#github-activity .md\\:col-span-12 > div',
              '#github-activity .md\\:col-span-7',
              '#github-activity .md\\:col-span-5',
              '#github-activity .sm\\:grid-cols-3 > div'
            ],
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            duration: 900,
            easing: 'easeOutQuad'
          })
          githubObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  const githubSection = document.getElementById('github-activity')
  if (githubSection) githubObserver.observe(githubSection)

  const footerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: 'footer',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            easing: 'easeOutQuad'
          })
          footerObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05 }
  )

  const footerElement = document.querySelector('footer')
  if (footerElement) {
    footerElement.style.opacity = '0'
    footerObserver.observe(footerElement)

    setTimeout(() => {
      if (getComputedStyle(footerElement).opacity === '0') {
        footerElement.style.opacity = '1'
        footerElement.style.transform = 'translateY(0)'
      }
    }, 3000)
  }
})
