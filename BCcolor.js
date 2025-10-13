const colorPicker = document.getElementById('color-picker');
        const coloredElement = document.querySelector('html');

        colorPicker.addEventListener('input', (event) => {
            coloredElement.style.backgroundColor = event.target.value;
        });