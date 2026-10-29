const MAX_NUMBER = 100;
const MAX_TRIES = 7;

let secretNumber;
let triesLeft;
let guesses;
let gameOver;

const messageEl = document.getElementById("message");
const inputEl = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const triesEl = document.getElementById("tries-left");
const historyEl = document.getElementById("history");
const restartBtn = document.getElementById("restart-btn");
const modVal = document.getElementById("mod-val");
const modBtn = document.getElementById("mod");

function startGame() {
  secretNumber = Math.floor(Math.random() * MAX_NUMBER) + 1;
  triesLeft = MAX_TRIES;
  guesses = [];
  gameOver = false;

  messageEl.textContent = "";
  messageEl.className = "message";
  inputEl.value = "";
  inputEl.disabled = false;
  guessBtn.disabled = false;
  restartBtn.classList.add("hidden");
  triesEl.textContent = triesLeft;
  historyEl.textContent = "";
  inputEl.focus();
}

startGame();

function showMessage(text, type) {
  messageEl.textContent = text;
  messageEl.className = "message " + type;
}

function endGame() {
  gameOver = true;
  inputEl.disabled = true;
  guessBtn.disabled = true;
  restartBtn.classList.remove("hidden");
}

function checkGuess(num) {
  if (gameOver) return;

  const guess = parseInt(inputEl.value, 10);

  if (isNaN(guess) || guess < 1 || guess > MAX_NUMBER) {
    showMessage(`Enter a whole number from 1 to ${MAX_NUMBER}.`, "wrong");
    return;
  }

  if (guesses.includes(guess)) {
    showMessage(`You already tried ${guess}.`, "wrong");
    return;
  }

  guesses.push(guess);
  triesLeft--;
  triesEl.textContent = triesLeft;
  historyEl.textContent = guesses.join(", ");
  inputEl.value = "";

  if (guess === secretNumber) {
    showMessage(`You got it! ${secretNumber} in ${guesses.length} tries.`, "win");
    endGame();
  } else if (triesLeft === 0) {
    showMessage(`Out of tries. The number was ${secretNumber}.`, "wrong");
    endGame();
  } else if (guess > secretNumber) {
    showMessage(`${guess} is too high.`, "wrong");
  } else {
    showMessage(`${guess} is too low.`, "wrong");
  }

  if (!gameOver) inputEl.focus();
}

function mod() {
  let l = 1, h = MAX_NUMBER;
  const steps = [];

  while (l <= h) {
    const mid = Math.floor((l + h) / 2);
    steps.push(mid);
    if (mid === secretNumber) break;
    if (mid < secretNumber) l = mid + 1;
    else h = mid - 1;
  }

  modVal.textContent = `${steps.join(" → ")} (found in ${steps.length} steps)`;
}

guessBtn.addEventListener("click", checkGuess);

inputEl.addEventListener("keydown", function(e) {
  if(e.key === "Enter") checkGuess();
});

restartBtn.addEventListener("click", startGame);

modBtn.addEventListener("click", mod);

startGame();
