const nome = 'Silvio'
const sobrenome = 'Santos'

function ola(nome, idade, cidade) {
    console.log('Olá', nome, 'idade:', idade, 'cidade:', cidade)
}

function getNomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

const valor = function (nome, idade) {
    console.log('Olá', nome, 'idade:', idade)
}

function teste(nome) {
    console.log('Olá teste', nome)
}

const mostraOla = ola('João', 50, 'RJ')
console.log(mostraOla)

const nomeCompleto = getNomeCompleto(nome, sobrenome)
console.log(nomeCompleto)

ola(nome, 24, 'SP')
valor(nome, 24)
teste(nome)