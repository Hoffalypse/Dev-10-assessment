const guessAction = document.getElementById("guess-btn");
const enteredNum = document.getElementById("entered-num");
let choice = prompt("Please enter the largest number for the game");
let isNumber = /^\d+$/.test(choice);
let allGuess = [];
let rounded = Math.round(choice);

if (rounded < 1 || isNumber === false) {
  alert("Please Enter a Positive Number");
  document.location.reload();
}
enteredNum.innerHTML = rounded;

let num = Math.floor(Math.random() * rounded) + 1;

function do_guess() {
  let guess = Number(document.getElementById("guess").value);
  let message = document.getElementById("message");

  for (let i = 0; i < allGuess.length; i++) {
    if (guess === allGuess[i]) {
      message.innerHTML = "That number has already been guessed, try again.";
      return;
    }
  }

  if (guess < 1 || guess > rounded) {
    message.innerHTML = "That number is not in range, try again.";
  } else if (num === guess) {
    allGuess.push(guess);
    message.innerHTML = `You got it! It took you ${allGuess.length} tries and your guesses were ${allGuess.join(", ")}.`;
  } else if (num < guess) {
    allGuess.push(guess);
    message.innerHTML = "No try a lower number";
  } else if (num > guess) {
    allGuess.push(guess);
    message.innerHTML = "No try a higher number";
  } else {
    message.innerHTML = "That is not a number!";
  }
}

guessAction.addEventListener("click", do_guess);
