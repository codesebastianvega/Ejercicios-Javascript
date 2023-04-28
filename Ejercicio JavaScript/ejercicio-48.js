/*Escribe una función buscarProducto que reciba un arreglo de objetos y un número. La función deberá buscar el número dentro de cada objeto (en la llave id) 
y retornar el objeto encontrado.

Si no encuentra un objeto con ese id deberá retornar null.

buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 1);
// { id: 1, nombre: "A" }
buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 566);
// null */

function buscarProducto (arr, id) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return arr[i]
        }
    }

    return null
}

console.log(buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 2));
console.log(buscarProducto([{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }], 566))