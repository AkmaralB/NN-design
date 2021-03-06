
$(document).ready(function () {
    $(".section4-gm__img--left").resizable({
        handleSelector: ".section4-gm__img--left-splitter",
        resizeHeight: false
    });
    $('.main-mob-top').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // rtl: true
    });
    $('.carusel-slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
    $('#section1_causel-desktop').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    $('#section1_causel-mob').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
    $('.rows-desktop').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true
    });
});