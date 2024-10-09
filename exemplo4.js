//crie um algoritmo que receba 6 numeros
// e imprima sua media aritmetica

const prompt = require('prompt-sync')();

soma = 0;

for (let i = 1; i <= 6; i++) {
    let numero = parseInt(prompt(`Digite o numero ${i}: `));
    soma += numero

}

let media = soma / 6;

console.log(`Resultado: ${media}`);
