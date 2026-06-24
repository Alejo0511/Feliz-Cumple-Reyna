// Función para ir a un slide específico del carrusel
function goToSlide(slideNumber) {
    const carousel = document.querySelector('.carousel');
    const offset = -slideNumber * 100;
    carousel.style.animation = 'none';
    carousel.style.transform = `translateX(${offset}%)`;
    
    // Actualizar puntos activos
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === slideNumber) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Función para dedicar canción
function dedicateSong() {
    const songName = document.getElementById('songName').value;
    const dedicationElement = document.getElementById('dedication');
    
    if (songName.trim() !== '') {
        dedicationElement.textContent = `✨ "${songName}" dedicada para ti, Cristina, con todo mi amor ✨`;
        dedicationElement.style.animation = 'fadeInUp 0.6s ease-out';
        document.getElementById('songName').value = '';
    } else {
        alert('Por favor, escribe el nombre de una canción');
    }
}

// Permitir Enter para dedicar canción
document.addEventListener('DOMContentLoaded', function() {
    const songInput = document.getElementById('songName');
    if (songInput) {
        songInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                dedicateSong();
            }
        });
    }
});

// Efecto de parallax suave para elementos flotantes
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach(element => {
        let scrollPosition = window.pageYOffset;
        element.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});

// Animación de entrada suave al cargar la página
window.addEventListener('load', function() {
    const sections = document.querySelectorAll('.gallery-section, .letter-section, .audio-section');
    sections.forEach((section, index) => {
        section.style.animationDelay = `${index * 0.2}s`;
    });

    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            card.classList.toggle('is-flipped');
        });
    });

    const movingPhoto = document.getElementById('movingPhoto');
    if (movingPhoto) {
        let x = 40;
        let y = 40;
        let vx = 2.2 + Math.random() * 1.8;
        let vy = 1.8 + Math.random() * 1.8;
        const speed = 1;

        function movePhoto() {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const photoWidth = movingPhoto.offsetWidth;
            const photoHeight = movingPhoto.offsetHeight;

            x += vx * speed;
            y += vy * speed;

            if (x + photoWidth >= windowWidth - 20 || x <= 20) {
                vx = -vx;
                x = Math.max(20, Math.min(x, windowWidth - photoWidth - 20));
            }
            if (y + photoHeight >= windowHeight - 20 || y <= 20) {
                vy = -vy;
                y = Math.max(20, Math.min(y, windowHeight - photoHeight - 20));
            }

            movingPhoto.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            requestAnimationFrame(movePhoto);
        }

        movePhoto();
    }
});
