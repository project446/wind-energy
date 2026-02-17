/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #0f172a; /* Deep Navy */
    color: #f8fafc;
    line-height: 1.6;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10%;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo { font-size: 1.5rem; font-weight: bold; }
.logo span { color: #10b981; }

.nav-links { display: flex; list-style: none; }
.nav-links li { margin-left: 30px; }
.nav-links a { text-decoration: none; color: white; transition: 0.3s; }
.nav-links a:hover, .active { color: #10b981; }

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 80px 10%;
    min-height: 80vh;
}

.hero-content h1 { font-size: 4rem; margin-bottom: 20px; }
.hero-content span { color: #10b981; }

.hero-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 0 20px 50px rgba(16, 185, 129, 0.2);
}

button {
    padding: 12px 30px;
    background: #10b981;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s;
}

button:hover { transform: scale(1.05); background: #059669; }

.info-section { padding: 100px 10%; text-align: center; }