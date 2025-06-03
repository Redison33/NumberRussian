// document.addEventListener('DOMContentLoaded', function () {
//     if (document.querySelector('.bar')) {
//         for (const track of document.querySelectorAll('.bar')) {
//             const logos = track.innerHTML;
//             track.innerHTML += logos;
//         }
//     }
//     // Функция, которая добавляет класс анимации ко всем карточкам внутри секции
//     function animateCardsInSection(section) {
//         let cards = section.querySelectorAll('.card'); // Ищем все карточки в секции
//         cards.forEach((card) => {
//             card.classList.add('card-active'); // Добавляем класс с анимацией
//         });
//     }

//     // Callback для IntersectionObserver
//     function callback(entries, observer) {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 animateCardsInSection(entry.target); // Анимация карточек при появлении секции
//                 observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
//             }
//         });
//     }

//     // Настройки для IntersectionObserver
//     let options = {
//         root: null, // null означает, что наблюдение происходит относительно viewport
//         rootMargin: '0px',
//         threshold: 0.3, // 50% секции должны быть видны
//     };

//     // Создаем IntersectionObserver
//     let observer = new IntersectionObserver(callback, options);

//     // Выбираем все секции и устанавливаем наблюдение за каждой из них
//     let sections = document.querySelectorAll('.section-animation');
//     sections.forEach((section) => {
//         observer.observe(section); // Наблюдаем за каждой секцией
//     });

//     function initSlickSlider() {
//         if (window.innerWidth > 1000) {
//             var maxSlideWidth = 1318;
//             var windowWidth = window.innerWidth;
//             var slideWidth = Math.min(windowWidth, maxSlideWidth);
//             var centerPadding = (windowWidth - slideWidth) / 2;

//             $('.cases__slider').slick({
//                 centerMode: true,
//                 centerPadding: centerPadding + 'px',
//                 slidesToShow: 1,
//                 infinite: false,
//                 initialSlide: 1,
//                 responsive: [
//                     {
//                         breakpoint: 1500,
//                         settings: {
//                             centerMode: true,
//                             centerPadding: '117px',
//                             slidesToShow: 1,
//                             infinite: false,
//                             initialSlide: 1,
//                         },
//                     },
//                 ],
//             });
//         }
//     }

//     $(document).ready(function () {
//         initSlickSlider();

//         // Пересчитываем параметры слайдера при изменении размера окна
//         $(window).on('resize', function () {
//             $('.cases__slider').slick('unslick');
//             initSlickSlider();
//         });
//     });
//     if (document.querySelector('.header__button')) {
//         document.querySelector('.header__button').addEventListener('click', () => {
//             document.querySelector('.header__button').classList.toggle('header__button--active');
//             document.querySelector('.header__nav').classList.toggle('nav--active');
//             if (window.innerWidth <= 620) {
//                 if (document.querySelector('.header__nav').classList.contains('nav--active')) {
//                     document.body.style.overflow = 'hidden';
//                 } else {
//                     document.body.style.overflow = '';
//                 }
//             }
//         });
//     }

//     if (document.querySelector('.modal-open')) {
//         for (const modalBtnOpen of document.querySelectorAll('.modal-open')) {
//             modalBtnOpen.addEventListener('click', () => {
//                 document.querySelector('.modal').classList.add('modal--active');
//                 document.querySelector('.modal-overlay').classList.add('modal-overlay--active');
//                 document.body.style.overflow = 'hidden';
//             });
//         }
//     }
//     if (document.querySelector('.modal-close')) {
//         document.querySelector('.modal-close').addEventListener('click', (e) => {
//             e.preventDefault();
//             document.querySelector('.modal').classList.remove('modal--active');
//             document.querySelector('.modal-overlay').classList.remove('modal-overlay--active');
//             document.body.style.overflow = '';
//         });
//     }
//     $('form').each(function () {
//         $(this).validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2,
//                 },
//                 phone: {
//                     required: true,
//                 },
//                 email: {
//                     required: true,
//                     email: true,
//                 },
//                 file: 'required',
//                 event: 'required',
//             },
//             messages: {
//                 name: {
//                     required: '*Обязательное поле',
//                     minlength: 'ФИО должно быть не менее 2 символов',
//                 },
//                 phone: {
//                     required: '*Обязательное поле',
//                 },
//                 email: {
//                     required: '*Обязательное поле',
//                     email: 'Введите корректный email',
//                 },
//                 file: '*Обязательное поле',
//                 event: '*Обязательное поле',
//             },
//         });
//         $(this).find('[name="phone"]').mask('+7(000)-000-00-00');
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    if (window.screen.width > 680) window.addEventListener('scroll', handleScroll);

    function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        let isScrollGoDown;
        let isScrollStart;
        if (document.querySelector('#bx-panel')) {
            isScrollGoDown = scrollTop > document.querySelector('#bx-panel').scrollHeight + document.querySelector('.header').scrollHeight;
            isScrollStart = scrollTop < document.querySelector('#bx-panel').scrollHeight + document.querySelector('.header').scrollHeight;
        } else if (document.querySelector('.wi-special-sblock')) {
            isScrollGoDown = scrollTop > document.querySelector('.wi-special-sblock').scrollHeight + document.querySelector('.header').scrollHeight;
            isScrollStart = scrollTop < document.querySelector('.wi-special-sblock').scrollHeight + document.querySelector('.header').scrollHeight;
        } else if (document.querySelector('#bx-panel') && document.querySelector('.wi-special-sblock')) {
            isScrollGoDown =
                scrollTop >
                document.querySelector('#bx-panel').scrollHeight +
                    document.querySelector('.wi-special-sblock').scrollHeight +
                    document.querySelector('.header').scrollHeight;
            isScrollStart =
                scrollTop <
                document.querySelector('#bx-panel').scrollHeight +
                    document.querySelector('.wi-special-sblock').scrollHeight +
                    document.querySelector('.header').scrollHeight;
        } else {
            isScrollGoDown = scrollTop > 32;
            isScrollStart = scrollTop < document.querySelector('.header').scrollHeight;
        }
        const isScrollGoTop = this.oldScroll > this.scrollY;
        this.oldScroll = this.scrollY;

        // HeaderTop
        if (isScrollStart) {
            document.querySelector('.header').removeAttribute('style');
            document.querySelector('section').removeAttribute('style');
            document.querySelector('.header__container').removeAttribute('style');
            headerHeight = document.querySelector('.header').scrollHeight;

            // headerMiddle.classList.remove('header__wrap-middle-visible');
            // headerBottom.classList.remove('header__wrap-bottom-visible-start');
        }
        if (isScrollGoDown) {
            // document.querySelector('header').style.marginBottom = '105px';
            document.querySelector('section').style.paddingTop = '120px';
            document.querySelector('.header').style.position = 'fixed';
            document.querySelector('.header__container').style.padding = '12px 32px';
            document.querySelector('.header').style.zIndex = 10000;
            document.querySelector('.header').style.top = 0;
            document.querySelector('.header').style.left = 0;
            document.querySelector('.header').style.right = 0;
            document.querySelector('.header').style.boxShadow = '0px 2px 15px 0px rgba(0,0,0,0.25)';
            headerHeight = document.querySelector('.header').scrollHeight;
        }
    }
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        {
            threshold: 0.1,
        },
    );
    document.querySelector('.animationDetected');
    {
        document.querySelectorAll('.animationDetected').forEach((el) => {
            console.log(el);

            observer.observe(el);
            // el.remove();
        });
    }
});
