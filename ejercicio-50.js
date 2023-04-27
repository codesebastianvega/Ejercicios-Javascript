/*Imprime todos los elementos del arreglo utilizando el método forEach de los arreglos.

El resultado debería ser el siguiente:

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];
45
Hola
82
2
67
true
Juan
12.34 */

const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];

// se utiliza la sintaxis de la función de flecha con cuerpo de una sola línea, que permite omitir las llaves {}
arr.forEach((elemento) => console.log(elemento))


//esta seria la funcion sin simplificar
/* const arr = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];

function imprimirElemento(elemento) {
  console.log(elemento);
}

arr.forEach(imprimirElemento);
 */ 
