const giftBox = document.getElementById('giftBox');
const bookModal = document.getElementById('bookModal');
const confettiContainer = document.getElementById('confetti');

let opened = false;
let currentPage = 1;
const totalPages = 3;

// Animar el libro al hacer clic
giftBox.addEventListener('click', function() {
    if (!opened) {
        opened = true;
        giftBox.classList.add('opened');
        
        // Crear confeti
        createConfetti();
        
        // Mostrar el libro modal después de la animación
        setTimeout(() => {
            bookModal.style.display = 'flex';
            currentPage = 1;
            showPage(currentPage);
            updateNavigation();
        }, 800);
    }
});

// Función para mostrar una página específica
function showPage(pageNum) {
    const pages = document.querySelectorAll('.book-page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.querySelector(`.page-${pageNum}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    document.getElementById('currentPage').textContent = pageNum;
    updateNavigation();
}

// Siguiente página
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Página anterior
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Actualizar estado de botones
function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (currentPage === 1) {
        prevBtn.disabled = true;
        prevBtn.style.opacity = '0.5';
        prevBtn.style.cursor = 'not-allowed';
    } else {
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }
    
    if (currentPage === totalPages) {
        nextBtn.disabled = true;
        nextBtn.style.opacity = '0.5';
        nextBtn.style.cursor = 'not-allowed';
    } else {
        nextBtn.disabled = false;
        nextBtn.style.opacity = '1';
        nextBtn.style.cursor = 'pointer';
    }
}

// Cerrar el libro
function closeBook() {
    bookModal.style.display = 'none';
    opened = false;
    giftBox.classList.remove('opened');
    currentPage = 1;
}

// Función para crear confeti
function createConfetti() {
    const confettiPieces = 50;
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 50 + '%';
        
        const colors = ['#8b6f47', '#a87543', '#c9956c', '#d4a574', '#dcc9a3'];
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        const size = Math.random() * 10 + 4;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        
        const duration = Math.random() * 2.5 + 2.5;
        const delay = Math.random() * 0.3;
        
        confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;
        confetti.style.position = 'fixed';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '99';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

// Función para ir a la galería
function goToGallery() {
    window.location.href = 'galeria.html';
}

// Añadir efecto de flotación a los emojis de fondo
window.addEventListener('load', function() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
    });
});

// Navegar con teclas del teclado
document.addEventListener('keydown', function(e) {
    if (bookModal.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
        if (e.key === 'Escape') closeBook();
    }
});
