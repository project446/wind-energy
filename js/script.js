// 1. Cursor Glow Tracking
const glow = document.getElementById('glow');

window.addEventListener('mousemove', (e) => {
    // Moves the green glow to follow your mouse
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// 2. Scroll Reveal Logic
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Button Interaction
document.querySelector('.primary-btn').addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});