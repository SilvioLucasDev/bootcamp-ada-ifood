import { Conta } from "../Conta"

export class ContaEspecial extends Conta {
    private _limite: number

    constructor(conta: number, limite: number, saldo: number = 0) {
        super(conta, saldo)
        this._limite = limite
    }

    get limite (): number {
        return this._limite
    }

    extrato(): string {
        return `
            **** Extrato ****
            Agencia: ${this.agencia}
            Conta ${this.conta}
            -----------------
            Saldo: ${this.saldo}
            Limite: ${this._limite}
            Saldo total: ${this.saldo + this._limite}
        `
    }
}