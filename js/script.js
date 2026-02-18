function startTurbine() {
    const turbine = document.getElementById('turbine');
    const screen = document.getElementById('data-screen');
    const speedText = document.getElementById('speedDisplay');
    const powerText = document.getElementById('powerDisplay');

    // Start spinning
    turbine.classList.add('spinning');
    screen.style.display = 'block';

    // Logic: Speed affects electricity output
    let windSpeed = Math.floor(Math.random() * 40) + 10;
    let homes = windSpeed * 25;

    speedText.innerHTML = "🌬️ Wind Speed: <b>" + windSpeed + " km/h</b>";
    powerText.innerHTML = "🏠 Powering: <b>" + homes + " Homes</b>";
    
    // Make the turbine spin faster for higher wind speeds
    let duration = 40 / windSpeed; 
    turbine.style.animationDuration = duration + "s";
}