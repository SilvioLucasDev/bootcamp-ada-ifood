import { Aluno } from "./Aluno"
import { Materia } from "./Materia";
import { Professor } from "./Professor";

const aluno1 = new Aluno('João', 'joao@mail.com', new Date('1999-01-04'))
const aluno2 = new Aluno('Maria', 'maria@mail.com', new Date('1999-01-04'))
const aluno3 = new Aluno('Lucas', 'lucas@mail.com', new Date('1999-01-04'))

const professor = new Professor(
    'Linguiça',
    'prof.linguaca@ada.com',
    new Date('1999-01-04'),
    230,
)

const materia = new Materia('POO01', 'Programação OO', professor)

console.log(materia);

console.log(professor);
console.log(aluno1);
console.log(aluno2);
console.log(aluno3);