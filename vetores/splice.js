/* splice
É um método multiuso em JavaScript que serve tanto para excluir elementos de
um array, como veremos a seguir, quanto para substituir e inserir. 
Sua sintaxe é: */

// array.splice(início, quantidade_para_remover, item1, item2, ...)

var alunos = ['Alex', 'Anna', 'João'];
alunos.splice(3,0,'Helena');
console.log(alunos); //imprimirá 'Alex', 'Anna', 'João', 'Helena'

// também é possível substituir um dos elementos do array. Veja o exemplo:

var alunos = ['Alex', 'Anna', 'João'];
alunos.splice(1,1,'Helena');
Console.log(alunos); //imprimirá 'Alex, 'Helena', 'João'