//pseudo código

/*a remoção de elementos de um array pode ser feita com a utilização do 
método nativo delete */

delete frutas[0];

// pop remove o último elemento do array
// sintaxe:
// array.pop()
var frutas = ['banana', 'maçã', 'laranja'];
frutas.pop(); // remove 'laranja'
console.log(frutas); //imprimirá 'banana', 'maçã'

// shift remove o primeiro elemento do array
// sintaxe:
// array.shift()
var frutas = ['banana', 'maçã', 'laranja'];
frutas.shift(); // remove 'banana'
console.log(frutas); //imprimirá 'maçã', 'laranja'

// ou seja, pop remove o ultimo, e shift remove o primeiro.  shift atualiza o array
// e pop não atualiza o array.

