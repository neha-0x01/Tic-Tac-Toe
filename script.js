
console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"; 



// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for win (you can complete this later)
const checkWin = () => {
  let wins = [
    []
  ]
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext'); 
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
    boxtext.innerText = turn;
    new Audio("ting.mp3").play();  
    checkWin();
    turn = changeTurn();
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
}

    })
})
