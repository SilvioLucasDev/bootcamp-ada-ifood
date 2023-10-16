/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

function separarNumeros(listaDeNumeros) {
  let numerosImpares = [];
  let numerosPares = [];
  for (const numero of listaDeNumeros) {
    numero % 2 === 0 ? numerosPares.push(numero) : numerosImpares.push(numero);
  }
  return { numerosPares, numerosImpares };
}

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const { numerosPares, numerosImpares } = separarNumeros(listaDeNumeros);

console.log("Lista de números:", listaDeNumeros);
console.log("Números pares encontrados:", numerosPares);
console.log("Números ímpares encontrados:", numerosImpares);
