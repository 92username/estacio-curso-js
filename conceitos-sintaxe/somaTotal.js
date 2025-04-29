let somaTotal = 0;
const qtdeInteracoes = 50;
for(let i = qtdeInteracoes; i >= 1; i-- ) {
     somaTotal += i; // equivalente a utilizar somaTotal = somaTotal + i
        console.log('soma parcial:',somaTotal);
}
console.log('soma total:',somaTotal);