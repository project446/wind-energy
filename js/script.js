// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('exploreBtn');

    // Click Event
    exploreBtn.addEventListener('click', () => {
        alert("Redirecting to our Technology Section... Get ready to be blown away!");
        window.scrollTo({
            top: 800,
            behavior: 'smooth'
        });
    });

    // Simple Scroll Animation for Navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 10%';
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
        } else {
            nav.style.padding = '20px 10%';
            nav.style.boxShadow = 'none';
        }
    });
});