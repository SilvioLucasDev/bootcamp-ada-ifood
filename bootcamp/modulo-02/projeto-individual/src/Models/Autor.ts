import { IAutor } from "../Interfaces/IAutor";
import { ILivro } from "../Interfaces/ILivro";

export class Autor implements IAutor {
    livros: ILivro[] = [];

    constructor(
        public nome: string,
        public dataNascimento: Date,
        public nacionalidade: string
    ) { }

    adicionarLivro(livro: ILivro): void {
        this.livros.push(livro);
    }

    removerLivro(livro: ILivro): void {
        const index = this.livros.indexOf(livro);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }
}