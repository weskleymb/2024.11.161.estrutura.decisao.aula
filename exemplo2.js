const prompt = require('prompt-sync')();

const nota = parseFloat(prompt(`Informe a sua nota: `));

const aprovado = nota >= 7;
const reprovado = nota < 3;

if (aprovado) {
    console.log(`Com media ${nota} você está APROVADO`);
} else if (reprovado) {
    console.log(`Com media ${nota} você está REPROVADO`);
} else {
    console.log(`Com media ${nota} você está em RECUPERAÇÃO`);
}
