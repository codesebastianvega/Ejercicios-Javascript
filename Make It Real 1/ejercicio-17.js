/*Escribe un programa que:

Le pida al usuario un string (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.*/

let frase = prompt("Escribe un palabra para salir")

while(frase !== "salir") {
        console.log(frase)
        frase = prompt("Escribe un palabra para salir")
    }
    
 console.log("Hasta pronto!")