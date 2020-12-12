//Set Time:
let show_hour = document.querySelector(".hour");
let show_minutes = document.querySelector(".minutes");

function updateTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    show_hour.innerText = hour;
    show_minutes.innerText = minutes;
}
updateTime();
setInterval(updateTime, 1000);

//Change Theme:
function theme() {
    if (document.body.style.background == "white") {
        document.body.style.background = "linear-gradient(45deg, #CCFFFF, #FFCCCC)";
    } else {
        document.body.style.background = "white";
    }
}

//Calculator:
let screenDisplay = document.querySelector(".input");

function input(value) {
    if (screenDisplay.innerText == 0) {
        screenDisplay.innerText = "";
    }
    screenDisplay.innerText += value;
    console.log(screenDisplay.innerText);
}

function reset() {
    screenDisplay.innerText = 0;
}

function equal() {
    let result = screenDisplay.innerText.replaceAll("×", "*").replaceAll("–", "-").replaceAll("÷", "/");
    screenDisplay.innerText = eval(result).toFixed(2).replace(/\.?0*$/g,'');
    console.log(result);
}


