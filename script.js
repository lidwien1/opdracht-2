var track = document.querySelector('.carousel_track');

//alle slides bij elkaar door children
var slides = Array.from(track.children);
var rButton = document.querySelector('.carousel_button--right');
var lButton = document.querySelector('.carousel_button--left');
var nav = document.querySelector('.carousel_nav');
var bolletje = Array.from(nav.children);


//wanneer ik links klik, naar links bewegen
//wanneer ik rechts klik, naar rechts bewegen

var slideWidth = slides[0].getBoundingClientRect().width;

//de slides naast elkaar zetten
var slidePosition = (slides, index) => {
    slides.style.left = slideWidth * index + 'px';
}

slides.forEach(slidePosition);

var moveToSlide = (track, huidigeSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    huidigeSlide.classList.remove('huidige-slide');
    targetSlide.classList.add('huidige-slide');
}


//wanneer ik rechts klik, naar rechts bewegen
rButton.addEventListener('click', e => {
    var huidigeSlide = track.querySelector('.huidige-slide');
    var volgendeSlide = huidigeSlide.nextElementSibling;
    var huidigeBol = nav.querySelector('.current-slide');
    var volgendeBol = huidigeBol.nextElementSibling;
    //var bewegen = volgendeSlide.style.left;
    //naar de volgende slide gaan
    //track.style.transform = 'translateX(-' + bewegen + ')';
    //huidigeSlide.classList.remove('huidige-slide');
    //volgendeSlide.classList.add('huidige-slide');

    moveToSlide(track, huidigeSlide, volgendeSlide);
});

//wanneer ik links klik, naar links bewegen
lButton.addEventListener('click', e => {
    var huidigeSlide = track.querySelector('.huidige-slide');
    var vorigeSlide = huidigeSlide.previousElementSibling;
    var huidigeBol = nav.querySelector('.current-slide');
    var vorigeBol = huidigeBol.previousElementSibling;
    
    moveToSlide(track, huidigeSlide, vorigeSlide);
    updateBol(huidigeBol, vorigeBol);
});

//bolletje mee laten bewegen
//op welk bolletje klik je?
nav.addEventListener('click', e => {
    var targetBol = e.target.closest('a');
    
    if (!targetBol) return;
    
    var huidigeSlide = track.querySelector('.huidige-slide');
    var huidigeBol = nav.querySelector('.huidige-slide');
    //op welk bolletje klik ik
    var targetIndex = bolletje.findIndex(bol => bol === targetBol);
    var targetSlide = slides[targetIndex];    

    moveToSlide(track, huidigeSlide, targetSlide);
    updateBol(huidigeBol,targetBol);
});





//Bron: https://www.youtube.com/watch?v=gBzsE0oieio