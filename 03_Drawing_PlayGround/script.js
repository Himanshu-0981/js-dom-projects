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

// creating elem

const navDiv = document.createElement("nav");
const section = document.createElement("section");
const body = document.body;
body.prepend(navDiv);

navDiv.innerHTML = `
<section>
    <h3>GO BACK</h3>
    <h2>🖋️</h2>
    </section>
    <section>
    <h3>Undo</h3>
    <h3>Redo</h3>
</section>
`;

const navDivChildren = Array.from(navDiv.children);
navDivChildren.forEach((section) => section.setAttribute("style", "display: flex; align-items:center;"))


function styles() {
  navDiv.style.display = "flex";
  navDiv.style.justifyContent = "space-evenly";
  navDiv.style.backgroundColor = "grey";
  body.style.boxSizing = "border-box";
  body.style.padding = "0";
  body.style.margin = "0";
}

styles();
