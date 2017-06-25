'use strict';

//console.log($('p').text());

$(function () {
    /* zmienne */
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    /* funkcja slide */
    function slide(newSlideIndex) {

        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        slideShow.animate({
            'margin-left': marginLeft
        }, 500, function () {
            slideIndex = newSlideIndex;
        });
    }

    /* automatyczna szerokosc elementu w zaleznosci od ilosci elementow w srodku */
    slideShow.css('width', slideCount * 100 + '%');
    console.log(slideCount);

    /* szerokosc i położenie pojedynczego slajdu */

    $('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    })

    /* klikniecie w strzalki */
    $('.prev-slide').click(function () {
        slide(slideIndex - 1);
    });

    $('.next-slide').click(function () {
        slide(slideIndex + 1);
    });


});
