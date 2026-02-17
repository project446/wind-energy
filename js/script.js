// 1. Mouse Tracking Parallax Background
const blobs = document.querySelectorAll('.blob');

window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 30; 
        const translateX = (x - 0.5) * speed;
        const translateY = (y - 0.5) * speed;
        blob.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
});

// 2. Smooth Reveal on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 3. Navigation Click Highlight
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');
    });
});