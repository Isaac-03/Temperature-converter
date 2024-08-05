let lastChanged = '';

        function setLastChanged(field) {
            lastChanged = field;
        }

        function convert() {
            let celsius = document.getElementById('celsius');
            let fahrenheit = document.getElementById('fahrenheit');
            let result = document.getElementById('result');

            if (celsius.value !== '' && fahrenheit.value !== '') {
                if (lastChanged === 'celsius' || lastChanged === '') {
                    let f = (parseFloat(celsius.value) * 9/5) + 32;
                    fahrenheit.value = f.toFixed(2);
                    result.textContent = celsius.value + '°C is ' + f.toFixed(2) + '°F';
                } else {
                    let c = (parseFloat(fahrenheit.value) - 32) * 5/9;
                    celsius.value = c.toFixed(2);
                    result.textContent = fahrenheit.value + '°F is ' + c.toFixed(2) + '°C';
                }
            } else if (celsius.value !== '') {
                let f = (parseFloat(celsius.value) * 9/5) + 32;
                fahrenheit.value = f.toFixed(2);
                result.textContent = celsius.value + '°C is ' + f.toFixed(2) + '°F';
            } else if (fahrenheit.value !== '') {
                let c = (parseFloat(fahrenheit.value) - 32) * 5/9;
                celsius.value = c.toFixed(2);
                result.textContent = fahrenheit.value + '°F is ' + c.toFixed(2) + '°C';
            } else {
                result.textContent = 'Please enter a temperature to convert';
            }
        }