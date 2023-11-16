import { Motor } from "./Motor";

export class Carro {
    constructor(private motor: Motor) { }

    ligar(): void {
        this.motor.ligar()
    }

    desligar(): void {
        this.motor.desligar()
    }
}