let palavra = document.querySelector('.input')
let resposta = document.getElementById('resposta')

function verificarPalindromo() {
    let palavraArray = palavra.value.split("")
    let palavraInvertida = palavraArray.reverse()
    let palavraJunta = palavraInvertida.join("")

    if (palavraJunta == palavra.value) {
        resposta.innerHTML = `O conteúdo "${palavra.value}" é um palíndromo`
    } else {
        resposta.innerHTML = `O conteúdo "${palavra.value}" não é um palíndromo`
    }
}
