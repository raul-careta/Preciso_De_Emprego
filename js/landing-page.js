const h3 = document.querySelectorAll('[data-animacao]')

function mostrarAnimacao() {
    const topoDaTela = window.pageYOffset + ((window.innerHeight * 3) / 4)
    h3.forEach(function (elemento) {
        if (topoDaTela > elemento.offsetTop) {
            elemento.classList.add('animar')
        } else {
            elemento.classList.remove('animar')
        }
    })
}

if (h3.length) {
    window.addEventListener('scroll', function () {
        mostrarAnimacao()
    })
}