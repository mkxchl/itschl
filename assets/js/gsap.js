gsap.registerPlugin(ScrollTrigger)

const heroTl = gsap.timeline()

gsap.set('.glass-dark, section h3, section p', { visibility: 'visible' })

heroTl
  .from('main .glass-dark:first-child', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  })
  .from(
    'h1',
    {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    },
    '-=0.8'
  )
  .from(
    'main p',
    {
      y: 20,
      opacity: 0,
      duration: 0.8
    },
    '-=0.6'
  )
  .from(
    'main .flex-col.sm\\:flex-row a',
    {
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    },
    '-=0.4'
  )

gsap.from('.grid-cols-1.lg\\:grid-cols-2 > div', {
  scrollTrigger: {
    trigger: '.grid-cols-1.lg\\:grid-cols-2',
    start: 'top 80%'
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: 'power2.out'
})

gsap.from('.h-full.bg-gradient-to-r', {
  scrollTrigger: {
    trigger: '.space-y-8',
    start: 'top 85%'
  },
  width: 0,
  duration: 1.5,
  ease: 'power4.out',
  stagger: 0.2
})

const sections = gsap.utils.toArray('section')

sections.forEach(section => {
  const cards = section.querySelectorAll('.group.relative.glass-dark')
  const header = section.querySelector('div')

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 75%',
      toggleActions: 'play none none none'
    }
  })

  tl.from(header, {
    y: 30,
    opacity: 0,
    duration: 0.8
  }).from(
    cards,
    {
      y: 60,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    },
    '-=0.4'
  )
})

gsap.from(
  '#github-activity .md\\:col-span-12, #github-activity .md\\:col-span-7, #github-activity .md\\:col-span-5',
  {
    scrollTrigger: {
      trigger: '#github-activity',
      start: 'top 80%'
    },
    scale: 0.9,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
  }
)
