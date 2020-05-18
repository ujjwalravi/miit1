$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'>PREV</button>",
        nextArrow:"<button type='button' class='slick-next pull-right'>NEXT</button>"
    });
});