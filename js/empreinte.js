function CarbEmpreint() {
    bd = document.getElementById('bd')
    bd.innerHTML = `
    <h1>Calculateur d'empreinte carbone</h1>
    
    <label for="transport">Distance de transport quotidienne (en km) :</label>
    <input type="number" id="transport" placeholder="0"><br>
    
    <label for="energy">Consommation d'énergie mensuelle (en kWh) :</label>
    <input type="number" id="energy" placeholder="0"><br>
    
    <label for="food">Consommation alimentaire quotidienne (en kg) :</label>
    <input type="number" id="food" placeholder="0"><br>
    
    <button onclick="calculateCarbonFootprint()">Calculer</button>
    
    <h2>Résultat :</h2>
    <p id="result">Votre empreinte carbone est :</p>
    `;
}

function calculateCarbonFootprint() {
    const transport = parseFloat(document.getElementById('transport').value) || 0;
    const energy = parseFloat(document.getElementById('energy').value) || 0;
    const food = parseFloat(document.getElementById('food').value) || 0;

    const transportCoefficient = 0.1;
    const energyCoefficient = 0.5;
    const foodCoefficient = 0.3;

    const carbonFootprint = (transport * transportCoefficient) + (energy * energyCoefficient) + (food * foodCoefficient);

    document.getElementById('result').innerText = `Votre empreinte carbone est : ${carbonFootprint.toFixed(2)} kg CO2e par jour`;
}
