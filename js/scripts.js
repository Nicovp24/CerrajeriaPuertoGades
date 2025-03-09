// Inicializar ScrollReveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    reset: false // No se repite la animación al volver a la sección
});

// Animaciones en cada sección
sr.reveal('.navbar', { origin: 'top', distance: '80px' });
sr.reveal('.hero h1', { delay: 300 });
sr.reveal('.hero p', { delay: 500 });
sr.reveal('.hero .btn', { delay: 700 });

sr.reveal('#servicios .card', { interval: 200 });
sr.reveal('#nosotros img', { origin: 'left' });
sr.reveal('#nosotros h2, #nosotros p, #nosotros a', { origin: 'right', interval: 200 });

sr.reveal('#contacto h2', { origin: 'top' });
sr.reveal('#contacto .col-md-6', { interval: 300 });

sr.reveal('footer', { delay: 300, origin: 'bottom' });

// Efecto Parallax en la Hero Section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});


// Pausar el carrusel cuando el usuario pasa el ratón por encima
const carouselElement = document.querySelector('#trabajosCarousel');
carouselElement.addEventListener('mouseenter', () => {
    const carousel = bootstrap.Carousel.getInstance(carouselElement);
    carousel.pause();
});
carouselElement.addEventListener('mouseleave', () => {
    const carousel = bootstrap.Carousel.getInstance(carouselElement);
    carousel.cycle();
});

ScrollReveal().reveal('.elemento', { delay: 200, origin: 'bottom', distance: '50px' });


