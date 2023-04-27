/*Escribe una función descifrar que reciba un string y un objeto. 
Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:

descifrar("h0l4", { 0: "o", 4: "a" }); // "hola"
descifrar("pyrmizo", { y: "e", z: "s" }); // "permiso"
descifrar("igual", { h: "n" }); // "igual" */


// objeto con las letras a descifrar
let frase = {
    0: "o",
    4: "a"
}

function descifrar (cadena, obj) {
    let resultado = cadena;

    for(const llave in obj) {
         resultado = resultado.split(llave).join(obj[llave])
    }

    return resultado

}

console.log(descifrar("h0l4", frase))
console.log(descifrar("pyrmizo", { y: "e", z: "s" }))
console.log(descifrar("igual", { h: "n" }))

