const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert');
const resultParagraph = document.getElementById('result');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature(event) {
    event.preventDefault(); // Add this line to prevent the form from submitting
    const temperatureValue = parseFloat(temperatureInput.value);
    const unitValue = unitSelect.value;

    if (isNaN(temperatureValue)) {
        alert('Please enter a valid temperature value');
        return;
    }

    let convertedTemperature;

    switch (unitValue) {
        case 'Celsius':
            convertedTemperature = convertCelsiusToFahrenheit(temperatureValue);
            resultParagraph.textContent = `${temperatureValue}°C is equal to ${convertedTemperature}°F`;
            break;
        case 'Fahrenheit':
            convertedTemperature = convertFahrenheitToCelsius(temperatureValue);
            resultParagraph.textContent = `${temperatureValue}°F is equal to ${convertedTemperature}°C`;
            break;
        case 'Kelvin':
            convertedTemperature = convertKelvinToCelsius(temperatureValue);
            resultParagraph.textContent = `${temperatureValue}K is equal to ${convertedTemperature}°C`;
            break;
    }
}

function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function convertKelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}