/*Escribe una función llamada escalera que reciba un número como argumento. 
La función debe retornar una cadena de texto en forma de escalera como en el siguiente ejemplo:

escalera(2);
// #
// ##

escalera(3);
// #
// ##
// ###

escalera(5);
// #
// ##
// ###
// ####
// #####
La primera línea del string tiene un signo de número (#), la segunda dos, y así sucesivamente hasta el número que ingresó el usuario.

Nota: Recuerda que para representar un salto de línea en un string debes utilizar el caracter \n.*/

function escalera(num) {
    let escalera = " ";
    for(let i = 1;i <= num; i++){
        escalera += "#".repeat(i) + "\n"
    }
   return escalera
}

console.log(escalera(5))