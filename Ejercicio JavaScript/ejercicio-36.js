/*Escribe una función unirArreglo que reciba un arreglo y retorna una cadena de texto con todos los elementos separados por coma (,).

unirArreglo([1, 2, 3]); // "1,2,3"
unirArreglo(["a", "b", "c"]); // "a,b,c"
unirArreglo([]); // ""
Nota: este ejercicio lo debes realizar sin la ayuda de el método join que trae JavaScript.*/



// Definimos una función llamada unirArreglo que recibe como argumento un arreglo (arr)
const unirArreglo = (arr) => {
    // Definimos una variable llamada "str" y le asignamos un string vacío
    let str = ""
    // Usamos un bucle for para iterar sobre los elementos del arreglo
    for(let i = 0; i < arr.length; i++) {
        // Vamos concatenando cada elemento del arreglo al string "str"
        str += arr[i];
        // Si el elemento actual no es el último del arreglo, agregamos una coma al final
        if(i !== arr.length -1) {
            str += ","
        } 
    }
    // Retornamos el string resultante
    return str
}


console.log(unirArreglo([1, 2, 3]))

function unirArreglo2 (arr) {
    return arr.join(",")
}

console.log(unirArreglo2([1, 2, 3]))