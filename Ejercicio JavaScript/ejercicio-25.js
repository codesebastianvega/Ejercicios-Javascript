/*La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

Si el número es 1 retorna "El color es negro".
Si el número es 2 retorna "El color es blanco".
Si el número es 3 retorna "El color es azul".
De lo contrario retorna "El color es verde".
El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla para que funcione correctamente según lo anterior.
*/


function calcularColor(num) {
    let color;
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "rojo";
  } else {
    color = "verde";
  }

  return "El color es " + color;
}

console.log(calcularColor(2)) 