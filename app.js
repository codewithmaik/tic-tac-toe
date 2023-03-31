const gameboard = document.querySelector("#gameboard");
const info = document.querySelector("#info");

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
    })
}