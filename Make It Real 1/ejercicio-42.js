/*Escribe una función llamada saludar que reciba un objeto que representa una persona y retorne la frase como se muestra a continuación:

saludar({ nombre: "Pedro", edad: 23 });
// "Hola Pedro, tienes 23 años"

saludar({ nombre: "Maria", edad: 35 });
// "Hola Maria, tienes 35 años"

saludar({ nombre: "Juan" });
// "Hola Juan"

El objeto siempre tendrá la llave nombre. La llave edad es opcional y cuando no está presente deberás omitir la parte ", tienes x años".*/

const saludar = (persona) => {
   let mensaje = "Hola " + persona.nombre;

   if (persona.edad) {
    mensaje += ", tienes " + persona.edad + " años";
   }

   return mensaje
}

console.log(saludar({ nombre: "Pedro", edad: 23 }))
console.log(saludar({ nombre: "Maria", edad: 35 }))
console.log(saludar({ nombre: "Juan", }))