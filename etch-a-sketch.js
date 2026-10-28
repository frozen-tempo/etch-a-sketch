var mode = null;
var colour = "black";
var activePen = false;

function generateGrid(canvasSize) {

    var canvas= document.getElementById("canvas");
    canvas.innerHTML = "";

    canvas.addEventListener("mousedown", (event) => { event.preventDefault(); activePen = true; });
    canvas.addEventListener("mouseup", (event) => { event.preventDefault(); activePen = false; });

    for (let i = 0; i < canvasSize * canvasSize; i++) {
        canvas.appendChild(document.createElement("div")).classList.add("pixel");
    }

    for (let i = 0; i < canvasSize * canvasSize; i++) {
        var pixel = canvas.children[i];
        pixel.style.width = `${100 / canvasSize}%`;
        pixel.style.height = `${100 / canvasSize}%`;
        pixel.addEventListener("mouseover", changePixel);
    }
}

function changeColour(value) {
    colour = value;
    console.log(`Colour changed to: ${colour}`);
}

function changeMode(newMode) {
    mode = newMode;
    console.log(`Mode changed to: ${mode}`);
}

function updateSlider(value) {
    document.getElementById("sliderValue").textContent = value;
    generateGrid(value);
    clearCanvas();
}

function changePixel() {

    if (activePen != true) return;

    if (mode === "draw") {
        this.style.backgroundColor = colour;
    }

    if (mode === "erase") {
        this.style.backgroundColor = "white";
    }
    
    if (mode === "scratch") {
        this.style.backgroundColor = "transparent";
    }
}

function clearCanvas() {
    for (let element in document.getElementsByClassName("pixel")) {
        document.getElementsByClassName("pixel")[element].style.backgroundColor = "white";
    }
}