/*Escribe un programa para la consola que le pida al usuario dos números.

Si el primer número es menor que el segundo imprime los números en el rango de forma ascendente. 
Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

5
6
7
8
9
10
Si el primer número es mayor que el segundo imprime los números en el rango de forma descendente. 
Por ejemplo, si el usuario ingresa 10 como primer número y 5 como segundo número, el programa debe imprimir:

10
9
8
7
6
5
Nota: Fíjate que se imprimen también los números en los límites, en el ejemplo el 10 y el 5.*/

let num1 = parseInt(prompt("Escribe un numero"))
let num2 = parseInt(prompt("Escribe otro numero"))

for(let i = num1; i <= num2; i++) 
console.log(i)
for(let j = num1; j >= num2; j--)
console.log(j)