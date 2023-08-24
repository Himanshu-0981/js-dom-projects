function randomQuote() {
  return "Hey there myself himanshu kumar tiwari and i am from daltongaj jharkhand today in this article i will show you how to make yt videos";
}

let timer = document.getElementById("timer");
let quoteContent = document.getElementById("quoteContent");
let inputField = document.getElementById("textArea");

function init() {
  const quote = randomQuote();
  quoteContent.innerText = "";
  quote.split("").forEach((character) => {
    let characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteContent.appendChild(characterSpan);
  });
  startTimer();
}

inputField.addEventListener("input", () => {
  const arrayQuote = quoteContent.querySelectorAll("span");
  const arrayValue = inputField.value.split("");
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
    }
  });
});

let time = 0;
function startTimer() {
  setInterval(() => {
    timer.innerText = time++;
  }, 1000);
}

init();
