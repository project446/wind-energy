// 1. Mouse Follower Logic
const orb = document.querySelector('.glow-orb');

window.addEventListener('mousemove', (e) => {
    // We move the orb using transform for better performance
    // Subtracting 300px because the orb width is 600px (half = 300)
    const x = e.clientX - 300;
    const y = e.clientY - 300;
    
    orb.style.transform = `translate(${x}px, ${y}px)`;
});

// 2. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

console.log("Wind Energy Site Ready!");