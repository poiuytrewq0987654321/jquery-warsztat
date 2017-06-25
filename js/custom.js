'use strict';

//console.log($('p').text());

$(function(){
    /* zmienne */
    var slideCount = $('.single-slide').length;
    var SlideShow = $('.slide-show');
    
    /* automatyczna szerokosc elementu w zaleznosci od ilosci elementow w srodku */
    SlideShow.css('width',slideCount * 100 +'%');
    
    console.log(slideCount);
});


szerokosc pojedynczego slajdu (100% / na ilosc slajdow)
przypisac odpowiednia szerokosc dla kazdego slajdu