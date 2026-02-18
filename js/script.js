// Wait for the button to be clicked
document.getElementById('actionBtn').addEventListener('click', function() {
    const windmill = document.getElementById('windmillImg');
    const report = document.getElementById('statusReport');
    
    // Toggle the "spinning" class from the CSS
    windmill.classList.toggle('spinning');
    
    // Update the text
    if (windmill.classList.contains('spinning')) {
        this.textContent = "Stop Turbine";
        report.innerHTML = "🌬️ Status: Active <br> Generating Clean Power...";
    } else {
        this.textContent = "Activate Turbine";
        report.innerHTML = "⏸️ Status: Standby";
    }
});