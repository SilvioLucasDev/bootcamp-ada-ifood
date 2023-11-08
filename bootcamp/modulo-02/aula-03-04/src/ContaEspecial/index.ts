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
            ${super.extrato()}
            Limite: ${this._limite}
            Saldo + Limite: ${this._saldo + this._limite}
        `
    }
}