/*Escribe una función llamada contarUnos que reciba un arreglo y retorne la cantidad de números uno (1) que haya en el arreglo.

contarUnos([5, 1, 4, 1]); // 2
contarUnos([1, 1, 1]); // 3
contarUnos([]); // 0*/

const contarUnos = (arr) => {
    let contar = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            contar++
        }
    }
    return contar
}

console.log(contarUnos([5, 1, 4, 1]))
console.log(contarUnos([1, 1, 1]))
console.log(contarUnos([]))