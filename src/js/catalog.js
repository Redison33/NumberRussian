document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.querySelector('.catalog__button');
    const allCards = document.querySelectorAll('.catalog__grid__item');
    let itemsToShow = 8;
    let currentIndex = itemsToShow;

    const initShowMore = () => {
        allCards.forEach((card, index) => {
            if (index >= itemsToShow) {
                card.style.display = 'none';
            }
        });

        if (allCards.length <= itemsToShow) {
            showMoreBtn.style.display = 'none';
        }
    };

    const showMoreCards = () => {
        const itemsLeft = allCards.length - currentIndex;
        const itemsToAdd = Math.min(8, itemsLeft);

        for (let i = currentIndex; i < currentIndex + itemsToAdd; i++) {
            if (allCards[i]) {
                allCards[i].style.display = 'block';
                allCards[i].style.animation = 'fadeIn 0.5s ease-in-out';
            }
        }

        currentIndex += itemsToAdd;

        if (currentIndex >= allCards.length) {
            showMoreBtn.style.display = 'none';
        }
    };

    initShowMore();

    showMoreBtn.addEventListener('click', showMoreCards);
});
