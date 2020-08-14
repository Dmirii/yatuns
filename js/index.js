import {radioPlayerInit} from './radioplayer.js';
import {videoPlayerInit} from './videoplayer.js';
import {musicPlayerInit} from './musicplayer.js';

// let lastfm = new LastFM({
// 	apiKey    : '16bbc846e3cc5f7898ac7dbc426b39d7',
// 	apiSecret : '0a565dcf333a2c3450ee110ec4a85a62'
// });
// const token= 'qKYTbqi6_rXAGS2SHqcP69r-xw0tzDs0';
// let sk ='';
// let ts = Math.floor(new Date().getTime()/1000); 

// lastfm.auth.getSession({token: token}, {success: function(data){
// 	console.log("Привет, "+data.session.name+"!\n\rРад тебя видеть, твою ключ сессии "+data.session.key); // Для видимости
// 	sk = data.session.key; // В раннее созданную переменную записываем ключ сессии. 
// }, error: function(code, message){
// 	if (code == 4)
// 		console.log("Токен умер. Щелкни снова авторизацию");
// }});


// lastfm.track.scrobble({artist: "Linkin Park", track: "Numb", timestamp: ts}, {key: sk}, {success: function(data){
// console.log("Всё получилось!");
// }, error: function(code, message){
// 	alert("Ничего не получилось...");
// }});

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');



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


