

const escolha = 'subtracao';
const n1 = 80;
const n2 = 10;

switch(escolha) {
    case 'soma':
        console.log(n1 + n2);
        break;
    case 'subtracao':
        if (n1 >= n2) {
            let v1 = 33;
            console.log(n1 - n2);
        } else {
            console.log(n2 - n1);
        }
        // break;
    case 'multiplicacao':
        console.log(v1 * n1);
}