/*Escribe una función llamada obtenerValor que reciba un objeto y un string (que representa una llave en el objeto). 
La función deberá retornar el valor que tenga la llave que llega como segundo parámetro. Si la llave no existe retorna false:

obtenerValor({ a: 1, b: 2, c: 3 }, "a"); // 1
obtenerValor({ a: 1, b: 2, c: 3 }, "b"); // 2
obtenerValor({ b: 2, c: 3 }, "a"); // false */

function obtenerValor (obj, cadena) {
    if (!obj.hasOwnProperty(cadena)) return false
    return obj[cadena]
}

console.log(obtenerValor({ a: 1, b: 2, c: 3 }, "a"))
console.log(obtenerValor({ a: 1, b: 2, c: 3 }, "b"))
console.log(obtenerValor({ b: 2, c: 3 }, "a"))