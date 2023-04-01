const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()

function addGo(e) {
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = `it is now ${go}'s turn.`
    e.target.removeEventlistener("click", addGo)
}