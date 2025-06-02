document.addEventListener('DOMContentLoaded', () => {
    const $slider = $('.important__slider');
    let isPaused = false;

    $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
        $('.important__slider .slick-dots li .progress-bar').remove(); // очистка
        // $('.important__slider .slick-arrow').remove();
        // $('.important__slider').append(
        //     '<button aria-label="Previous" class="slick-arrow slick-prev"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="white"/><path d="M40 32L24 32M24 32L30 38M24 32L30 26" stroke="#0D0D12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        // );
        // $('.important__slider').append(
        //     '<button aria-label="Next" class="slick-arrow slick-next"><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="white"/><path d="M40 32L24 32M24 32L30 38M24 32L30 26" stroke="#0D0D12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        // );
        $('.important__slider .slick-dots li').eq(slick.currentSlide).append('<div class="progress-bar"></div>');
        // $('.slick-prev').click($slider.slick('slickPrev'));
        // $('.slick-next').click($slider.slick('slickNext'));
    });

    $slider.on('mousedown touchstart', function () {
        isPaused = true;
        $slider.slick('slickPause');
        $('.progress-bar').css('animation-play-state', 'paused');
    });

    $slider.on('mouseup touchend mouseleave', function () {
        if (isPaused) {
            isPaused = false;
            $slider.slick('slickPlay');
            $('.progress-bar').css('animation-play-state', 'running');
        }
    });

    $slider.slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.party__slider').slick({
        slidesToShow: 1,
        variableWidth: true,
        infinite: false,
        // dots: true,
        // autoplay: true,
        // autoplaySpeed: 5000,
    });
});
