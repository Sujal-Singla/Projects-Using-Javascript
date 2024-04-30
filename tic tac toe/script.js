console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let isGameover = false;
let turn = "X";


const changeturn = ()=>{
 return turn === "X"?"0":"X";
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach (e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&( boxtexts[e[2]].innerText === boxtexts[e[1]].innerText )&& (boxtexts[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won"
            isGameover =true;
            gameOver.play();
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px"
        }
     })
}

// Game Logic
// music.play();
let boxes =  document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxText");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
           turn =  changeturn();
            audioTurn.play();
            checkWin();
            if(!isGameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})
let reset = document.querySelector("#reset");
  reset.addEventListener("click", ()=>{
  let  boxtexts = document.querySelectorAll(".boxText");
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isGameover = false;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px"
   document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})