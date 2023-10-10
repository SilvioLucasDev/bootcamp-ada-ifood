// String para número
const number = "123ABC456"

const number1 = Number(number)
console.log(number1); // NAN
console.log(typeof number1);

const number2 = parseInt(number)
console.log(number2); // 123
console.log(typeof number2);

const number3 = +number
console.log(number3); // NAN
console.log(typeof number3);


// Número para string
const documentNumber = 12345678910
const formattedDocumentNumber1 = String(documentNumber)
const formattedDocumentNumber2 = documentNumber.toString()
const formattedDocumentNumber3 = "" + documentNumber

console.log(typeof formattedDocumentNumber1);
console.log(typeof formattedDocumentNumber2);
console.log(typeof formattedDocumentNumber3);

