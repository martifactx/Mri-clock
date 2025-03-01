const timerDisplay = document.getElementById('timer');
const digits = document.querySelectorAll('.digit');
let timeInSeconds = 0;
let timerId = null;
let isRunning = false;

function updateDisplay() {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    
    const timeString = 
        String(hours).padStart(2, '0') + 
        String(minutes).padStart(2, '0') + 
        String(seconds).padStart(2, '0');
    
    digits.forEach((digit, index) => {
        digit.textContent = timeString[index];
    });
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timerId = setInterval(() => {
            timeInSeconds++;
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timerId);
    isRunning = false;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    updateDisplay();
}

document.getElementById('startBtn').addEventListener('click', startTimer);
document.getElementById('stopBtn').addEventListener('click', stopTimer);
document.getElementById('resetBtn').addEventListener('click', resetTimer);

// Initial display setup
updateDisplay();