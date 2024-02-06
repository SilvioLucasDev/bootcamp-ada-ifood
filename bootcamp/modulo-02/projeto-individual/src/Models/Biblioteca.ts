import { IAutor } from "../Interfaces/IAutor";
import { ILivro } from "../Interfaces/ILivro";
import { IUsuario } from "../Interfaces/IUsuario";

export class Biblioteca {
    livros: ILivro[] = [];
    autores: IAutor[] = [];
    usuarios: IUsuario[] = [];

    adicionarLivro(livro: ILivro): void {
        this.livros.push(livro);
    }

    removerLivro(livro: ILivro): void {
        const index = this.livros.indexOf(livro);
        if (index !== -1) {
            this.livros.splice(index, 1);
        }
    }

    adicionarAutor(autor: IAutor): void {
        this.autores.push(autor);
    }

    removerAutor(autor: IAutor): void {
        const index = this.autores.indexOf(autor);
        if (index !== -1) {
            this.autores.splice(index, 1);
        }
    }

    adicionarUsuario(usuario: IUsuario): void {
        this.usuarios.push(usuario);
    }

    removerUsuario(usuario: IUsuario): void {
        const index = this.usuarios.indexOf(usuario);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
        }
    }

    buscarLivrosPorAutor(autor: IAutor): ILivro[] {
        return this.livros.filter((livro) => livro.autor === autor);
    }

    listarLivrosEmprestados(): ILivro[] {
        return this.livros.filter((livro) => livro.emprestado);
    }
}