import {radioPlayerInit} from './radioplayer.js';
import {videoPlayerInit} from './videoplayer.js';
import {musicPlayerInit} from './musicplayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

const videoPlayer = document.querySelector('.video-player');
const videoButtonPlay = document.querySelector('.video-button__play');
const videoButtonStop = document.querySelector('.video-button__stop');
const videoTimePassed = document.querySelector('.video-time__passed');
const videoProgress = document.querySelector('.video-progress');
const videoTimeTotal = document.querySelector('.video-time__total');

radioPlayerInit();
musicPlayerInit();
videoPlayerInit();

//
// close all tabs
function deactivationPlayers() {    
    temp.style.display = 'none';
    playerBlock.forEach(item => item.classList.remove('active'));
    playerBtn.forEach(item => item.classList.remove('active'));
}

//
// addEvent to btn
playerBtn.forEach( (btn,index) => {
    btn.addEventListener('click',() => {
        deactivationPlayers()
        btn.classList.add('active');
        playerBlock[index].classList.add('active');
    })
})
//
// 
const toggleIcon = () => {
    if(videoPlayer.paused){
        videoButtonPlay.classList.remove('fa-pause');
        videoButtonPlay.classList.add('fa-play');

    } else {
        videoButtonPlay.classList.add('fa-pause');
        videoButtonPlay.classList.remove('fa-play');
    }

}
const togglePlay = () => {
    if(videoPlayer.paused){
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

const stopPlay = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}
const addZero = n =>  n <10 ? '0' + n : n;

videoPlayer.addEventListener('click', togglePlay);
videoButtonPlay.addEventListener('click', togglePlay);
videoPlayer.addEventListener('play',toggleIcon);
videoPlayer.addEventListener('pause',toggleIcon);
videoButtonStop.addEventListener('click', stopPlay);
videoPlayer.addEventListener('timeupdate', () =>{
    videoProgress.value = (currentTime/duration) * 100;
    const currentTime = videoPlayer.currentTime;
    const duration = videoPlayer.duration;
    let minuetPassed = Math.floor(currentTime/60);
    let secondsPassed = Math.floor(currentTime % 60 );
    let minuetTotal = Math.floor(duration/60);
    let secondsTotal = Math.floor(duration % 60 );
    videoTimePassed.textContent = addZero(minuetPassed) + ':'+ addZero(secondsPassed);
    videoTimeTotal.textContent = addZero(minuetTotal)+ ':'+ addZero(secondsTotal);
})

videoProgress.addEventListener('change', () => {
    const duration = videoPlayer.duration;
    const value = videoProgress.value;
    videoPlayer.currentTime = (value * duration) /100;

})

