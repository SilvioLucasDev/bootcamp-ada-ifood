let numero1 = 10
let numero2 = "20"
let numero3 = 30
let numero4 = "40"

function toNumber(value) {
    if (typeof value === 'string') {
        value = parseInt(value);
    }
    return value
}

const somar = function (valor1, valor2) {
    let resultado = toNumber(valor1) + toNumber(valor2)
    console.log('Soma:', resultado)
}

const subtrair = function (valor1, valor2) {
    let resultado = toNumber(valor1) - toNumber(valor2)
    console.log('Subtração:', resultado)
}

const multiplicar = function (valor1, valor2) {
    let resultado = toNumber(valor1) * toNumber(valor2)
    console.log('Multiplicação:', resultado)
}

const dividir = function (valor1, valor2) {
    let resultado = toNumber(valor1) / toNumber(valor2)
    console.log('Divisão:', resultado)
}

const resto = function (valor1, valor2) {
    let resultado = toNumber(valor1) % toNumber(valor2)
    console.log('Resto da divisão:', resultado)
}

somar(numero1, numero4)
subtrair(numero1, numero3)
multiplicar(numero1, numero2)
dividir(numero2, numero4)
resto(numero2, numero4)