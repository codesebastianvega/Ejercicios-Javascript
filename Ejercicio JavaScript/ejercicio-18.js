// Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar 
// (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

let num = parseInt(prompt("Adivina un numero entre 0 y 10"))
let randomNum = Math.floor(Math.random() * 10)

while(num !== randomNum) {
    console.log("Ese no es.")
    num = parseInt(prompt("Intenta de nuevo"))
}

console.log("Felicidades el numero era " + randomNum)