/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

function sortearNumerosAleatorios() {
  const numeros = [];
  while (numeros.length < 6) {
    const numeroAleatorio = Math.round(Math.random() * 59) + 1;
    if (!numeros.includes(numeroAleatorio)) numeros.push(numeroAleatorio);
  }
  return numeros;
}

const numerosSorteados = sortearNumerosAleatorios();
console.log("Números sorteados:", numerosSorteados);
