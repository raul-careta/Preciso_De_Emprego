const h3 = document.querySelectorAll('[data-animacao]')
const animacaoClass = 'animacao'

function mostrarAnimacao() {
    const topoDaTela = window.pageYOffset + ((window.innerHeight * 3) / 4)
    h3.forEach(function (elemento) {
        if (topoDaTela > elemento.offsetTop) {
            elemento.classList.add(animacaoClass)
        } else {
            elemento.classList.remove(animacaoClass)
        }
    })
}

if (h3.length) {
    window.addEventListener('scroll', function () {
        mostrarAnimacao()
    })
}