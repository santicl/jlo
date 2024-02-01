let currentIndex = 0;
//let itemsPerPage = calculateItemsPerPage();
const totalItems = 8;

function calculateItemsPerPage() {
    console.log(window.innerWidth)
    return window.innerWidth < 768 ? 1 : 3;
};

document.addEventListener('DOMContentLoaded', function () {
    // Oculta todos los elementos excepto los primeros tres
    let itemsPerPage = calculateItemsPerPage();
    const items = document.querySelectorAll('.Arm-item');
    items.forEach((item, index) => {
        if (index >= itemsPerPage) {
            item.classList.add('hidden');
        }
    });
});

function updateCarousel() {
    let itemsPerPage = calculateItemsPerPage();
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
    let itemsPerPage = calculateItemsPerPage();
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

// Actualiza itemsPerPage cuando cambia el tamaño de la ventana
window.addEventListener('resize', () => {
    let itemsPerPage = calculateItemsPerPage();
    //itemsPerPage = calculateItemsPerPage();
    updateCarousel();
});

// Calcula itemsPerPage al cargar la página
window.addEventListener('load', () => {
    let itemsPerPage = calculateItemsPerPage();
    //itemsPerPage = calculateItemsPerPage();
    updateCarousel();
});


// Eventos para los botones de flecha
document.querySelector('.Left-Arrow').addEventListener('click', prevSlide);
document.querySelector('.Right-Arrow').addEventListener('click', nextSlide);
