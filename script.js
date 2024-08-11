function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLast() {
    document.calc.display.value = document.calc.display.value.toString().slice(0, -1);
}

function appendCharacter(character) {
    document.calc.display.value += character;
}

function calculate() {
    try {
        document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
        alert('Invalid expression');
        document.calc.display.value = '';
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}
