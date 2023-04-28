/*Escribe una función llamada cambiarPeso que reciba un objeto (que representa una persona). 
Si la llave peso está presente deberás cambiarla multiplicando el peso original por dos (2) y retornar el objeto. Si no está presente deberás retornar null.

cambiarPeso({ peso: 70 }); // { peso: 140 }
cambiarPeso({ nombre: "Maria", peso: 48 }); // { nombre: "Maria", peso: 96 }
cambiarPeso({ nombre: "Juan" }); // null
cambiarPeso({}); // null */

const cambiarPeso = (obj) => {
    if (!obj.hasOwnProperty("peso")) {
        return null
    }
    obj.peso = obj.peso * 2;
    return obj
}

console.log(cambiarPeso({ peso: 70 }))
console.log(cambiarPeso({ nombre: "Maria", peso: 48 }))
console.log(cambiarPeso({ nombre: "Juan" }))
console.log(cambiarPeso({}))