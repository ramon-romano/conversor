document.addEventListener('DOMContentLoaded', function () {
    let celsiusInput = document.getElementById('celsius');
    let fahrenheitInput = document.getElementById('fahrenheit');
    let resultadoDiv = document.getElementById('resultado');
    let calculateButton = document.getElementById('calculatorButton');

    calculateButton.addEventListener('click', function () {
        let celsiusValue = parseFloat(celsiusInput.value);
        let fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsiusValue) && isNaN(fahrenheitValue)) {
            let fahrenheitResult = (celsiusValue * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheitResult;
            resultadoDiv.textContent = `Resultado: ${celsiusValue}°C é igual a ${fahrenheitResult}°F`;
        }
        else if (!isNaN(fahrenheitValue) && isNaN(celsiusValue)) {
            let celsiusResult = (fahrenheitValue - 32) * 5 / 9;
            celsiusInput.value = celsiusResult;
            resultadoDiv.textContent = `Resultado: ${fahrenheitValue}°F é igual a ${celsiusResult}°C`;
        } 

        else if (!isNaN(celsiusValue) && !isNaN(fahrenheitValue)) {
            let celsiusToFahrenheit = (celsiusValue * 9 / 5) + 32;
            let fahrenheitToCelsius = (fahrenheitValue - 32) * 5 / 9;
            
            if (Math.abs(celsiusValue - fahrenheitToCelsius) > 0.01) {
                fahrenheitInput.value = celsiusToFahrenheit;
                resultadoDiv.textContent = `Resultado: ${celsiusValue}°C é igual a ${celsiusToFahrenheit}°F`;
            } else {
                celsiusInput.value = fahrenheitToCelsius;
                resultadoDiv.textContent = `Resultado: ${fahrenheitValue}°F é igual a ${fahrenheitToCelsius}°C`;
            }
        }
        else {
            resultadoDiv.textContent = "Por favor, insira um valor válido!";
        }
    });
});
