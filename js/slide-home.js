document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.Carousel-Curring-Sliders__Container');
    let currentIndex = 0;
    let intervalId;

    function moveSlide(direction) {
        currentIndex = (currentIndex + direction + container.children.length) % container.children.length;
        updateCarousel();
    }

    function startAutoScroll() {
        // Inicia el intervalo solo si no está en marcha
        if (!intervalId) {
            intervalId = setInterval(function () {
                moveSlide(1);
            }, 8000);
        }
    }

    function stopAutoScroll() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function updateCarousel() {
        const translateValue = -currentIndex * 100 + '%';
        container.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(function () {
        moveSlide(1);
    }, 10000);

    // Evento para el botón "Prev"
    document.querySelector('.Left-Arrow').addEventListener('click', function () {
        moveSlide(1);
        stopAutoScroll();
    });

    // Evento para el botón "Next"
    document.querySelector('.Right-Arrow').addEventListener('click', function () {
        moveSlide(-1);
        stopAutoScroll();
    });

    container.addEventListener('mouseover', stopAutoScroll);
    container.addEventListener('mouseout', startAutoScroll);
});
