/*10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter). La función debe retornar el número de veces que aparece el caracter en el string.*/

// escribe tu respuesta acá

function numeroDeCaracteres(cadena, caracter) {
  let contar = 0;
  for (let i = 0; i <= cadena.length; i++) {
    if (cadena[i] === caracter) {
      contar++;
    }
  }
  return contar;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")); // 2
console.log(numeroDeCaracteres("MMMMM", "m")); // 0
console.log(numeroDeCaracteres("eeee", "e")); // 4
