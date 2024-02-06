import { Autor } from "./Models/Autor";
import { Biblioteca } from "./Models/Biblioteca";
import { Livro } from "./Models/Livro";
import { Usuario } from "./Models/Usuario";

// Testes
const autor1 = new Autor('Autor 1', new Date(), 'Nacionalidade 1');
const livro1 = new Livro('Livro 1', autor1, 2022, 'Ficção Científica');
const usuario1 = new Usuario('Usuário 1', 'usuario1@email.com');

autor1.adicionarLivro(livro1);

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarAutor(autor1);
biblioteca.adicionarUsuario(usuario1);

// Exemplo de uso
livro1.emprestar(usuario1);

// Relatório de livros emprestados
const livrosEmprestados = Relatorios.listarLivrosEmprestados(biblioteca);
console.log('Livros emprestados:', livrosEmprestados);
