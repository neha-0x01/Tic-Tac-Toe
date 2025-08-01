
console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"; 
let isgameover = false;



// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for win (you can complete this later)


const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach(e => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";

      // Correct line style
      const line = document.querySelector(".line");
      line.style.width = "20vw";
      line.style.top = `${e[4]}vw`;
      line.style.left = `${e[3]}vw`;
      line.style.transform = `rotate(${e[5]}deg)`;
    }
  });
};


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
    if(!isgameover){
       document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
   
}

    })
})


//Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
       isgameover = false
        document.querySelector('.line').style.width = "0vw"
       document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})