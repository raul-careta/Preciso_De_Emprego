const telefone = document.getElementById('telefone')

function formatarTelefone(numeroDigitado) {
    if (numeroDigitado.value.length == 0)
        numeroDigitado.value = '(' + numeroDigitado.value; //quando digitar, irá inserir um parênteses no começo do campo.
    if (numeroDigitado.value.length == 3)
        numeroDigitado.value = numeroDigitado.value + ') '; //quandojá tiver 3 caracteres (um parênteses e 2 números)irá inserir um parênteses, fechando o código de área.

    if (numeroDigitado.value.length == 10)
        numeroDigitado.value = numeroDigitado.value + '-'; //quandojá tiver 10 caracteres, irá inserir um hífen para melhor visualização. Lembrando que parenteses e espaço também são caracteres.
}