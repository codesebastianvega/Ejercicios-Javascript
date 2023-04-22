/*Escribe una función llamada palabras que reciba un string y retorne un arreglo con las palabras individuales que aparecen en el string.

Nota: puedes asumir que las palabras están separadas por un espacio.

palabras("hola mundo"); // ["hola", "mundo"]
palabras("make it real"); // ["make", "it", "real"] */


const palabras = (cadena) => {
    // Creamos un arreglo vacío para almacenar las palabras individuales
    var palabras = [];
  
    // Creamos una variable para almacenar la palabra actual que estamos construyendo
    var palabraActual = '';
    
    // Recorremos cada caracter de la cadena recibida como argumento
    for (var i = 0; i < cadena.length; i++) {
      // Si el caracter actual no es un espacio, lo agregamos a la palabra actual
      if (cadena[i] !== ' ') {
        palabraActual += cadena[i];
      } else { // Si el caracter es un espacio, significa que se ha terminado una palabra
        // Agregamos la palabra actual al arreglo de palabras
        palabras.push(palabraActual);
        // Limpiamos la variable palabraActual para empezar a construir la siguiente palabra
        palabraActual = '';
      }
    }
    
    // Agregamos la última palabra al arreglo de palabras (si es que hay una)
    palabras.push(palabraActual);
    
    // Retornamos el arreglo de palabras
    return palabras;
  }
  

    console.log(palabras("hola mundo"))




function palabras2 (str) {
    return str.split(" ")
}

console.log(palabras2("make it real"))