const prompt = require('prompt-sync')();

const idade = parseInt(prompt(`Informe a sua idade: `))

const ehMaiorDeIdade = idade >= 18;
const naoEhMaiorDeIdade = !ehMaiorDeIdade; // idade < 18

if (naoEhMaiorDeIdade) {
    console.log(`é menor de idade`);
} else {
    console.log(`é maior de idade`);
}
// operadores relacionais
// MAIOR QUE ( > )
// MENOR QUE ( < )
// MAIOR OU IGUAL A ( >= )
// MENOR OU IGUAL A ( <= )
// IGUAL A ( == )
// DEFERENTE DE ( != )