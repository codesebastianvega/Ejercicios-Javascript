/*Escribe una función llamada contrasena que reciba un string y retorne otro string realizando los siguientes cambios sobre el string de entrada:

Las mayúsculas se reemplazan por minúsculas.
Se eliminan los espacios en blanco.
Reemplaza el caracter "a" por "4".
Reemplaza el caracter "e" por "3".
Reemplaza el caracter "i" por "1".
Reemplaza el carater "o" por "0".
contrasena("hola"); // "h0l4"
contrasena("esta es una prueba"); // "3st43sun4pru3b4"
contrasena(""); // ""*/

const contrasena = (cadena) => {
    let clave = "";

    for(let i = 0; i < cadena.length; i++) {
        let letra = cadena[i].toLowerCase();

        if (letra === " ") {
            letra = "";
        } else if (clave === "a") {
            letra = 4;
        } else if (clave === "e") {
            letra = 3;
        } else if (clave === "i") {
            letra = 1;
        } else if (letra === "o") {
            letra = 0;
        }

        clave += letra
    }   

    return clave
}

console.log(contrasena("Hola mi amor day"))