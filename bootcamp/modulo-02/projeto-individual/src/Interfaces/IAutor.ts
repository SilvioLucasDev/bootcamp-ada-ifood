import { ILivro } from "./ILivro";

export interface IAutor {
    nome: string;
    dataNascimento: Date;
    nacionalidade: string;
    livros: ILivro[];
}