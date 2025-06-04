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
    function toggleContactsSlider() {
        const $contacts = $('.contacts__container');
        if (window.matchMedia('(max-width: 1440px)').matches) {
            if (!$contacts.hasClass('slick-initialized')) {
                $contacts.slick({
                    slidesToShow: 1,
                    variableWidth: true,
                    infinite: false,
                });
            }
        } else {
            if ($contacts.hasClass('slick-initialized')) {
                $contacts.slick('unslick');
            }
        }
    }

    // Инициализация при загрузке
    toggleContactsSlider();

    // Слушаем изменение ширины окна
    window.addEventListener('resize', toggleContactsSlider);
    // const arrGallery = [0, 120, 240, 360, 240, 120];
    // console.log(document.querySelector('.gallery__slider').querySelectorAll('.slide').length);
    // for (
    //     let i = 0;
    //     document.querySelector('.gallery__slider').querySelectorAll('.slide').length >= arrGallery.length;
    //     document.querySelector('.gallery__slider').querySelectorAll('.slide').length - arrGallery.length
    // ) {
    //     i++;
    // }
    // $('.gallery__slider').slick({
    //     slidesToShow: 1,
    //     variableWidth: true,
    //     infinite: false,
    //     // dots: true,
    //     // autoplay: true,
    //     // autoplaySpeed: 5000,
    // });
    const paddingPattern = [0, 120, 240, 360, 240, 120];
    const generatePaddings = (count) => {
        const paddings = [];
        for (let i = 0; i < count; i++) {
            document.querySelector('.gallery__slider').querySelectorAll('.slide')[i].style.paddingTop =
                paddingPattern[i % paddingPattern.length] + 'px';
        }
    };
    generatePaddings(document.querySelector('.gallery__slider').querySelectorAll('.slide').length);
    const slider = document.querySelector('.gallery__slider');
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        isDragging = false;
        for (const img of slider.querySelectorAll('img')) {
            img.style.cursor = 'grab';
        }
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        for (const img of slider.querySelectorAll('img')) {
            img.removeAttribute('style');
        }
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        for (const img of slider.querySelectorAll('img')) {
            img.removeAttribute('style');
        }
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        if (Math.abs(walk) > 5) {
            isDragging = true;
        }
        slider.scrollLeft = scrollLeft - walk;
    });

    slider.addEventListener('click', (e) => {
        if (isDragging) {
            e.preventDefault();
            e.stopPropagation();
            isDragging = false; // сбрасываем
        }
    });

    slider.querySelectorAll('img').forEach((img) => {
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });
    Fancybox.bind('[data-fancybox]', {
        // hideScrollbar: false,
    });
});
