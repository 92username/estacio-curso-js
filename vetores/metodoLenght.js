// método length

// O método length retorna o número de elementos de um array.
// tambem pode ser usado para remover elementos de um array.

var primos = [2,3,5,7,11,13,17];
alert(primos.length); //imprimirá 7
primos.length = 4;
console.log(primos.length); //imprimirá 4

// nesse exemplo, ao definirmos o tamanho do array como 4, ele será reduzido,
// sendo mantidos os elementos do índice 0 ao 3 e excluídos os demais.