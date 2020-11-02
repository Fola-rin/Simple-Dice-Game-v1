var Player1 = document.querySelectorAll("img")[0];
var Player2 = document.querySelectorAll("img")[1];
var playerDice = document.querySelector(".playerDice");
var winner = document.querySelector(".winner")
var randomNumber1;
var randomNumber2;

playerDice.addEventListener("click", function(e) {
    randomNumber1 = Math.floor((6 * Math.random())) + 1;
    randomNumber2 = Math.floor((6 * Math.random())) + 1;
    Player1.setAttribute("src", "images/dice" + randomNumber1 + ".png")
    Player2.setAttribute("src", "images/dice" + randomNumber2 + ".png")
    if (randomNumber1 > randomNumber2) {
    	winner.style.visibility = 'inherit';
        winner.textContent = "Player 1 wins! 🎉";
    } else if (randomNumber2 > randomNumber1) {
    	winner.style.visibility = 'inherit';
        winner.textContent = "Player 2 wins! 🎉";
    } else {
    	winner.style.visibility = 'inherit';
        winner.textContent = "Draw! 😔"
    }

    console.log(randomNumber1)
    console.log(randomNumber2)
})