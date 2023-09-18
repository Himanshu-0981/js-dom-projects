const input = document.querySelector(".inputData");
const outputContainer = document.querySelector(".output-container");

function generateWord(num) {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text = "";
  for (let i = 0; i < num; i++) {
    const random = (Math.random() * 25).toFixed(0);
    text += letters[random];
  }
  return text;
}

function generateData() {
  let data = "";
  const newPara = document.createElement("p");
  let inputVal = input.value;

  for (let i = 0; i < inputVal; i++) {
    const randomVal = (Math.random() * 10).toFixed(0);
    data += generateWord(randomVal);
    data += "  ";
  }
  newPara.textContent = data;
  outputContainer.append(newPara);
}
