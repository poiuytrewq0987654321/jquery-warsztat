'use strict';

//console.log($('p').text());

$(function () {
    /* zmienne */
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

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
        var newSlideIndex = slideIndex - 1;

        if (newSlideIndex < 0) {
            return;
        }

        var marginLeft = (newSlideIndex * (-100)) + '%';
        slideShow.animate({
            'margin-left': marginLeft
        }, 500, function () {
            slideIndex = newSlideIndex;
        });
    });

    $('.next-slide').click(function () {
        var newSlideIndex = slideIndex + 1;

        if (newSlideIndex >= slideCount) {
            return;
        }

        var marginLeft = (newSlideIndex * (-100)) + '%';
        slideShow.animate({
            'margin-left': marginLeft
        }, 500, function () {
            slideIndex = newSlideIndex;
        });
    });

 
});
