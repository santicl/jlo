let currentIndex = 0;
const itemsPerPage = 3;
const totalItems = 8;

document.addEventListener('DOMContentLoaded', function () {
    // Oculta todos los elementos excepto los primeros tres
    const items = document.querySelectorAll('.Arm-item');
    items.forEach((item, index) => {
        if (index >= itemsPerPage) {
            item.classList.add('hidden');
        }
    });
});

function updateCarousel() {
    const translateValue = -currentIndex * (100 / itemsPerPage);
    document.querySelector('#carouselInner').style.transform = `translateX(${translateValue}%)`;

    // Oculta y muestra los elementos según el índice actual
    const items = document.querySelectorAll('.Arm-item');
    items.forEach((item, index) => {
        if (index < currentIndex || index >= currentIndex + itemsPerPage) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
}

function nextSlide() {
    if (currentIndex < totalItems - itemsPerPage) {
        currentIndex++;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    }
    updateCarousel();
}

// Eventos para los botones de flecha
document.querySelector('.Left-Arrow').addEventListener('click', prevSlide);
document.querySelector('.Right-Arrow').addEventListener('click', nextSlide);
