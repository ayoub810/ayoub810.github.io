// Selecciona el botón de toggle y el menú
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

document.getElementById('nav-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show-menu');
});


// Abre el menú al hacer clic en el icono de toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
});

// Cierra el menú al hacer clic en el icono de cerrar
navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
});


const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    navMenu.classList.remove('show-menu'); // Eliminar la clase para ocultar el menú al hacer clic
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// Cambiar el fondo del header cuando se hace scroll
const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);
scrollHeader();

// Activar el enlace de navegación cuando se hace scroll
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58, // Ajuste para que se active cuando esté visible
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link'); // Agregar clase de "activo" al enlace
        } else {
            sectionClass.classList.remove('active-link'); // Eliminar clase "activo"
        }
    });
};
window.addEventListener('scroll', scrollActive);

// Función para controlar el efecto de deslizamiento de los elementos con ScrollReveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: '2500',
    delay: '400',
});

window.addEventListener('scroll', () => {
    const navMenu = document.getElementById('nav-menu');
    if (window.scrollY > 50) {
        navMenu.classList.add('scrolled');
    } else {
        navMenu.classList.remove('scrolled');
    }
});

sr.reveal('.home__content, .servicio__data, .servicio__swiper, .footer__container');
sr.reveal('.home__images', { origin: 'bottom', delay: 1000 });
sr.reveal('.nosotros__images, .contacto__img', { origin: 'left' });
sr.reveal('.nosotros__data, .contacto__data', { origin: 'right' });
sr.reveal('.blog__card', { interval: 100 });

// Funciones para hacer el efecto de flip en las tarjetas
function flipCard(element) {
    element.classList.add('hover');
}

function unflipCard(element) {
    element.classList.remove('hover');
}
// Funcionalidad para cerrar la subpágina de bienvenida
document.getElementById("close-maintenance").addEventListener("click", function() {
    document.getElementById("maintenance-page").style.display = "none";
});
