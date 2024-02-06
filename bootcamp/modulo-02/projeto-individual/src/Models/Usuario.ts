import { ILivro } from "../Interfaces/ILivro";
import { IUsuario } from "../Interfaces/IUsuario";

export class Usuario implements IUsuario {
    livrosEmprestados: ILivro[] = [];

    constructor(public nome: string, public email: string) { }

    emprestarLivro(livro: ILivro): void {
        // Lógica para empréstimo
    }

    devolverLivro(livro: ILivro): void {
        // Lógica para devolução
    }
}