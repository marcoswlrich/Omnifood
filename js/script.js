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

// Navegação fixa

// Correção da propriedade flexbox gap ausente em algumas versões do Safari
