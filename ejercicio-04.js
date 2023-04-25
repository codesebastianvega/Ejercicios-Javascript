/* Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola:

Tienes 29 años */

let nacimiento = parseInt(prompt("En que año naciste? "))
let year = new Date().getFullYear()
let calculo = year - nacimiento
console.log("Tienes " + calculo + " años.") 