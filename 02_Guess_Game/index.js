const inputField = document.querySelector("#input");
const submitBtn = document.querySelector("#submit-btn");
const prevGuess = document.querySelector(".prev-guess");
const remainGuess = document.querySelector(".remain-guess");
const results = document.querySelector(".results");

let random = Math.floor(Math.random() * 100 + 1);
let prevGuessArray = [];
let remainingGuess = 10;
let currGuess = 0;
let gameInit = true;
let para = document.createElement("p");
let startBtn = document.createElement("div");

if (gameInit) {
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();

    const inputVal = parseInt(inputField.value);
    if (inputField.value === "") {
      displayMessage("Input field is empty");
    } else if (isNaN(inputVal)) {
      displayMessage("Enter valid number");
    } else if (inputVal < 1) {
      displayMessage("number must should be between 1 and 100");
      currGuess;
      remainGuess;
    } else {
      currGuess++;
      remainingGuess--;
      remainGuess.innerHTML = remainingGuess;
      validGuess(inputVal);
      cleanUpMethod();
      if (currGuess === 10 && remainingGuess === 0) {
        submitBtn.setAttribute("disabled", "");
        displayMessage(`You Lost ☹️ correct number was ${random}`);
        gameEnd();
      }
    }
  });
}

function validGuess(guess) {
  if (guess > 100 || guess < 1) {
    displayMessage("number must should be between 1 and 100");
  } else if (guess > random) {
    displayMessage(`your guess is high`);
    prevGuessArray.push(guess);
    prevGuess.innerHTML = `${prevGuessArray}  `;
    console.log(prevGuessArray);
  } else if (guess < random) {
    prevGuessArray.push(guess);
    prevGuess.innerHTML = `${prevGuessArray} `;
    console.log(prevGuessArray);
    displayMessage(`your guess is low`);
  } else if (guess === random) {
    displayMessage(`Congrats ! you choose correct number`);
    gameEnd();
  } else return;
}

function cleanUpMethod() {
  inputField.value = "";
}

function displayMessage(msg) {
  para.innerHTML = msg;
  results.prepend(para);
}
function gameEnd() {
  startBtn.innerHTML = `Start new game`;
  startBtn.classList.add("startNewGameBtn");
  startBtn.setAttribute("onclick", "window.location.reload()");
  results.append(startBtn);
  gameInit = false;
}
