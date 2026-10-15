function generateGrid(canvasSize) {
    for (let i = 0; i < canvasSize * canvasSize; i++) {
        document.getElementById("canvas").appendChild(document.createElement("div")).classList.add("pixel");
    }
}

