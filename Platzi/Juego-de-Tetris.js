//Juego piedra papel y tijera

const opcionesJug = ["tijeras", "papel", "piedra"];
const jug = opcionesJug[Math.floor(Math.random() * opcionesJug.length)];

const opcionesCpu = ["tijeras", "papel", "piedra"];
const cpu = opcionesCpu[Math.floor(Math.random() * opcionesCpu.length)];

function game(jugador, cpu) {
  if (jugador === cpu) {
    resultado = "¡Es un empate!";
  } else if (
    (jugador === "piedra" && cpu === "tijeras") ||
    (jugador === "papel" && cpu === "piedra") ||
    (jugador === "tijeras" && cpu === "papel")
  ) {
    resultado = `¡Ganaste! ${jugador} vence a ${cpu}.`;
  } else {
    resultado = `¡Perdiste! ${cpu} vence a ${jugador}.`;
  }

  console.log(resultado);
}

// Escoge entre "piedra", "papel", "tijeras":
//let selec = "papel";

// Llamar a la función con la selección del usuario y la selección aleatoria de la CPU
game(jug, cpu);
