/*
    Você foi convidado para desenvolver um script para realizar os sorteios para uma casa de apostas (estilo mega sena). O sorteio consiste em 6 dezenas aleatórias, entre 1 e 60.
    Para gerar um número aleatório, pode-se utilizar o método random(), da biblioteca Math: Math.round(Math.random() * 10)
*/

function sortearNumerosAleatorios() {
  const numerosSorteados = [];
  while (numerosSorteados.length < 6) {
    const numeroAleatorio = Math.round(Math.random() * 59) + 1;
    if (!numerosSorteados.includes(numeroAleatorio)) numerosSorteados.push(numeroAleatorio);
  }
  return numerosSorteados;
}

const numerosSorteados = sortearNumerosAleatorios();
console.log("Números sorteados:", numerosSorteados);
