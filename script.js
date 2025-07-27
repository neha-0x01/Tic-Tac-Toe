console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let btn = "X";

// function to change the turn

const changeTurn = () =>{
    return turn === "X"?"0": "X"
}

// function to check  for a win
const checkWin = ()=>{

}


//game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(elemnet =>{
     let boxtext = document.querySelector('.boxtext')
})