
const $ = (element) => {
  return document.querySelector(element)
}

const $$ = (element) => {
  return document.querySelectorAll(element)
}

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.75
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

// menu links 
const links = $$('.menu__item a')

links.forEach(link => {
  link.addEventListener('click', () => {
    if (document.body.classList.contains('open')) {
      document.body.classList.remove('open')
    }
  })
})


// DARK MODE 

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const toggleDarKMode = $('.toggle__dark-mode')

const applyDarkMode = () => {
  if (darkModeMediaQuery.matches) {
    document.body.classList.add('dark')
    toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/night2.gif')
  } else {
    document.body.classList.remove('dark')
    toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/day.gif')
  }
}

applyDarkMode()

darkModeMediaQuery.addEventListener('change', () => {
  applyDarkMode()
})

toggleDarKMode.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark')
    toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/day.gif')
  } else {
    document.body.classList.add('dark')
    toggleDarKMode.firstElementChild.setAttribute('src', './images/icons/night2.gif')
  }
})
