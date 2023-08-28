let timer = document.getElementById("timer");
let quoteContent = document.getElementById("quoteContent");
let inputField = document.getElementById("textArea");

let time = 0;
const BASE_URL = "http://api.quotable.io/random";

async function randomQuote() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return await data.content;
  } catch (error) {
    (quoteContent.innerHTML = "Error : "), error;
  }
}

async function init() {
  const quote = await randomQuote();
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

  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });
  if (correct) {
    init();
    setTimeout(() => {
      inputField.value = "";
    }, 400);
  }
});

function startTimer() {
  timer.innerHTML = 0;
  time = new Date();
  setInterval(() => {
    timer.innerHTML = getTimerTime();
  }, 1000);
}

function getTimerTime() {
  return Math.floor((new Date() - time) / 1000);
}

init();
