/*
Crie um programa que receba um valor numérico correspondente a uma operação
aritmética (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão) e, 
com base nesse valor, execute a operação entre dois números fornecidos pelo usuário.
*/

const prompt = require('prompt-sync')();

console.log(`Qual operação deseja fazer?\n1 - SOMA\n2 - SUBTRAÇÃO\n3 - MULTIPLICAÇÃO\n4 - DIVISÃO\n`)

const operacao = parseInt(prompt('Informe a opção escolhida: '));

const numero1 = parseFloat(prompt(`Informe o número 1: `));
const numero2 = parseFloat(prompt(`Informe o número 2: `));

let resultado = 0;

switch(operacao) {
    case 1:
        resultado = numero1 + numero2;
        break;
    case 2:
        resultado = numero1 - numero2;
        break;
    case 3:
        resultado = numero1 * numero2;
        break;
    case 4:
        resultado = numero1 / numero2;
        break;
    default:
        resultado = `Operação Invalida`;
}

console.log(`Resultado é : ${resultado}`);
