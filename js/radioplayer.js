export const radioPlayerInit = () => {
    console.log('rdaio init');
    const radio= document.querySelector('.radio');
    const radioItems= document.querySelectorAll('.radio-item');
    const radioStop= document.querySelector('.radio-stop');
    const radioCoverImg= document.querySelector('.radio-cover__img');
    const radioNavigation= document.querySelector('.radio-navigation');
    const radioHeader= document.querySelector('.radio-header__big');

    const audio = new Audio();
    audio.type = 'audio/acc';

    radioStop.disabled = true;
    const changeIconPlay = () =>{
        if(audio.paused){
            radio.classList.remove('play');
            radioStop.classList.add('fa-play');
            radioStop.classList.remove('fa-stop');
        } else{
            radio.classList.add('play');
            radioStop.classList.remove('fa-play');
            radioStop.classList.add('fa-stop');
        }
    };
    const selectItem = elem =>{
        radioItems.forEach( item => item.classList.remove('select'));
        elem.classList.add('select');
    };

    radioNavigation.addEventListener('change', event => {
        const target = event.target;
        const parrent = target.closest('.radio-item');  
        const title = parrent.querySelector('.radio-name').textContent;
        const img =parrent.querySelector('.radio-img').src;

        audio.src= target.dataset.radioStantion;
        selectItem(parrent);
       
        radioHeader.textContent = title;
        radioCoverImg.src=  img;     

        audio.play();
        radioStop.disabled = false;
        changeIconPlay();
    })
    radioStop.addEventListener('click', () =>{
        if(audio.paused){
            audio.play();
        }else {
            audio.pause();
        }
        changeIconPlay();

    })


    
}

