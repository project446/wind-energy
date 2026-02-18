document.getElementById('energyBtn').addEventListener('click', function() {
    const status = document.getElementById('statusTextText');
    const windSpeed = Math.floor(Math.random() * 25) + 5; // Simulates wind speed
    
    status.innerHTML = `Current Wind Speed: <strong>${windSpeed} mph</strong>. Generating enough power for ${windSpeed * 12} homes!`;
    status.style.color = "#4CAF50";
    status.style.marginTop = "15px";
});