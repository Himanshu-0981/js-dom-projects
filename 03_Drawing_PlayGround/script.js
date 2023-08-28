// getting reference
const canvas = document.getElementById("drawingCanvas");
const context = canvas.getContext("2d");

// boolean
let drawing = false;

// canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// event listener
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);

function startDrawing(event) {
  drawing = true;
  draw(event);
}

function stopDrawing() {
  drawing = false;
  context.beginPath();
}

function draw(event) {
  if (!drawing) {
    return;
  } else {
    context.lineWidth = 10;
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
    context.beginPath();
    context.moveTo(event.clientX, event.clientY);
  }
}