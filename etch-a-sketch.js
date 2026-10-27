var drawMode = true;
var eraseMode = false;
var scratchMode = false;

function generateGrid(canvasSize) {

    var canvas= document.getElementById("canvas");
    canvas.innerHTML = "";

    for (let i = 0; i < canvasSize * canvasSize; i++) {
        canvas.appendChild(document.createElement("div")).classList.add("pixel");
    }

    for (let i = 0; i < canvasSize * canvasSize; i++) {
        var pixel = canvas.children[i];
        pixel.style.width = `${100 / canvasSize}%`;
        pixel.style.height = `${100 / canvasSize}%`;
    }
}

function updateSlider(value) {
    document.getElementById("sliderValue").textContent = value;
    generateGrid(value);
    clearCanvas();
}

function changeMode(mode) {

    if (mode === "draw") {
        drawMode = true;
        eraseMode = false;
        scratchMode = false;
    }
    else if (mode === "erase") {
        drawMode = false;
        eraseMode = true;
        scratchMode = false;
    }
    else if (mode === "scratch") {
        drawMode = false;
        eraseMode = false;
        scratchMode = true;
    }

    console.log(`Draw Mode: ${drawMode}, Erase Mode: ${eraseMode}, Scratch Mode: ${scratchMode}`);
}

function changePixel(colour) {

    if (drawMode) {
        this.style.backgroundColor = colour;
    }

    if (eraseMode) {
        this.style.backgroundColor = "white";
    }
    
    if (scratchMode) {
        this.style.backgroundColor = "transparent";
    }

}

function clearCanvas() {
    for (let element in document.getElementsByClassName("pixel")) {
        document.getElementsByClassName("pixel")[element].style.backgroundColor = "white";
    }
}