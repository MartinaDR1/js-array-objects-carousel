//Array immagini
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//Seleziono elementi della DOM
const sliderEl = document.querySelector (`.slider`);
const btnNext = document.querySelector ('.next');
const btnPrev = document.querySelector ('.prev')
const playBtn = document.querySelector('.play')
const stopBtn = document.querySelector('.stop')
const invertBtn = document.querySelector('.invert')
const thumbEl = document.querySelector('.box')

let activeImage= 0

// Ciclo e faccio apparire l'immagine con classe active
images.forEach((image,i) => {
    sliderEl.innerHTML += `<div class="images text-center m-1 ${i === activeImage ? `active` : ``}">
                <h2 class="color">${image.title}</h2>
                <img src="./assets/${image.image}" alt="">
                <p class="mt-2 ">${image.text}</p>
            </div>`

    // Markup Thumbnails
    const markupThumb = `<img src="./assets/${image.image}" alt="" class="${i === activeImage ? 'active' : ''}">`
    thumbEl.innerHTML += markupThumb
});

//Seleziono tutte le immagini 
const allImages = document.querySelectorAll ('.images');
console.log(allImages);


//Autoplay
const autoplay = setInterval(next,3000)

//Se entro con il mouse all'interno del container...
sliderEl.addEventListener('mouseenter',function(){
    clearInterval(autoplay)
})

//Se esco...
sliderEl.addEventListener('mouseleave',function(){
    setInterval(next,3000)
})

//Attivo i bottini
//Next
btnNext.addEventListener('click', function(){
    console.log('click');
    
    next ()

})

//Prev
btnPrev.addEventListener('click', function(){
    console.log('click');
    
    prev()
})

//invert
invertBtn.addEventListener('click', function(){
    console.log('click');
    clearInterval(autoplay)
    setInterval(prev,3000)
})

//Pause
stopBtn.addEventListener('click', function(){
    console.log('click');
    clearInterval(autoplay)
})

//Play
playBtn.addEventListener('click', function(){
    console.log('click');
    setInterval(prev,3000)
})


function next(){
    // Seleziono l'immagine attiva
    const currentImg = allImages[activeImage];

    // Rimuovo l'active
    currentImg.classList.remove('active')
   
    //Loop per le immagini
    if (activeImage === images.length - 1) {
        activeImage = 0
    } else {
        activeImage++
    }

    //Selezione l'immagine successiva
    const nextImg = allImages[activeImage];
   
    nextImg.classList.add('active');  

    //Seleziono l'immagine attiva della thumb
    const currentThumb = document.querySelector('.box > img.active');

    //Rimuovo l'active
    currentThumb.classList.remove('active')

    //Seleziono l'immagine successiva
    const nextThumb = document.querySelectorAll('.box > img') [activeImage];

    //Le assegno la classe active
    nextThumb.classList.add('active')

}

function prev (){
        
    // Seleziono l'immagine attiva
    const currentImg = allImages[activeImage];

    // Rimuovo l'active
    currentImg.classList.remove('active')
       
    //Loop per le immagini
    if (activeImage === 0) {
        activeImage = images.length - 1
    } else {
        activeImage--
    }
    
    //Selezione l'immagine successiva
    const nextImg = allImages[activeImage];
       
    nextImg.classList.add('active');  
    
    //Seleziono l'immagine attiva della thumb
    const currentThumb = document.querySelector('.box > img.active');

    //Rimuovo l'active
    currentThumb.classList.remove('active')

    //Seleziono l'immagine successiva
    const nextThumb = document.querySelectorAll('.box > img') [activeImage];

    //Le assegno la classe active
    nextThumb.classList.add('active')
}



/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/