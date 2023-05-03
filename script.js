"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("Not a Number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score * 5;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess !== secretNumber) {
    if (score > 1)
      displayMessage(guess > secretNumber ? "Too Hige!" : "Too Low!");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage("GAME OVER!");
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#e00909";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = document.querySelector(
    ".number"
  ).textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
