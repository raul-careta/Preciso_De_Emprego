const programas = document.querySelector('.programasOcultos')

//quando clica em(Meus Programas)mostra os programas ocultos
function mostrarProgramas() {
    if (programas.style.display == 'none') {
        programas.style.display = 'block'
    } else { programas.style.display = 'none' }
}