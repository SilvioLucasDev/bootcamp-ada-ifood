/*
    Crie um algoritmo usando o for que leia uma lista.
    Retorne duas novas listas, uma contendo apenas os números pares e outra, os ìmpares.
    Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9];

    Lista -> [1,2,3,4,5,6,7,8,9]
    [2, 4, 6, 8] -> pares
    [1, 3, 5, 7, 9] -> impares
*/

function separarNumeros(listaNumeros) {
  let listaNumerosImpares = [];
  let listaNumerosPares = [];
  for (const numero of listaNumeros) {
    numero % 2 === 0 ? listaNumerosPares.push(numero) : listaNumerosImpares.push(numero);
  }
  return { listaNumerosPares, listaNumerosImpares };
}

const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const { listaNumerosPares, listaNumerosImpares } = separarNumeros(listaNumeros);

console.log("Lista de números:", listaNumeros);
console.log("Números pares encontrados:", listaNumerosPares);
console.log("Números ímpares encontrados:", listaNumerosImpares);
