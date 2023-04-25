/*Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra está separada por espacio.

capitalizar("pedro perez"); // "Pedro Perez"
capitalizar("make it real"); // "Make it Real"*/

function capitalizar(cadena) {
    let palabra = cadena.split(" ");
  
    for(var i = 0; i < palabra.length; i++) {
      let capitalizar = palabra[i].split("");
  
      capitalizar[0] = capitalizar[0].toUpperCase();
  
      palabra[i] = capitalizar.join("");
    }
  
    return palabra.join(" ");
  }

console.log(capitalizar("pedro perez")); // "Pedro Perez"
console.log(capitalizar("make it real")); // "Make it Real"