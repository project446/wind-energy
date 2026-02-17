/* --- Background Animation Setup --- */
body {
    background-color: #020617; /* Even deeper navy */
    overflow-x: hidden;
    position: relative;
}

.bg-blobs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(80px);
    opacity: 0.6;
}

.blob {
    position: absolute;
    border-radius: 50%;
    background: #10b981;
    transition: transform 0.2s ease-out;
}

.blob-1 { width: 400px; height: 400px; top: -100px; right: -100px; opacity: 0.4; }
.blob-2 { width: 300px; height: 300px; bottom: -50px; left: -50px; background: #3b82f6; opacity: 0.3; }
.blob-3 { width: 250px; height: 250px; top: 40%; left: 30%; background: #8b5cf6; opacity: 0.2; }

/* --- Interactive Card (Glassmorphism) --- */
.glass-card {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 10px;
    transition: transform 0.3s ease;
}

.glass-card:hover {
    transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
    border-color: #10b981;
}

/* --- Buttons --- */
.hero-btns { display: flex; gap: 15px; margin-top: 25px; }

.secondary-btn {
    background: transparent;
    border: 2px solid #10b981;
    color: #10b981;
}

.secondary-btn:hover {
    background: rgba(16, 185, 129, 0.1);
}

/* Re-include your previous 'reveal' and 'active' CSS classes here */