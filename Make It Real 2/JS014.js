/*14. Sumar arreglo entre el rango
Escribir una función llamada sumarArreglo que reciba tres argumentos: un arreglo de números, la posición inicial y la posición final. La función debe retornar la suma de todos los números 
dentro del rango (la posición inicial y la posición final, incluyéndolas).

Nota: puedes asumir que la posición inicial va a ser menor o igual a la posición final, y que están dentro de los límites del arreglo.*/

// escribe tu respuesta acá

function sumarArreglo(arr, pos, posf) {
  if (pos === posf) {
    return 0;
  }
  let sum = 0;
  for (let i = pos; i <= posf; i++) {
    sum += arr[i];
  }
  return sum;
}

// código de prueba
console.log(sumarArreglo([1, 2, 3], 1, 2)); // 5
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6)); // 22
console.log(sumarArreglo([7, 8, 9], 0, 0)); // 0
