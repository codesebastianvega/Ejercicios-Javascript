/*3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula: peso / altura^2

Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30 */

function bmi(peso, altura) {
  let bmi = parseFloat(peso) / Math.pow(parseFloat(altura), 2);

  if (bmi < 18.5) {
    return "Bajo de peso";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    return "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Sobrepeso";
  } else if (bmi >= 30) {
    return "Obeso";
  }
}

console.log(bmi(65, 1.8)); // "Normal"
console.log(bmi(72, 1.6)); // "Sobrepeso"
console.log(bmi(52, 1.75)); //  "Bajo de peso"
console.log(bmi(135, 1.7)); // "Obeso"
