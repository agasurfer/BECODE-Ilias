let myBoard = document.querySelector(".board");

const restart = document.querySelector(".restart")

// CREATE THE BOARD CELLS

for (let i = 0; i < 9; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.setAttribute("data-index", i) 
    newCell.addEventListener("click", processCellClick);
    myBoard.appendChild(newCell);
}

// INITIALIZING FIRST PLAYER
const playerTracker = document.querySelector("p");
let currentPlayer = "X"; 
playerTracker.innerText = `Player ${currentPlayer}'s Turn`;

//WINNING COMBINATION

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];


// TRACKS WHO PLAYS WHAT  
let playedCells = ["" ,"", "", "", "", "", "", "", "",]

// FUNCTION TO PROCESS CLICKS
function processCellClick(event) {
    const clickedCell = event.target;
    const cellIndex = clickedCell.getAttribute('data-index');
    if (playedCells[cellIndex] !== "") {
        return;
} 
;
// MARK THE CELL BY PLAYER
clickedCell.innerText = currentPlayer
playedCells[cellIndex] = currentPlayer;

// SETS CLASSES FOR CELL COLOR BACKGROUND WHEN CLICKED
if (currentPlayer === "X") {
    clickedCell.classList.add("clickedX");
    myBoard.classList.add("clickedX");
} else if (currentPlayer === "O") {
    clickedCell.classList.add("clickedO");
    myBoard.classList.add("clickedO");
}

// WHAT HAPPENS NEXT
if (checkForWin()) {
    playerTracker.innerText = `${currentPlayer} Wins`  // IN CASE OF WIN
    playerTracker.style.fontSize = "10rem"
    disableBoard();
    return;
    
}
if (!playedCells.includes("")) {
    playerTracker.innerText = "It's a draw!";          // IN CASE OF DRAW
    playerTracker.style.fontSize = "6rem"
    return;
}

// IF NO END, PLAYER TOGGLE

currentPlayer = currentPlayer === "X" ? "O" : "X";  // USING BOOLEAN LOGIC TO TOGGLE
playerTracker.innerText = `Player ${currentPlayer}'s Turn`;

// SETS THE COLOR OF THE HOVER AND THE BOARD DEPENDING ON THE PLAYER

if (currentPlayer === "X") {
    document.documentElement.style.setProperty('--hover-color', 'rgb(227, 194, 95)'); // Hover color for Player X
    document.documentElement.style.setProperty("--box-shadow-color"," rgb(211, 176, 71) 0px 10px 12px, rgb(227, 194, 95) 0px 10px 5px" )
} else {
    document.documentElement.style.setProperty('--hover-color', 'rgb(15, 15, 183)'); // Hover color for Player O
    document.documentElement.style.setProperty("--box-shadow-color","rgb(35, 35, 160) 0px 10px 12px, rgb(35, 35, 160)  0px 10px 5px" )
}

}

//REFRESHING THE PAGE WHEN CLICKED
restart.addEventListener("click", () => {
    location.reload();
})

//FUNCTIONS

// CHECK FOR WIN FUNCTION
function checkForWin() {
    
    for (let i = 0; i < winCombinations.length; i++) {
        const [a, b, c] = winCombinations[i]; 
        
        if (playedCells[a] === currentPlayer && playedCells[b] === currentPlayer && playedCells[c] === currentPlayer) {
            return true; //  Winning combination is found
        }
    }
    return false; // No winning combination found
};

//FUNCTION TO DISABLE BOARD
function disableBoard() {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.removeEventListener('click', processCellClick);
    });
};