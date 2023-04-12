const guessAction = document.getElementById("guess-btn");
const enteredNum = document.getElementById("entered-num");
let choice = prompt("Please enter the largest number for the game");
let isNumber = /^\d+$/.test(choice);

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

  if (num === guess) {
    message.innerHTML = "You got it!";
  } else if (num < guess) {
    message.innerHTML = "No try a lower number";
  } else {
    message.innerHTML = "No try a higher number";
  }
}

guessAction.addEventListener("click", do_guess);
