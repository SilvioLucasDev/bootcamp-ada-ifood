export class Conta {
    public agencia: number = 1
    public conta: number // static
    protected _saldo: number

    constructor(conta: number, saldo: number = 0) {
        this.conta = conta
        this._saldo = saldo
    }

    // get saldo (): number {
    //     return this._saldo
    // }

    extrato(): string {
        return `
            **** Extrato ****
            Agencia: ${this.agencia}
            Conta ${this.conta}
            -----------------
            Saldo total: ${this._saldo}
        `
    }
}