function generateGrid(canvasSize) {

    var canvas= document.getElementById("canvas");
    canvas.innerHTML = "";

    for (let i = 0; i < canvasSize * canvasSize; i++) {
        canvas.appendChild(document.createElement("div")).classList.add("pixel");
    }

    for (let i = 0; i < canvasSize * canvasSize; i++) {
        canvas.children[i].style.width = `${100 / canvasSize}%`;
        canvas.children[i].style.height = `${100 / canvasSize}%`;
    }
}

function updateSlider(value) {
    document.getElementById("sliderValue").textContent = value;
    generateGrid(value);
    clearCanvas();
}

function clearCanvas() {
    for (let element in document.getElementsByClassName("pixel")) {
        document.getElementsByClassName("pixel")[element].style.backgroundColor = "white";
    }
}