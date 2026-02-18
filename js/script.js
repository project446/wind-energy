function calculatePower() {
    const speed = document.getElementById('speedInput').value;
    const resultElement = document.getElementById('result');

    if (speed <= 0) {
        resultElement.innerText = "The air is still. No power generated.";
    } else if (speed > 0 && speed < 8) {
        resultElement.innerText = "Light breeze. Minimal energy production.";
    } else if (speed >= 8 && speed <= 25) {
        resultElement.innerText = "Ideal conditions! High energy efficiency.";
    } else {
        resultElement.innerText = "Warning: Wind speed too high. Turbines may shut down for safety.";
    }
}