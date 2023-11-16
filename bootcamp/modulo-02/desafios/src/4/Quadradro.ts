import { FormaGeometrica } from "./iFormaGeometrica";

export class Quadrado implements FormaGeometrica {
    constructor(private lado: number) { }

    calcularArea(): number {
        return this.lado * this.lado
    }

    calcularPerimetro(): number {
        return 4 * this.lado
    }
}