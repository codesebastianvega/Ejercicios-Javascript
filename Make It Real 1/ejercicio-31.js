//Escribe una función llamada crearRango que reciba dos números y retorne 
//un arreglo con los números desde el primer números hasta el segundo (incluyéndolo):

//console.log(crearRango(1, 3)); // [1, 2, 3]
//crearRango(5, 10); // [5, 6, 7, 8, 9, 10]
//crearRango(0, 0); // [0]

//Nota: Puedes asumir que siempre el primer número va a ser menor o igual que el segundo.

const crearRango = (num1,num2) => {
    let arr = []
    for(i = num1; i <= num2; i++) {
        arr.push(i)
    }
    return arr
}

console.log(crearRango(1, 3))