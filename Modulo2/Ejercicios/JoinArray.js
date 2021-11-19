/*
Tenemos un array con palabras sueltas que, 
juntas, forman una gran frase.

Queremos, utilizando un método de array 
sobre la arrayFrase , convertirlo en una 
oración entera, y almacenar ese String en 
una variable llamada fraseNueva.

*/

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
  ];
  let fraseNueva = arrayFrase.join(' ');
  
  console.log(fraseNueva);