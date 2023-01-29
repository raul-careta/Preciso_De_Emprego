let numero = document.getElementById('temperatura')
let resultado = document.getElementById('resultado')
//transforma fahrenheit em celcius(quando clicar no botao)
function fahrenheitParaCelcius() {
    if (numero.value == '') {
        resultado.innerHTML = 'digite um valor positivo ou negativo'
    } else {
        let res = ((numero.value - 32) / 1.8).toFixed(1)
        resultado.innerHTML = `"${numero.value} fahrenheit" equivale a:  ` + `"${res} C"`
    }
}
//transforma celcius em fahrenheit(quando cliar no botao)
function celciusParaFahrenheit() {
    if (numero.value == '') {
        resultado.innerHTML = 'digite um valor positivo ou negativo'
    } else {
        let res = ((numero.value * 1.8) + 32).toFixed(1)
        resultado.innerHTML = `"${numero.value}C" equivale a:  ` + `"${res} F"`
    }
}

