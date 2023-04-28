/*Escribe una función llamada crearArreglo que reciba un número y retorne un arreglo con los números
 desde 1 hasta el número que se reciba (incluyéndolo).

crearArreglo(3); // [1, 2, 3]
crearArreglo(10); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
crearArreglo(0); // []
*/

function crearArreglo(num) {
    let arr = []
    for(let i = 1; i <= num; i++){
        arr.push(i)
    }
    return arr
}
 console.log(crearArreglo(5))