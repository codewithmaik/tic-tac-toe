const gameBoard = document.querySelector("#gameboard");
const infoDisplay = document.querySelector("#info");

const startCells = [
    "", "", "", "", "", "", "", "", ""
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
        // create div for every element in the array
        const cellElement = document.createElement("div") 
        // add class '.square' to the element
        cellElement.classList.add("square")
        // call function addGo when clicked
        cellElement.addEventListener("click", addGo)
        // add div element to gameboard
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
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore() {
    // collect all squares
    const allSquares = document.querySelectorAll(".square")
    // define all winning combos
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    // check if the gameboard has a combo with 3 circles
    winningCombos.forEach(array => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("circle"))

            if (circleWins) {
                infoDisplay.textContent = "Circle wins!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    // check if the gameboard has a combo with 3 crosses
    winningCombos.forEach(array => {
        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains("cross"))

            if (crossWins) {
                infoDisplay.textContent = "Cross wins!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })
}