import { IAutor } from "../Interfaces/IAutor";
import { ILivro } from "../Interfaces/ILivro";
import { IUsuario } from "../Interfaces/IUsuario";

export class Livro implements ILivro {
    constructor(
        public titulo: string,
        public autor: IAutor,
        public anoPublicacao: number,
        public genero: string
    ) { }

    emprestar(usuario: IUsuario): void {
        // Lógica para empréstimo
    }

    devolver(usuario: IUsuario): void {
        // Lógica para devolução
    }
}