score = 0;
cross = true;


let audio = new Audio("gameover.mp3");
let audiogo = new Audio("music.mp3");
setTimeout(() => {
    audiogo.play();
}, 1000);
document.onkeydown = function(e){
    // console.log("Key code is :", e.key);
    if(e.key == "ArrowUp"){
        let dino = document.querySelector(".dino");
        dino.classList.add("animate-dino");
        setTimeout(() => {
            dino.classList.remove("animate-dino");
        }, 700);
    }
    else if(e.key == "ArrowRight"){
        let dino = document.querySelector(".dino");
       dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
       dino.style.left = dx +122 + "px";
       dino.style.transform = "rotatey(360deg)";
    }
    else if(e.key == "ArrowLeft"){
        let dino = document.querySelector(".dino");
       dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
       dino.style.left = dx- 122 + "px";
       dino.style.transform = "rotatey(180deg)";
    }
}

setInterval(() => {
    dino = document.querySelector(".dino");
    gameover =  document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");


    dx =  parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"));
    dy =  parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"));


    ox =  parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy =  parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));


    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);


    if(offsetx<73 && offsety<53){
        gameover.style.visibility = "visible";
        obstacle.classList.remove("obstacleAni");
        dino.classList.add("game");
        audio.play();
        audiogo.pause();
        setTimeout(() => {
            audio.pause();
        }, 1000);
       
    }else if(offsetx< 145 && cross){
        score+=1;
        scoreCount(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
       
      
    }
    
},100);
setInterval(() => {
    aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
    newDur = aniDur - 0.1;
    console.log(newDur);
    obstacle.style.animationDuration = newDur + "s";
    }, 10000);


function scoreCount(score){
let scorecnt = document.querySelector(".scoreCont");
    scorecnt.innerHTML = "your score is :" + score;
}