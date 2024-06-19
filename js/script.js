/* Ini JavasScript*/

/*ini function untuk mengkonversi suhu dari Celsius ke Fahrenheit.*/
function convertTemperature() {
    const celsiusInput = document.getElementById('celsius-input').value;
    const fahrenheitOutput = document.getElementById('fahrenheit-output');
    const calculationOutput = document.getElementById('calculation-output');

    if (isNaN(celsiusInput) || celsiusInput === '') {
        alert('Please enter a valid number');
        return;
    }

    const celsius = parseFloat(celsiusInput);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitOutput.value = fahrenheit.toFixed(2);

    calculationOutput.value = `${celsius}°C = (${celsius} * 9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}
/* Ini function untuk mereset form input dan output.*/
function resetForm() {
    document.getElementById('celsius-input').value = '';
    document.getElementById('fahrenheit-output').value = '';
    document.getElementById('calculation-output').value = '';
}

/* Ini function untuk membalikkan konversi dari Fahrenheit ke Celsius.*/
function reverseConversion() {
    const fahrenheitOutput = document.getElementById('fahrenheit-output').value;
    const celsiusInput = document.getElementById('celsius-input');
    const calculationOutput = document.getElementById('calculation-output');

    if (isNaN(fahrenheitOutput) || fahrenheitOutput === '') {
        alert('Please enter a valid number');
        return;
    }

    const fahrenheit = parseFloat(fahrenheitOutput);
    const celsius = (fahrenheit - 32) / 1.8;
    celsiusInput.value = celsius.toFixed(2);

    calculationOutput.value = `${fahrenheit}°F = (${fahrenheit} - 32) / 1.8 = ${celsius.toFixed(2)}°C`;
}
