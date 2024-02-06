import { ILivro } from "./ILivro";

export interface IUsuario {
    nome: string;
    email: string;
    livrosEmprestados: ILivro[];
}