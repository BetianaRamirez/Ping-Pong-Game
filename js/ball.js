// Objeto para representar la bola del juego
const ball = {
  x: 100, // Posición horizontal inicial de la bola
  y: 50, // Posición vertical inicial de la bola
  dx: 2, // Velocidad horizontal de la bola
  dy: 2, // Velocidad vertical de la bola
  radius: 6, // Radio de la bola
  color: "#FFFFFF", // Color de la bola

  // Método para dibujar la bola en el canvas
  draw: function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
  },
  // Método para actualizar la posición de la bola
  updatePosition: function () {
    this.x += this.dx;
    this.y += this.dy;
    this.checkCollision();
    this.checkCollisionWithPaddle();
  },
  // Método para verificar colisiones con las paredes
  checkCollision: function () {
    //Colision con la pared dereha
    if (this.x + this.radius > canvas.width) {
      playersPoints.paddle_player1++;
      this.reverseDirection("x");

      Tone.loaded().then(() => {
        player.start();
      });
    }
    //Colision de la pared izquierda
    if (this.x - this.radius < 0) {
      playersPoints.paddle_player2++;
      this.reverseDirection("x");

      Tone.loaded().then(() => {
        player.start();
      });
    }

    //Colision con la pared de arriba o abajo
    if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
      this.reverseDirection("y");
    }
  },
  // Método para verificar colisiones con las paletas
  checkCollisionWithPaddle: function () {
    if (
      this.x + this.radius > paddle_player2.x &&
      this.y > paddle_player2.y &&
      this.y < paddle_player2.y + paddle_player2.height
    ) {
      this.reverseDirection("x");

      synth.triggerAttackRelease("C4", "8n");
    }
    if (
      this.x - this.radius < paddle_player1.x + paddle_player1.width &&
      this.y > paddle_player1.y &&
      this.y < paddle_player1.y + paddle_player1.height
    ) {
      this.reverseDirection("x");

      synth.triggerAttackRelease("D4", "8n");
    }
  },
  // Método para invertir la dirección de la bola
  reverseDirection: function (axis) {
    if (axis === "x") {
      this.dx = -this.dx;
    } else if (axis === "y") {
      this.dy = -this.dy;
    }
  },
  // Método para reiniciar la posición de la bola
  resetPosition: function () {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.dx = 2; // Velocidad inicial en X
    this.dy = 2; // Velocidad inicial en Y
  },
};
