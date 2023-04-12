const guessAction = document.getElementById("guess-btn")
let num = Math.floor(Math.random() * 20) +1;

function do_guess() {
    let guess = Number(document.getElementById("guess").value)
    let message = document.getElementById("message")

    if (num === guess) {
        message.innerHTML = "You got it!"

    }else if (num < guess) {
        message.innerHTML = "No try a lower number"
    }else {
        message.innerHTML = "No try a higher number"
    }
}

guessAction.addEventListener("click", do_guess)