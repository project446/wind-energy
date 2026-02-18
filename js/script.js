const btn = document.getElementById('toggleBtn');
const turbine = document.getElementById('windmill');
const msg = document.getElementById('statusMsg');

btn.addEventListener('click', function() {
    // This adds the "spinning-now" class from your CSS
    turbine.classList.toggle('spinning-now');

    if (turbine.classList.contains('spinning-now')) {
        btn.textContent = "Stop Turbine";
        msg.textContent = "🌬️ Turbine Active: Generating Electricity!";
    } else {
        btn.textContent = "Activate Turbine";
        msg.textContent = "⏸️ Turbine Stopped.";
    }
});

<image>download.jfif</image>