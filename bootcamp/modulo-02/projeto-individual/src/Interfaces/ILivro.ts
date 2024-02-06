import { IAutor } from "./IAutor";

export interface ILivro {
    titulo: string;
    autor: IAutor;
    anoPublicacao: number;
    genero: string;
}