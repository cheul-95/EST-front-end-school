const timer = document.querySelector(".timer");
const startButton = timer.querySelector(".start");
const pauseButton = timer.querySelector(".pause");
const resetButton = timer.querySelector(".reset");
const inputTime = document.querySelectorAll(".timer-number");
const inputSec = document.querySelector("#sec");
const inputMin = document.querySelector("#mins");
const inputHrs = document.querySelector("#hrs");
let inverter = null;
let timerInterval = 0;

resetButton.addEventListener("click", () => {
    clearInterval(inverter);
    inputTime.forEach((input) => {
        input.value = "00";
    });
    startButton.disabled = true;
    resetButton.disabled = true;
    pauseButton.disabled = true;
    startButton.style.display = "block";
    resetButton.style.display = "block";
    pauseButton.style.display = "none";
    inputTime.forEach((input) => {
        input.disabled = false;
    });
    timerInterval = 0;
});

startButton.addEventListener("click", () => {
    startButton.disabled = true;
    resetButton.disabled = false;
    pauseButton.disabled = false;
    startButton.style.display = "none";
    resetButton.style.display = "block";
    pauseButton.style.display = "block";
    inputTime.forEach((input) => {
        input.disabled = true;
    });
    inputTimeChange();
});

pauseButton.addEventListener("click", () => {
    pauseButton.disabled = true;
    startButton.disabled = false;
    resetButton.disabled = false;
    startButton.style.display = "block";
    resetButton.style.display = "block";
    pauseButton.style.display = "none";
    inputTime.forEach((input) => {
        input.disabled = true;
    });
    clearInterval(inverter);
});

inputHrs.addEventListener("change", () => {
    inputValidation(inputHrs);
    disabledButtons();
});
inputMin.addEventListener("change", () => {
    inputValidation(inputMin);
    if (inputMin.value > 59) {
        inputMin.value = 59;
    }
    disabledButtons();
});
inputSec.addEventListener("change", () => {
    inputValidation(inputSec);
    if (inputSec.value > 59) {
        inputSec.value = 59;
    }
    disabledButtons();
});
function inputTimeChange() {
    timerInterval = parseInt(inputSec.value) + parseInt(inputMin.value) * 60 + parseInt(inputHrs.value) * 3600;
    inverter = setInterval(() => {
        if (timerInterval > 0) {
            timerInterval--;
        } else {
            timerInterval = 0;
            clearInterval(inverter);
            startButton.disabled = true;
            resetButton.disabled = true;
            pauseButton.disabled = true;
            startButton.style.display = "block";
            resetButton.style.display = "block";
            pauseButton.style.display = "none";
            inputTime.forEach((input) => {
                input.disabled = false;
            });
        }
        inputHrs.value = Math.floor(timerInterval / 3600);
        inputValidation(inputHrs);
        inputMin.value = Math.floor((timerInterval % 3600) / 60);
        inputValidation(inputMin);
        if (inputMin.value > 59) {
            inputMin.value = 59;
        }
        inputSec.value = Math.floor(timerInterval % 60);
        inputValidation(inputSec);
        if (inputSec.value > 59) {
            inputSec.value = 59;
        }
        disabledButtons();
    }, 1000);
}
function inputValidation(value) {
    value.value = parseInt(value.value);
    if (value.value == "") {
        value.value = "0";
    }
    if (value.value < 10 && value.value >= 0) {
        value.value = "0" + value.value;
    }
}

function disabledButtons() {
    if (inputHrs.value >= 1 || inputSec.value >= 1 || inputMin.value >= 1) {
        startButton.disabled = false;
        resetButton.disabled = false;
    } else {
        startButton.disabled = true;
        resetButton.disabled = true;
    }
}
