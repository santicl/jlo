let currentIndexPage = 0;
const itemsPerPageI = calculateItemsPerPage();
const totalItemsI = 25;

function calculateItemsPerPage() {
    return window.innerWidth < 768 ? 1 : 3;
};

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

// Actualiza itemsPerPage cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    itemsPerPageI = calculateItemsPerPage();
    updateCarousel();
});

// Calcula itemsPerPage al cargar la página
window.addEventListener('load', () => {
    itemsPerPageI = calculateItemsPerPage();
    updateCarousel();
});

// Eventos para los botones de flecha
document.querySelector('.Left-Arrow').addEventListener('click', prevSlide);
document.querySelector('.Right-Arrow').addEventListener('click', nextSlide);