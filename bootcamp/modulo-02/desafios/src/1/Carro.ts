export class Carro {
    constructor(
        public modelo: string,
        public ano: number,
        public cor: string
    ) { }

    public detalhes(): void {
        console.log(`Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`)
    }
}
