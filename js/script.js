// 1. Scroll Reveal Logic using Intersection Observer
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Target all elements with the 'reveal' class
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Button Interaction
const mainBtn = document.getElementById('mainBtn');
mainBtn.addEventListener('click', () => {
    mainBtn.textContent = "Loading...";
    mainBtn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Welcome! The interactive journey begins.");
        mainBtn.textContent = "Get Started";
        mainBtn.style.opacity = "1";
    }, 600);
});

// 3. Simple Nav Highlight
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});