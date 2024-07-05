let countdownInterval;
let remainingTime;
let isRunning = false;

document.getElementById('start-button').addEventListener('click', function() {
    const input = document.getElementById('time-input').value;
    if (!input || isNaN(input) || input <= 0) {
        alert('Please enter a valid number of seconds.');
        return;
    }

    if (!isRunning) {
        remainingTime = parseInt(input);
        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
        isRunning = true;
    }
});

document.getElementById('stop-button').addEventListener('click', function() {
    clearInterval(countdownInterval);
    isRunning = false;
});

document.getElementById('reset-button').addEventListener('click', function() {
    clearInterval(countdownInterval);
    remainingTime = 0;
    updateDisplay(0, 0);
    isRunning = false;
});

function updateCountdown() {
    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h2>Countdown Ended</h2>';
        isRunning = false;
        return;
    }

    remainingTime--;

    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    updateDisplay(minutes, seconds);
}

function updateDisplay(minutes, seconds) {
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}
