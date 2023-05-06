/*Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. 
Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"*/

let num = parseInt(prompt("Adivina un numero entre 1 y 10"));
let randomNum = Math.floor(Math.random() * 10) + 1;

if (randomNum === num) {
  console.log("Felicidades, ese era");
} else {
  console.log("Lo siento el numero era " + randomNum + ", intenta nuevamente.");
}
