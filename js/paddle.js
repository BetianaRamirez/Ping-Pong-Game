// Clase que representa una paleta en el juego
class Paddle {
  // Constructor que inicializa las propiedades de la paleta
  constructor(x, y, width, height, color, speed) {
    this.x = x; // Posición horizontal inicial de la paleta
    this.y = y; // Posición vertical inicial de la paleta
    this.width = width; // Ancho de la paleta
    this.height = height; // Altura de la paleta
    this.color = color; // Color de la paleta
    this.speed = speed; // Velocidad de movimiento de la paleta
    this.initialX = x;  // Posición horizontal inicial (para reiniciar)
    this.initialY = y;  // Posición vertical inicial (para reiniciar)
  }
  // Método para dibujar la paleta en el canvas
  draw() {
    ctx.fillStyle = this.color; // Establece el color de relleno
    ctx.fillRect(this.x, this.y, this.width, this.height);  // Dibuja un rectángulo que representa la paleta
  }
  // Método para mover la paleta hacia arriba
  moveUp() {
    this.y -= this.speed; // Disminuye la posición vertical de la paleta
  }
   // Método para mover la paleta hacia abajo
  moveDown() {
    this.y += this.speed; // Aumenta la posición vertical de la paleta
  }
  // Método para verificar colisiones con los bordes del canvas
  checkCollision() {
    if (this.y < 0) {
      this.y = 0; // Evita que la paleta se mueva a fuera del borde superior
    } else if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height; // Evita que la paleta se mueva a fuera del borde inferior
    }
  }
  // Método para reiniciar la posición de la paleta
  resetPosition() {
    this.x = this.initialX; // Restablece la posición horizontal inicial
    this.y = this.initialY; // Restablece la posición vertical inicial
  }
}

// Crear instancias de Paddle para los jugadores
const paddle_player1 = new Paddle(10, canvas.height / 2 - 30, 10, 60, "#fb2e01", 10); // Paleta roja del jugador 1. Aumenté en 10 la velocidad de la paleta roja
const paddle_player2 = new Paddle(canvas.width - 20, canvas.height / 2 - 30, 10, 60, "#6fcb9f", 10); // Paleta verde del jugador 2

// Eventos para controlar las paletas con el mouse y el teclado
canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  const mouseY = event.clientY - rect.top;
  paddle_player2.y = mouseY - paddle_player2.height / 2;  // Mueve la paleta del jugador 2 según la posición del ratón.
});

document.querySelector('body').addEventListener('keydown', (event) => {
  if(event.key ==="ArrowUp") {
    paddle_player1.moveUp();  // Mueve la paleta del jugador 1 hacia arriba
  }
  if(event.key ==="ArrowDown") {
    paddle_player1.moveDown();  // Mueve la paleta del jugador 1 hacia abajo
  }
});