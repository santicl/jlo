let currentIndexPage = 0;
const itemsPerPageI = 3;
const totalItemsI = 25;

document.addEventListener('DOMContentLoaded', function () {
    // Oculta todos los elementos excepto los primeros tres
    const items = document.querySelectorAll('.Odonto-Item');
    items.forEach((item, index) => {
        if (index >= itemsPerPageI) {
            item.classList.add('hidden');
        }
    });
});

function updateCarousel() {
    const translateValue = -currentIndexPage * (100 / itemsPerPageI);
    document.querySelector('#carouselInner').style.transform = `translateX(${translateValue}%)`;

    // Oculta y muestra los elementos según el índice actual
    const items = document.querySelectorAll('.Odonto-Item');
    items.forEach((item, index) => {
        if (index < currentIndexPage || index >= currentIndexPage + itemsPerPageI) {
            item.classList.add('hidden');
        } else {
            item.classList.remove('hidden');
        }
    });
}


function nextSlide() {
    if (currentIndexPage < totalItemsI - itemsPerPageI) {
        currentIndexPage++;
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndexPage > 0) {
        currentIndexPage--;
    }
    updateCarousel();
}

// Eventos para los botones de flecha
document.querySelector('.Left-Arrow').addEventListener('click', prevSlide);
document.querySelector('.Right-Arrow').addEventListener('click', nextSlide);
