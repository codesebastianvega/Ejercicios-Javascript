/*Escribe una función llamada elemento que recibe un arreglo como parámetro. 
La función debe devolver el valor que se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1.

elemento([1, 2, 3]); // retorna 3
elemento(["d", "e", "f", "g"]); // retorna "f"
elemento([5]); // retorna -1
*/

function elemento(arr){
    if(arr.length < 3) {
        return -1
    }
    return arr[2]
}

console.log(elemento([1,2,3]))
console.log(elemento(["d", "e", "f", "g"]))
console.log(elemento([5]))