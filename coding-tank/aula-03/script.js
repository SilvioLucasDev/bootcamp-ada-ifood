// Crie um programa em JavaScript que determine se um número é positivo, negativo ou zero e exiba a mensagem correspondente.
function checkNumber(number) {
    if (number > 0) {
        console.log("O número é positivo.")
    } else if (number < 0) {
        console.log("O número é negativo.")
    } else {
        console.log("O número é zero.")
    }
}
checkNumber(5)

// Escreva um programa em JavaScript que verifique se uma pessoa é maior de idade (idade maior ou igual a 18) e exiba uma mensagem apropriada.
function checkAge(age) {
    if (age >= 18) {
        console.log("Você é maior de idade.")
    } else {
        console.log("Você é menor de idade.")
    }
}
checkAge(20)

// Crie um programa em JavaScript que converta um número de 1 a 7 em um dia da semana correspondente usando um switch-case.
function checkDayOfWeek(number) {
    switch (number) {
        case 1:
            console.log("Domingo")
            break
        case 2:
            console.log("Segunda-feira")
            break
        case 3:
            console.log("Terça-feira")
            break
        case 4:
            console.log("Quarta-feira")
            break
        case 5:
            console.log("Quinta-feira")
            break
        case 6:
            console.log("Sexta-feira")
            break
        case 7:
            console.log("Sábado")
            break
        default:
            console.log("Número fora do intervalo válido.")
    }
}
checkDayOfWeek(7)

// Verificação de Idade: Peça ao usuário para inserir sua idade e, em seguida, use um bloco if-else para verificar se ele é maior de idade (18 anos ou mais) ou menor de idade.
const age = prompt("Por favor, insira sua idade:")

if (age >= 18) {
    console.log("Você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

// Maior de Três Números: Peça ao usuário para inserir três números e use estruturas condicionais if e else para determinar qual deles é o maior.
const number1 = parseFloat(prompt("Insira o primeiro número:"))
const number2 = parseFloat(prompt("Insira o segundo número:"))
const number3 = parseFloat(prompt("Insira o terceiro número:"))

if (number1 >= number2 && number1 >= number3) {
    console.log("O primeiro número é o maior: " + number1)
} else if (number2 >= number1 && number2 >= number3) {
    console.log("O segundo número é o maior: " + number2)
} else {
    console.log("O terceiro número é o maior: " + number3)
}


try {
    throw new Error('Erro de client')
} catch (error) {
    console.log(error)
}


