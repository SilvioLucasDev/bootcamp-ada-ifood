import { Conta } from "./Conta"
import { ContaEspecial } from "./ContaEspecial"

let numeroConta = 0
const conta = new Conta(++numeroConta, 2000)

console.log(conta.extrato());

console.log('\n');


const contaEspecial = new ContaEspecial(++numeroConta, 1000, 3000)

console.log(contaEspecial.extrato());
