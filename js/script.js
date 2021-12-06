
const $ = (element) => {
  return document.querySelector(element)
}

const $$ = (element) => {
  return document.querySelectorAll(element)
}

const options = {
  root: null,
  rootMargin: '100px 0px 0px 0px',
  threshold: 0.5
}


const elementObserve = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.dataset.name !== 'Home'
        ? $('.name__section').textContent = entry.target.dataset.name
        : $('.name__section').textContent = ''
    }
  });
}

const observer = new IntersectionObserver(elementObserve, options)

$$('.section').forEach(section => {
  if (section) {
    observer.unobserve(section)
  }
  observer.observe(section)
})

// toggle menu 

const menuToggle = $('#toggle__menu')

menuToggle.addEventListener('click', () => {
  if (document.body.classList.contains('open')) {
    document.body.classList.remove('open')
  } else {
    document.body.classList.add('open')
  }
})

// DARK MODE 

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const toggleDarKMode = $('.toggle__dark-mode')

if (darkModeMediaQuery.matches) {
  document.body.classList.add('dark')
  toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/night2.gif')
} else {
  document.body.classList.remove('dark')
  toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/day.gif')
}

toggleDarKMode.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
    toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/day.gif')
  } else {
    document.body.classList.add('dark')
    toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/night2.gif')
  }
})

// GSAP 

// const gsapEffects = [
//   {
//     id: "fadeSlideFrom",
//     animate: 'from',
//     props: { opacity: 0.50, y: 150, yoyo: true, repeat: -1 }
//   },
//   {
//     id: "fadeSlideFrom2",
//     animate: 'from',
//     props: { opacity: 0.50, y: 150, yoyo: true, repeat: -1 }
//   }
// ];

// gsapEffects.forEach(effect => {
//   gsap.registerEffect({
//     name: effect.id,
//     defaults: { duration: 1 },
//     extendTimeline: true,
//     effect(targets, config) {
//       if (effect.animate === 'from') {
//         return gsap.from(targets, { ...effect.props, ...config })
//       }
//       else if (effect.animate === 'fromTo') {
//         return gsap.fromTo(targets, { ...effect.props, ...config }, { ...effect.props2 })
//       }
//       else {
//         return gsap.to(targets, { ...effect.props, ...config })
//       }
//     }
//   });
// });

// let tl = gsap.timeline();
// tl.fadeSlideFrom(".fadeSlideFrom", 0)
//   .fadeSlideFrom(".fadeSlideFrom2")

// const heroText = $('.circle__background');
// gsap.registerPlugin(ScrollTrigger)

// const tl = gsap.timeline({
//   defaults: { ease: "none", transformOrigin: "50% 50%" },
//   scrollTrigger: {
//     trigger: ".hero",
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//     markers: true
//   }
// })

// tl.to(
//   heroText,
//   {
//     y: -heroText.offsetHeight * heroText.dataset.depth,
//     autoAlpha: 0,
//     scale: 2,
//     duration: 0.2
//   },
//   0
// )