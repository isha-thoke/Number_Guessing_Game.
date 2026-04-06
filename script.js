let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  attempts++;

  if (guess === secretNumber) {
    document.getElementById("message").textContent =
      `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} attempts.`;
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "Too low! Try again.";
  } else {
    document.getElementById("message").textContent = "Too high! Try again.";
  }
}

function restartGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
}
