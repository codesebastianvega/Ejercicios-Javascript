/*Escribe una función eliminarPeso que reciba un objeto. La función deberá eliminar la llave peso (si existe) y retornar el objeto modificado.

eliminarPeso({ nombre: "Juan", peso: 40 }); // { nombre: "Juan" }
eliminarPeso({ peso: 30 }); // {}
eliminarPeso({ nombre: "Diana" }); // { nombre: "Diana" } */

function eliminarPeso (obj) {
        delete obj.peso;
        
        return obj;
}


console.log(eliminarPeso({ nombre: "Juan", peso: 40 }))
console.log(eliminarPeso({ peso: 30 }))
console.log(eliminarPeso({ nombre: "Diana" }))