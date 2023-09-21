// Crie uma variável numero e atribua a ela o valor 42. Em seguida, crie uma variável texto e atribua a ela o valor "42".
// Qual é o tipo de cada variável? Qual é o resultado da expressão numero == texto? E da expressão numero === texto?
let numero = 42
let texto = "42"

console.log("numero == texto:", numero == texto)   
console.log("numero === texto:", numero === texto) 

// Crie uma variável boolean e atribua a ela o valor true. Em seguida, crie uma variável numero e atribua a ela o valor 1. 
// Converta a variável boolean em um número inteiro e some com a variável numero. Qual é o resultado final?
let boolean = true
numero = 1

console.log('Resultado:', Number(boolean) + numero)

// Escreva uma função chamada calculaMediaAnual que aceite quatro números como parâmetros (notas) e retorne a média aritmética dessas notas.
function calculaMediaAnual(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4
}

let media = calculaMediaAnual(5, 10, 10, 10)
console.log('Média anual:', media)