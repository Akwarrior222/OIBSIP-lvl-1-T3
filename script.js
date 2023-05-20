document.getElementById('convertBtn').addEventListener('click', convertTemperature);

function convertTemperature() {
  var temperatureInput = document.getElementById('temperature').value;
  var unitInput = document.getElementById('unit').value;
  var convertedTemperature;
  var convertedUnit;

  if (isNaN(temperatureInput)) {
    document.getElementById('result').textContent = 'Invalid input! Please enter a number.';
    return;
  }

  var temperature = parseFloat(temperatureInput);

  if (unitInput === 'Celsius') {
    convertedTemperature = temperature * 9 / 5 + 32;
    convertedUnit = 'Fahrenheit';
  } else if (unitInput === 'Fahrenheit') {
    convertedTemperature = (temperature - 32) * 5 / 9;
    convertedUnit = 'Celsius';
  } else if (unitInput === 'Kelvin') {
    convertedTemperature = temperature - 273.15;
    convertedUnit = 'Celsius';
  }

  document.getElementById('result').textContent = 'Converted temperature: ' + convertedTemperature.toFixed(2) + ' ' + convertedUnit;
}
