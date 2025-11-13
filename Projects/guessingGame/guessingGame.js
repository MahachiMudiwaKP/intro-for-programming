// Guessing Game JavaScript

// Generate random secret number between 1 and 20
// let secretNumber = Math.floor(Math.random() * 20) + 1;
// For testing: Set a fixed secret number
let secretNumber = 7; // Change this to any number between 1 and 20
let score = 20;
let highscore = 0;

// Get DOM elements
const gameLoop = document.getElementById('gameLoop');
const description = document.getElementById('description');
const gameIcon = document.getElementById('gameIcon');

// Game functionality
console.log('Guessing Game Loaded!');
// console.log('Secret Number:', secretNumber); // For testing - remove in production

// Function to check the guess
function checkGuess() {
  const guessInput = document.querySelector('input[type="number"]');
  const guess = Number(guessInput.value);

  // Check if input is empty
  if (!guess || guess < 1 || guess > 20) {
    alert('⛔ Please enter a valid number between 1 and 20!');
    return;
  }

  // Clear the input after guess
  guessInput.value = '';

  // Check if guess is correct
  if (guess === secretNumber) {
    alert('🎉 Correct! You guessed the secret number!');
    if (score > highscore) {
      highscore = score;
      alert(`🎊 New highscore of ${highscore}!`);
    }
    return; // End the game on correct guess
  }

  // Wrong guess
  let message;
  if (guess > secretNumber) {
    message = '📈 Too high!';
  } else {
    message = '📉 Too low!';
  }
  alert(message + ' Try again.');

  // Decrement score on wrong guess
  score--;
  if (score <= 0) {
    alert(`💥 Game Over! You lost. The secret number was ${secretNumber}`);
    return; // End the game
  }
}

// Add event listener if there's a check button
const checkButton = document.querySelector('button');
if (checkButton) {
  checkButton.addEventListener('click', checkGuess);
}

// Allow Enter key to submit guess
const guessInput = document.querySelector('input[type="number"]');
if (guessInput) {
  guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkGuess();
    }
  });
}