import { Docente } from "../Docente"

export class Professor extends Docente {
    private _salario: number

    constructor(nome: string, email: string, dataNascimento: Date, salario: number) {
        super()
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
        this._salario = salario
    }

    get salario () {
        return this._salario
    }

    andar(): string {
        return ''
    }

    falar(): string {
        return 'Falando sobre programação'
    }

    lecionar(): string {
        return 'Falando olá'
    }
}