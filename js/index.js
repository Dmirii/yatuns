import {radioPlayerInit} from './radioplayer.js';
import {videoPlayerInit} from './videoplayer.js';
import {musicPlayerInit} from './musicplayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


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


radioPlayerInit();
musicPlayerInit();
videoPlayerInit();