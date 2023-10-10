const salarioAtual = 1500;
let percentualAumento;
let valorAumento;
let novoSalario;

if (salarioAtual > 0 && salarioAtual <= 1500) {
  percentualAumento = 20;
} else if (salarioAtual <= 1700) {
  percentualAumento = 15;
} else if (salarioAtual <= 2000) {
  percentualAumento = 10;
} else {
  percentualAumento = 5;
}

valorAumento = (salarioAtual * percentualAumento) / 100;

novoSalario = salarioAtual + valorAumento;

console.log("Salário antes do reajuste: R$", formatCurrency(salarioAtual));
console.log("O percentual de aumento aplicado:", percentualAumento + "%");
console.log("O valor do aumento: R$", formatCurrency(valorAumento));
console.log("O novo salário, após o aumento: R$", formatCurrency(novoSalario));

function formatCurrency(value) {
  return value.toLocaleString("pr-br", {
    style: "currency",
    currency: "BRL",
  });
}
