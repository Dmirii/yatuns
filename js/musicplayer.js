export const musicPlayerInit = () => {
    console.log('music init');
    const audioButtonPlay = document.querySelector('.audio-button__play');
    const audioPlayer =document.querySelector('.audio-player');

    const audio = new Audio();
    audio.type = 'mp3';
    audio.src= audioPlayer.src;

    audioButtonPlay.addEventListener('click', event => {
        if(audio.paused){
            audio.play();
        }else {
            audio.pause();
        }
    })

}

