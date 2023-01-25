let numero = document.getElementById('resultado')

//coloca o numero escolhido na tela
function inserirNumero(num) {
    numero.innerHTML += num;
}

//remove o ultimo caractere da tela
//substring = remove letra ou numero(começa aqui, e vai até aqui)
function apagarUltimoCaractere() {
    numero.innerHTML = numero.innerHTML.substring(0, numero.innerHTML.length - 1)
}

//remove todos os numeros da tela
function apagarTudo() {
    numero.innerHTML = ''
}

//sinal de igual "="
//eval() faz a conta automaticamente
function fazerConta() {
    numero.innerHTML = eval(numero.innerHTML)
}
