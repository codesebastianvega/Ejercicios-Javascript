/*Escribe un programa para la consola que le pida al usuario su año de nacimiento e imprima en la consola la generación a la que pertenece:

"Gran generación" si el año es menor a 1945
"Baby boomer" si es entre 1945 y 1964
"X" si es entre 1965 y 1981
"Millenial" si es entre 1982 y 1994
"Z" si es igual o mayor a 1995
Por ejemplo, si el usuario ingresa el año 1920 el programa de imprimir "Gran generación".*/

let date = prompt("Cual es tu año de nacimiento? ")

if (date < 1945) {
    console.log("Gran generación")
} else if (date >= 1945 && date <= 1964) {
    console.log("Baby boomer")
} else if (date >= 1965 && date <= 1981) {
    console.log("Genereración X")
} else if (date >= 1982 && date <= 1994) {
    console.log("Millenial")
} else {
    console.log("Genereración Z")
}