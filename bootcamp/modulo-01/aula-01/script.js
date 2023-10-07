// BigInt
const numero = 10000n;
console.log(typeof numero);

const bigint = BigInt(numero);
console.log(typeof bigint);
// ------------------------------------------------

// Null retorna um Object
let lastName = null
console.log(typeof lastName);
// ------------------------------------------------

// Symbol
function generateId() {
    return Math.random().toString(36).substring(7);
}
const idSymbol = Symbol("id");
const user = {
    [idSymbol]: generateId()
};
console.log(user[idSymbol]); 
console.log(user['id']);  // Não consegue acessar o valor, se caso for necessário acessar pode chamar uma function tipo um get() e set()
// ------------------------------------------------

// Object
const client = {
    name: "Silvio"
};

// Forma 1 de criar um novo objeto sem dependência
const client2 = Object.assign({}, user, {
    name: "Lucas"
});

// Forma 2 de criar um novo objeto sem dependência
const user2 = {
    ...user,
    name: "Lucas"
};

console.log(user)
console.log(user2)
// ------------------------------------------------

// Alias na hora de extra
let { name: novoNome } = user2
console.log(novoNome);

const newClient = {
    name: 'Silvio',
    address: {
        street: 'Minha Rua'
    }
};

const { name, address: { street } } = newClient;

console.log(name);
console.log(street);
// ------------------------------------------------