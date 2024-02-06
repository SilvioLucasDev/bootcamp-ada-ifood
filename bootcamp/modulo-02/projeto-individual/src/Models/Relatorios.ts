import { Biblioteca } from "./Biblioteca";
import { Livro } from "./Livro";

export class Relatorios {
    static listarLivrosEmprestados(biblioteca: Biblioteca): Livro[] {
        return biblioteca.listarLivrosEmprestados();
    }

    // Outros métodos de relatórios podem ser adicionados conforme necessário
}