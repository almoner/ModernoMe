$(function () {

    $('.product-slider__inner').slick({
        dots:true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $(".rate-star").rateYo({
        rating: 5,
        readOnly: true,
        starWidth: "12px"
    });

    var mixer = mixitup('.product__inner-box');


});