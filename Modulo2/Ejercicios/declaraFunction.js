/*
Escribir las siguientes tres funciones:

anterior: recibe un número como parámetro y 
devuelve ese número menos uno.

triple: recibe un número como parámetro y 
devuelve el triple de ese número.

anteriorDelTriple: recibe un número como 
parámetro y, utilizando las dos funciones 
anteriores, tendrá que devolver el número 
recibido multiplicado por 3 (tres) y al resultado
 restarle 1 (uno).

 Aclaración: este ejercicio conlleva cierta 
complejidad. Es normal que se tarde en llegar 
a la solución.

Dame una pista

*/
function anterior(numero){
    return numero-=1;
}

function tripe(numero){
    return numero * 3;
}

function anteriorDelTriple(numero){
    return anterior(tripe(numero));
}

console.log(anterior(6));
console.log(tripe(6));
console.log(anteriorDelTriple(6));