function moveCarousel() {
    const slidesContainer = document.querySelector('.Home-Main__Container__Images');
    const slides = document.querySelectorAll('.Home-Main__Container__Images__Container img');
    const slideWidth = slides[0].offsetWidth;
    let currentPosition = 0;
    let interval = null;
    let isUserScrolling = false;
    let scrollTimeout = null;

    function slide() {
        currentPosition -= slideWidth;
    
        if (currentPosition < -slideWidth * (slides.length - 1)) {
            currentPosition = 0;
        }
    
        slidesContainer.style.transition = 'none'; // Eliminamos la transición temporalmente
        slidesContainer.style.transform = `translateX(${currentPosition}px)`;
    
        // Utilizamos setTimeout para esperar un breve instante antes de restaurar la transición
        setTimeout(() => {
            slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
    
    
    

    function startCarousel() {
        interval = setInterval(() => {
            if (!isUserScrolling) {
                slide();
            }
        }, 3500); // Ajusta el intervalo según la duración de la transición
    }
    
    

    function stopCarousel() {
        clearInterval(interval);
    }

    function handleUserScroll() {
        isUserScrolling = true;
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            isUserScrolling = false;
        }, 1000);
    }

    slidesContainer.addEventListener('scroll', handleUserScroll);
    //slidesContainer.addEventListener('mouseenter', stopCarousel);
    //slidesContainer.addEventListener('mouseleave', startCarousel);

    // Iniciar el carrusel al cargar la página
    startCarousel();

    return {
        start: startCarousel,
        stop: stopCarousel
    };
}

const carousel = moveCarousel();
