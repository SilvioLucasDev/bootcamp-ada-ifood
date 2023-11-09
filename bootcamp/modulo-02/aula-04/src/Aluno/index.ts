import { Pessoa } from "../Pessoa"

export class Aluno extends Pessoa {
    private static _proximaMatricula: number = 1
    public matricula: number

    constructor(nome: string, email: string, dataNascimento: Date) {
        super()
        this.nome = nome
        this.email = email
        this.dataNascimento = dataNascimento
        this.matricula = Aluno._proximaMatricula++
    } 
    
    andar(): string {
        throw new Error("Method not implemented.")
    }

    static get proximaMatricula() {
        return Aluno._proximaMatricula
    }
}