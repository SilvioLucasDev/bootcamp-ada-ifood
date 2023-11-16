import { FormaGeometrica } from "./iFormaGeometrica";

export class Circulo implements FormaGeometrica {
    constructor(private raio: number) { }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio
    }
}