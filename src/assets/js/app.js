
$(document).ready(function () {
    $(".section4-gm__img--left").resizable({
        handleSelector: ".section4-gm__img--splitter",
        resizeHeight: false
    });
    $('.main-mob-top').slick({
        autoplay: true,
        // autoplaySpeed: 6000,
        dots: true,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: false,
        // rtl: true
    });
    // $('#carouselLogo').slick({
    //     autoplay: true,
    //     // autoplaySpeed: 6000,
    //     dots: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     // rtl: true
    // });

    $('#prev').click(function() {
        slide();
    });
    $('#next').click(function() {
        slide(true);
    });
    $('#carousel1').click(function() {
        slide(true);
    });

    function slide(b) {
        if (b) {
            $('#carousel1').append($("#carousel1").children().first().clone());
            $('.carousel-1')[0].remove();
        } else {
            $('#carousel1').prepend($("#carousel1").children().last().clone());
            $('.carousel-1')[$('.carousel-1').length - 1].remove();
        }
        var n = $('.carousel-1')[0].getAttribute('alt');
        $('#number').html('0' + n);
    }

    $('#prev2').click(function() {
        slide();
    });
    $('#next2').click(function() {
        slide(true);
    });
    $('#carousel2').click(function() {
        slide(true);
    });

    function slide(b) {
        if (b) {
            $('#carousel2').append($("#carousel2").children().first().clone());
            $('.carousel-2')[0].remove();
        } else {
            $('#carousel2').prepend($("#carousel2").children().last().clone());
            $('.carousel-2')[$('.carousel-2').length - 1].remove();
        }
        var n = $('.carousel-2')[0].getAttribute('alt');
        $('#number').html('0' + n);
    }
});