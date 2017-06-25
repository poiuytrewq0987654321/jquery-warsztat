'use strict';

//console.log($('p').text());

$(function(){
    /* zmienne */
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100/slideCount;
    
    /* automatyczna szerokosc elementu w zaleznosci od ilosci elementow w srodku */
    slideShow.css('width',slideCount * 100 +'%');
    console.log(slideCount);
    
    /* szerokosc i położenie pojedynczego slajdu */
    
    $('.single-slide').each(function(index){
        $(this).css({'width': slideWidth + '%','margin-left':index * slideWidth + '%'});
    })
    
});
