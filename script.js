let counterValue = 0;

function updateCounterDisplay() {
    document.getElementById('counter').innerText = counterValue;
}

function increaseCounter() {
    counterValue++;
    updateCounterDisplay();
}

function decreaseCounter() {
    if (counterValue > 0) {
        counterValue--;
        updateCounterDisplay();
    }
}
