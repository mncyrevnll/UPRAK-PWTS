// MODE SWITCHER
const clockSection = document.getElementById("clock");
const pomoSection = document.getElementById("pomodoro");
const stopwatchSection = document.getElementById("stopwatch");

const modeBtns = {
    clock: document.getElementById("modeClock"),
    pomo: document.getElementById("modePomodoro"),
    stopwatch: document.getElementById("modeStopwatch")
};

function switchMode(mode) {
    // Hide all
    clockSection.classList.add("hidden");
    pomoSection.classList.add("hidden");
    stopwatchSection.classList.add("hidden");

    // Remove all active
    for (let btn in modeBtns) {
        modeBtns[btn].classList.remove("active");
    }

    // Show selected
    if (mode === "clock") clockSection.classList.remove("hidden");
    if (mode === "pomo") pomoSection.classList.remove("hidden");
    if (mode === "stopwatch") stopwatchSection.classList.remove("hidden");

    modeBtns[mode].classList.add("active");
}

modeBtns.clock.onclick = () => switchMode("clock");
modeBtns.pomo.onclick = () => switchMode("pomo");
modeBtns.stopwatch.onclick = () => switchMode("stopwatch");

// CLOCK
function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    document.getElementById("hour").textContent = String(hour).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("second").textContent = String(seconds).padStart(2, "0");
    document.getElementById("ampm").textContent = ampm;
}
setInterval(updateClock, 1000);
updateClock();

// POMODORO
let pomoTime = 25 * 60;
let pomoInterval;
const pomoDisplay = document.getElementById("pomoDisplay");

function updatePomoDisplay() {
    const min = Math.floor(pomoTime / 60);
    const sec = pomoTime % 60;
    pomoDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

document.getElementById("startPomo").onclick = () => {
    clearInterval(pomoInterval);
    pomoInterval = setInterval(() => {
        if (pomoTime > 0) {
            pomoTime--;
            updatePomoDisplay();
        } else {
            clearInterval(pomoInterval);
            alert("Pomodoro selesai! Waktunya istirahat.");
        }
    }, 1000);
};

document.getElementById("resetPomo").onclick = () => {
    clearInterval(pomoInterval);
    pomoTime = 25 * 60;
    updatePomoDisplay();
};

updatePomoDisplay();

// STOPWATCH
let stopwatchTime = 0;
let stopwatchRunning = false;
let stopwatchInterval;
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

function updateStopwatchDisplay() {
    const hours = Math.floor(stopwatchTime / 3600);
    const minutes = Math.floor((stopwatchTime % 3600) / 60);
    const seconds = stopwatchTime % 60;
    stopwatchDisplay.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

document.getElementById("startStopwatch").onclick = () => {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            updateStopwatchDisplay();
        }, 1000);
    }
};

document.getElementById("stopStopwatch").onclick = () => {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
};

document.getElementById("resetStopwatch").onclick = () => {
    stopwatchRunning = false;
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    updateStopwatchDisplay();
};

updateStopwatchDisplay();
