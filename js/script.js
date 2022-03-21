const myName = 'Marcos Wlrich'
const h1 = document.querySelector('.heading-primary')

// Definir ano atual
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

// Funcionamento da navegação móvel
const btnNavEl = document.querySelector('.btn-mobile-nav')
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open')
})

// Animação de rolagem mais suave
const allLinks = document.querySelectorAll('a:link')

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    const href = link.getAttribute('href')

    // Rolar de volta ao topo
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })

    // Rolagem para outros links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href)
      sectionEl.scrollIntoView({ behavior: 'smooth' })
    }

    // Fechar mobile navigation
    if (link.classList.contains('main-nav-link'))
      headerEl.classList.toggle('nav-open')
  })
})

// Menu navegação fixo
const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0]
    console.log(ent)

    if (ent.isIntersecting === false) {
      document.body.classList.add('sticky')
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove('sticky')
    }
  },
  {
    // Na janela de visualização
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
)
obs.observe(sectionHeroEl)

// Correção da propriedade flexbox gap ausente em algumas versões do Safari
function checkFlexGap() {
  var flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.rowGap = '1px'

  flex.appendChild(document.createElement('div'))
  flex.appendChild(document.createElement('div'))

  document.body.appendChild(flex)
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)
  console.log(isSupported)

  if (!isSupported) document.body.classList.add('no-flexbox-gap')
}
checkFlexGap()
