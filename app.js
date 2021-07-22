// DRY => Don't repeat yourself
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const bodyBackgroundColor = function (color) {
  document.querySelector("body").style.backgroundColor = color;
};
const displayScore = function (score) {
  document.querySelector("#score").textContent = score;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};
const displayHighscore = function (highScore) {
  document.querySelector("#high-score").textContent = highScore;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let totalScore = 20;
let highScoreValue = 0;
let resetButton = document.querySelector("#reset");
let checkButton = document.querySelector("#check");
let guessNum = document.querySelector("#guess");
displayScore(totalScore);

alert("By: Ahmadreza Mozaffary");

//Check Button
checkButton.addEventListener("click", () => {
  let value = Number(guessNum.value);
  if (secretNumber === value) {
    displayMessage("🎉 Winner");
    bodyBackgroundColor("green");
    displaySecretNumber(secretNumber);
    if (totalScore > highScoreValue) {
      highScoreValue = totalScore;
      displayHighscore(highScoreValue);
    }
  } else if (secretNumber !== value) {
    displayMessage(value > secretNumber ? "📈 too High !" : "📉 too low !");
    totalScore--;
    displayScore(totalScore);
    if (totalScore < 1) {
      displayMessage("🥲 Lose");
      bodyBackgroundColor("red");
      displayScore(0);
      displaySecretNumber(secretNumber);
    }
  }
});

//Reset ‌Button
resetButton.addEventListener("click", () => {
  totalScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Welcome back!");
  bodyBackgroundColor("");
  displayScore(totalScore);
  displaySecretNumber("?");
  guessNum.value = "";
});

// 210 line of code
// Refactored If & else bolcks
