export class ContaBancaria {
    private saldo: number = 0;

    sacar(valor: number): void {
        if (valor > this.saldo) {
            throw new Error(`Saque de ${valor} inválido. Saldo insuficiente`)
        }

        this.saldo -= valor
        console.log(`Saque de ${valor} realizado com sucesso`)
    }

    depositar(valor: number) {
        this.saldo += valor
    }

    obterSaldo(): string {
        return `Saldo: ${this.saldo}`
    }
}