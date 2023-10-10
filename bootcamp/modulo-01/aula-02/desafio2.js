/* 
    Crie um jogo de adivinhação em que o programa gera um número aleatório entre 1 e 100 e o jogador tenta adivinhar o número. 
    O jogo deve dar dicas ao jogador, informando se o número é maior ou menor do que a tentativa atual. 
    O jogador deve continuar a adivinhar até acertar o número. No final, deverá informar a quantidade de tentativas.
*/

const { prompt } = require("readline-sync");

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function checkNumber(randomNumber, number) {
  if (randomNumber === number) {
    return true;
  } else if (number > randomNumber) {
    return console.log("O número é menor do que o seu palpite.");
  } else if (number < randomNumber) {
    return console.log("O número é maior do que o seu palpite.");
  }
  return false;
}

const randomNumber = generateRandomNumber();
let numberOfTries = 0;
let number;

while (true) {
  msg =
    numberOfTries === 0
      ? "Digite um número entre 1 e 100: "
      : "Digite outro entre 1 e 100:";
  console.log(msg);
  number = parseInt(prompt());

  numberOfTries++;

  if (checkNumber(randomNumber, number)) {
    console.log(
      `Parabéns! Você acertou o número ${randomNumber} em ${numberOfTries} tentativas.`
    );
    break;
  }
}
