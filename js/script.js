// 1. Mouse Follow Glow
const orb = document.querySelector('.glow-orb');
window.addEventListener('mousemove', (e) => {
    orb.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
});

// 2. Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Smooth Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});