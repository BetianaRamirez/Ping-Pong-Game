// Crear un sintetizador para el sonido de las paletas
const synth = new Tone.Synth().toDestination(); // Sonido de las paletas

// Crear un sintetizador para el sonido de las paletas
const player = new Tone.Player(
  "https://tonejs.github.io/audio/berklee/gong_1.mp3").toDestination(); // sonido de colision contra las paredes

// Crear un oscilador para el sonido de fin del juego
const osc = new Tone.Oscillator().toDestination(); //Sonido de fin del Juego
