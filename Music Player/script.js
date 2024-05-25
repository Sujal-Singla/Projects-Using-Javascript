let progress = document.querySelector('#progress');
let song = document.querySelector('audio');
let control = document.querySelector('.fa-play');
let controls = document.querySelector('.fa-sliders');
let start = document.querySelector('.starting')
let end = document.querySelector('.ending');
let image = document.querySelector('img')
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
function playPause(){
    if(control.classList.contains("fa-pause")){
        song.pause();
        control.classList.remove("fa-pause");
        control.classList.add("fa-play");
        image.classList.remove('rotate')
      
    }else{
        song.play();
        control.classList.add("fa-pause");
        control.classList.remove("fa-play");
        image.classList.add('rotate');

    }
}
if(song.play)
    setInterval(() => {
        const current = Math.round(song.currentTime);
        start.innerHTML = formatTime(current);
        progress.value = song.currentTime;
    }, 400);

    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        control.classList.add("fa-pause");
        control.classList.remove("fa-play");
    }

    song.addEventListener('loadedmetadata', function(){
        end.innerHTML = Math.floor(song.duration/ 60 *100) / 100;
    }) 
    function formatTime(a){
        const min = Math.floor(a  / 60);
        const seconds = Math.round(a % 60);
        return  `${min}:${seconds < 10 ? '0': ''}${seconds}`;
    }
    console.log(song.controls);

 
     