/*9. Número de aes (letra "a")
Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":*/

// escribe tu respuesta acá

const numeroDeAes = (cadena) => {
  let contar = 0;
  for (let i = 0; i <= cadena.length; i++) {
    if (cadena[i] === "a") {
      contar++;
    }
  }
  return contar;
};

// código de prueba
console.log(numeroDeAes("abracadabra")); // 5
console.log(numeroDeAes("etinol")); // 0
console.log(numeroDeAes("")); // 0
