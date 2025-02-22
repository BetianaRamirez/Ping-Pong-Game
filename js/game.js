// Objeto para almacenar los puntos de los jugadores
const playersPoints = {
  paddle_player1: 0, // Puntos del jugador 1
  paddle_player2: 0, // Puntos del jugador 2
};
const MAX_POINTS = 5;

// Función para dibujar los puntos en el canvas
function drawPoints() {
  ctx.font = "30px monospace";
  ctx.fillStyle = "white";
  ctx.fillText(playersPoints.paddle_player1, 90, 50);

  ctx.fillText("Player 1", canvas.width / 2 - 195, canvas.height / 5);

  ctx.fillText(playersPoints.paddle_player2, canvas.width - 110, 50);

  ctx.fillText("Player 2", canvas.width / 1 - 160, canvas.height / 5);
}

// Función para verificar si el juego ha terminado
function checkGameOver() {
  if (playersPoints.paddle_player1 >= MAX_POINTS || playersPoints.paddle_player2 >= MAX_POINTS) {
    ctx.font = "30px monospace";
    ctx.fillStyle = "white";
    ctx.fillText("Game Over", canvas.width / 2 - 72, canvas.height / 2);
    // start at "C4"
    osc.frequency.value = "C4";
    // ramp to "C2" over 2 seconds
    osc.frequency.rampTo("C2", 2);
    // start the oscillator for 2 seconds
    osc.start().stop("+3");
    return true;
  }
  return false;
}