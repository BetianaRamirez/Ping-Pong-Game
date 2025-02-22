// Variables para controlar el estado del juego y los botones
let on = false;
const startButton = document.querySelector(".start-button");
const stopButton = document.querySelector(".stop-button");
const resetButton = document.querySelector(".restart-button");

// Función para dibujar el frame del juego
function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGridSystem(); // dibujar la cuadrícula
  ball.draw(); // dibujar la bola
  ball.updatePosition(); // actualizar la posición de la bola
  paddle_player1.draw(); // dibujar la paleta del jugador 1
  paddle_player2.draw(); // dibujar la paleta del jugador 2
  drawPoints();
  if (checkGameOver()) on = false;
}

// Bucle principal del juego
let gameInterval = setInterval(() => {
  if (on) drawFrame();
}, 1000 / 120);

// Evento para el botón de start
startButton.addEventListener("click", (e) => {
  on = true;
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;
});

// Evento para el botón de stop
stopButton.addEventListener("click", (e) => {
  on = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

// Evento para el botón de restart
resetButton.addEventListener("click", (e) => {
  on = false;
  ball.resetPosition(); // Reiniciar la posición de la bola
  paddle_player1.resetPosition(); // Reiniciar la posición de la paleta del jugador 1
  paddle_player2.resetPosition(); // Reiniciar la posición de la paleta del jugador 2
  playersPoints.paddle_player1 = 0; // Reiniciar puntos del jugador 1
  playersPoints.paddle_player2 = 0; // Reiniciar puntos del jugador 2
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar el canvas
  drawPoints(); // Dibujar los puntos reiniciados
  drawGridSystem(); // Dibujar la cuadrícula
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});
