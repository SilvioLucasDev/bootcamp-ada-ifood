import { Carro } from "./1/Carro";
import { Cachorro } from "./2/Cachorro";
import { Passaro } from "./2/Passaro";
import { Calculadora } from "./3/Calculadora";
import { Circulo } from "./4/Circulo";
import { Quadrado } from "./4/Quadradro";
import { Carro as CarroExec5 } from "./5/Carro";
import { Motor } from "./5/Motor";
import { ContaBancaria } from "./6/ContaBancaria";
import { ConfiguracaoApp } from "./7/ConfiguracaoApp";

console.log('------------------------- Exercício 1 -------------------------')

const carro1 = new Carro('Sedan', 2023, 'Vermelho')
const carro2 = new Carro('Hatch', 2023, 'Preto')

carro1.detalhes()
carro2.detalhes()

console.log('---------------------------------------------------------------\n')

console.log('------------------------- Exercício 2 -------------------------')

const cachorro = new Cachorro()
const passaro = new Passaro()

cachorro.emitirSom()
cachorro.mover()

passaro.emitirSom()
passaro.mover()

console.log('---------------------------------------------------------------\n')

console.log('------------------------- Exercício 3 -------------------------')

// Não sei se entendi muito bem esse exercício.
const calculadora = new Calculadora()
console.log('Soma ', calculadora.calcularSoma(5, 5))
console.log('Subtração ', calculadora.calcularSubtração(10, 3))
console.log('Multiplicação ', calculadora.calcularMultiplicação(7, 7))
console.log('Divisão ', calculadora.calcularDivisão(10, 2))

const absoluto = Calculadora.calcularAbsoluto(5)
console.log('Absoluto', absoluto)

console.log('---------------------------------------------------------------\n')

console.log('------------------------- Exercício 4 -------------------------')

const quadrado = new Quadrado(10)
const circulo = new Circulo(10)

console.log('Quadrado - Área: ', quadrado.calcularArea())
console.log('Quadrado - Perímetro: ', quadrado.calcularPerimetro())
console.log('Circulo - Área: ', circulo.calcularArea())
console.log('Circulo - Perímetro: ', circulo.calcularPerimetro())

console.log('---------------------------------------------------------------\n')

console.log('------------------------- Exercício 5 -------------------------')

const motor = new Motor()
const carro = new CarroExec5(motor)
carro.ligar()
carro.desligar()

console.log('---------------------------------------------------------------\n')

console.log('------------------------- Exercício 6 -------------------------')

const conta = new ContaBancaria()
conta.depositar(1000)
console.log(conta.obterSaldo())
console.log('\n')

try {
    conta.sacar(50)
    console.log(conta.obterSaldo())
    console.log('\n')

    conta.sacar(500)
    console.log(conta.obterSaldo())
    console.log('\n')

    conta.sacar(700)
    console.log(conta.obterSaldo())
    console.log('\n')
} catch (error) {
    if (error instanceof Error) {
        console.error(error.message)
    }
}

console.log('---------------------------------------------------------------\n')

console.log('------------------------- Exercício 7 -------------------------')

const configuracao1 = ConfiguracaoApp.getInstancia()
configuracao1.setPropriedade('Content-Type', 'application/json')

const configuracao2 = ConfiguracaoApp.getInstancia()
configuracao2.setPropriedade('Authorization', 'Bearer')

const configuracao3 = ConfiguracaoApp.getInstancia()
console.log(`Content-Type: ${configuracao3.getPropriedade('Content-Type')}`)
console.log(`Authorization: ${configuracao3.getPropriedade('Authorization')}`)

console.log('---------------------------------------------------------------\n')
