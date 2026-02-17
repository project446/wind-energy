// Function to calculate Power: P = 0.5 * rho * A * v^3 * Cp
function calculateWindPower(speed) {
    const rho = 1.225; // Air density at sea level
    const area = 8000; // Swept area of a large turbine
    const cp = 0.45;   // Efficiency
    
    // Power increases by the CUBE of wind speed (v^3)
    let power = 0.5 * rho * area * Math.pow(speed, 3) * cp;
    return (power / 1000000).toFixed(2); // Convert to Megawatts
}

console.log("At 12m/s, turbine produces: " + calculateWindPower(12) + " MW");