// Opciones para el Intersection Observer
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3 // Umbral de intersección del 30%
};

// Función para manejar la intersección
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-section'); // Agrega la clase para mostrar la sección
            observer.unobserve(entry.target); // Deja de observar una vez que se muestra la sección
        }
    });
}

// Crear el Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

// Obtener todas las secciones que deseas observar
const sections = document.querySelectorAll('.section');

// Observar cada sección
sections.forEach(section => {
    observer.observe(section);
});
