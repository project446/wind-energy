const orb = document.querySelector('.glow-orb');

// Mouse Movement
window.addEventListener('mousemove', (e) => {
    // Moves the center of the orb to the mouse position
    orb.style.left = e.clientX + 'px';
    orb.style.top = e.clientY + 'px';
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));