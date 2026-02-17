// 1. Check if the file is even connected
console.log("Wind Energy Script Loaded Successfully!");

// 2. Interactive Mouse Glow (The Background Fix)
const orb = document.querySelector('.glow-orb');

// If the orb exists, move it. If not, alert the user.
if (orb) {
    window.addEventListener('mousemove', (e) => {
        orb.style.left = e.clientX + "px";
        orb.style.top = e.clientY + "px";
    });
} else {
    console.error("Error: Could not find element with class '.glow-orb'. Check your HTML!");
}

// 3. Scroll Reveal Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            console.log("Section revealed!");
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));