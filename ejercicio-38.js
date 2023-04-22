/*Escribe una función llamada abuela que reciba un string (una cadena de texto).

Si el string está todo en mayúsculas la función debe retornar la frase "Ahh si, manzanas!". De lo contrario, deberá retornar la frase "Habla más duro mijito".

Por último, si el string es vacío (o son sólo espacios) debe retornar la frase "Dices algo?". */



const abuela = (cadena) => {
    if (cadena.trim() === "") {
        return "Dices algo?"
    } else if (cadena.toUpperCase() === cadena) {
        return "Ahh si, manzanas"
    } else {
        return "Habla más duro mijitp"
    }
}

console.log(abuela("hola")); // "Habla más duro mijito"
console.log(abuela("HOLA")); // "Ahh si, manzanas!"
console.log(abuela("")); // "Dices algo?"
console.log(abuela("    ")); // "Dices algo?"