const programas = document.querySelector('.programasOcultos')

function mostrarProgramas() {
    if (programas.style.display == 'none') {
        programas.style.display = 'block'
    } else { programas.style.display = 'none' }
}