/*+Transcribir ADN a ARN
Escribir una función llamada transcribir que reciba un string (una cadena de ADN) y retorne otro string (su complemento ARN).

Los complementos son los siguientes:

G -> C
C -> G
T -> A
A -> U */
// escribe tu función acá

//con metodo switch case

function transcribir(adn) {
  let arn = "";
  for (let i = 0; i < adn.length; i++) {
    switch (adn[i]) {
      case "G":
        arn += "C";
        break;

      case "C":
        arn += "G";
        break;

      case "T":
        arn += "A";
        break;

      case "A":
        arn += "U";
        break;

      default:
        arn += "-";
        break;
    }
  }
  return arn;
}

// código de prueba
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

//COn metodo .replace

const transcribir2 = (adn) => {
  return adn
    .replace(/G/g, "c")
    .replace(/C/g, "g")
    .replace(/A/g, "u")
    .replace(/T/g, "a")
    .toUpperCase();
};

// código de prueba 2
console.log(transcribir2("ACGT")); // "UGCA"
console.log(transcribir2("ACGTGGTCTTAA")); // "UGCACCAGAAUU"

//Con metodo IF

function transcribir3(adn) {
  let arn = "";
  for (let i = 0; i < adn.length; i++) {
    if (adn[i] === "G") {
      arn += "C";
    } else if (adn[i] === "C") {
      arn += "G";
    } else if (adn[i] === "T") {
      arn += "A";
    } else if (adn[i] === "A") {
      arn += "U";
    }
  }
  return arn;
}

// código de prueba 3
console.log(transcribir3("ACGT")); // "UGCA"
console.log(transcribir3("ACGTGGTCTTAA")); // "UGCACCAGAAUU"
