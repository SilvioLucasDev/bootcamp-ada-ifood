// Exercício 1: Soma de elementos
// Crie uma função que recebe um array de números como parâmetro e retorna a soma de todos os elementos no array.
function somarNumeros(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

// Exercício 2: Maior elemento
// Crie uma função que recebe um array de números como parâmetro e retorna o maior número no array.
function encontrarMaiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

// Exercício 3: Média dos elementos
// Crie uma função que recebe um array de números como parâmetro e retorna a média de todos os elementos no array.
function fazerMedia(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma / array.length;
}

// Exercício 4: Encontrar um elemento
// Crie uma função que recebe um array e um valor como parâmetros e verifica se o valor está presente no array. A função deve retornar true se o valor estiver presente e false caso contrário.
function encontrarNumero(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) return true
    }
    return false;
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log("Soma dos elementos:", somarNumeros(numeros));
console.log("Maior elemento:", encontrarMaiorNumero(numeros));
console.log("Média dos elementos:", fazerMedia(numeros));
console.log("Encontrar o elemento 3:", encontrarNumero(numeros, 3));
console.log("Encontrar o elemento 6:", encontrarNumero(numeros, 6));
