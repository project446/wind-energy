/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

:root {
    --primary: #2ecc71;
    --secondary: #3498db;
    --dark: #2c3e50;
    --light: #ecf0f1;
}

body {
    background-color: var(--light);
    color: var(--dark);
    line-height: 1.6;
}

/* Navigation */
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.logo span { color: var(--primary); }

.nav-links {
    display: flex;
    justify-content: space-around;
    width: 40%;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: var(--dark);
    font-weight: 500;
    transition: 0.3s;
}

.nav-links a:hover, .active {
    color: var(--primary);
}

/* Hero Section */
.hero {
    height: 90vh;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url('https://images.unsplash.com/photo-1466611653911-95282fc3656b?auto=format&fit=crop&q=80&w=1470') center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 20px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    background: var(--primary);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    margin-top: 20px;
    transition: transform 0.3s;
}

.btn:hover { transform: scale(1.05); }

/* Info Section & Cards */
.info-section {
    padding: 80px 10%;
    text-align: center;
}

.card-container {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    flex: 1;
    transition: translateY 0.3s;
}

.card:hover { transform: translateY(-10px); }

.card i {
    font-size: 40px;
    color: var(--secondary);
    margin-bottom: 15px;
}

/* Responsive Menu */
.burger { display: none; cursor: pointer; }
.burger div { width: 25px; height: 3px; background-color: var(--dark); margin: 5px; }

@media screen and (max-width: 768px) {
    .nav-links { width: 60%; display: none; }
    .card-container { flex-direction: column; }
}