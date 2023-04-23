/*Escribe una función llamada esMultiplo que reciba dos números y retorne verdadero si el primer argumento es múltiplo del segundo.

Ejemplos de cómo vamos a invocar la función:

esMultiplo(15, 3); // true
esMultiplo(8, 5); // false
esMultiplo(21, 7); // true*/

function esMultiplo(a,b) {
    if(a % b === 0) {
        return true
    } else {
      return false
    }
}

console.log(esMultiplo(21,7))
console.log(esMultiplo(20,6))
console.log(esMultiplo(15,3))