$('.party__slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
});

$('.party__slider-1').slick({
    slidesToShow: 1,
    variableWidth: true,
    infinite: false,
});

$('.photos__slider').slick({
    slidesToShow: 1,
    centerMode: true,
    arrows: true,
    variableWidth: true,
});

$('.events__list-slider').slick({
    slidesToShow: 2,
    centerMode: false,
    arrows: true,

    responsive: [
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});
