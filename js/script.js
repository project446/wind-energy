// 1. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Background Parallax (Reacts to Scroll)
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const s1 = document.querySelector('.s1');
    const s2 = document.querySelector('.s2');
    
    // Move spheres slightly based on scroll
    s1.style.transform = `translateY(${scrollY * 0.2}px)`;
    s2.style.transform = `translateY(${scrollY * -0.1}px)`;
});

// 3. Button Click Effect
document.getElementById('mainBtn').addEventListener('mousedown', function() {
    this.style.transform = "scale(0.9)";
});
document.getElementById('mainBtn').addEventListener('mouseup', function() {
    this.style.transform = "scale(1.05)";
});