/* crie um algoritmo que solicite um número e 
 informe se o numero é PAR ou ÍMPAR
 */
const numero = 7;

const par = numero % 2 == 0;

if (par) {
    console.log(`Numero PAR`);
} else {
    console.log(`Numero ÍMPAR`);
}