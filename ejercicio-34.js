/*Escribe una función llamada contarAs que reciba un string (una cadena de texto) y retorna el número de caracteres "a" (minúscula) hay:

contarAs("Hola Pablo"); // 2
contarAs("Hasta la próxima"); // 4
contarAs("Bien Pedro!"); // 0*/

const contarAs = (str) => {
   let contar = 0;
   for(let i = 0; i <= str.length; i++) {
        if (str[i] === "a") {
            contar++
        }
   }
   return contar
}

console.log(contarAs("Hola Pablo"))
console.log(contarAs("Hasta la próxima"))
console.log(contarAs("Bien Pedro!"))