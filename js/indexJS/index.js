function mostrarProgramas() {
    const programas = document.querySelector('.programasOcultos')
    if (programas.style.display == 'none') {
        programas.style.display = 'block'
    } else { programas.style.display = 'none' }
}