/*Escribe una función llamada reemplazar que reciba tres argumentos: 
un arreglo, una posición (un número) y un valor. La función debe reemplazar el valor que se encuentra 
en la posición que llega por parámetro con el nuevo valor y retornar el arreglo modificado.*/

reemplazar([1, 2, 3, 4], 1, 3); // [1, 3, 3, 4]
reemplazar(["Pedro", "Maria", 0, "Juan"]); // ["Juan", "Maria"]


function reemplazar(arr,pos,val){
    arr[pos] = val
    return arr
}

const num = [1, 2, 3, 4]

console.log(reemplazar(num,1,3))