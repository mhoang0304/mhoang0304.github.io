//Set Time:
let show_hour = document.querySelector(".hour");
let show_minutes = document.querySelector(".minutes");

function updateTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();

    show_hour.innerText = hour;
    show_minutes.innerText = minutes;
}

setInterval(updateTime, 1000);

//Calculator:
let input = document.querySelector(".input");
let items = Array.from(document.querySelectorAll(".item"));
let string = "";

items.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (input.innerHTML == "0") {
            input.innerHTML = "";
        }
        if (btn.innerHTML == "AC") {
            input.innerHTML = "0";
            string = "";
        } else if (btn.innerHTML == "DEL") {
            let arrText = Array.from(input.innerHTML);
            arrText.splice(arrText.length - 1, 1);
            if (arrText.length != 0) {
                input.innerHTML = arrText.join("");
            } else {
                input.innerHTML = "0";
            }
        } else if (btn.value == "=") {
            input.innerHTML = eval(string).toFixed(2).replace(/\.?0*$/g,'');
        } else {
            input.innerHTML += btn.innerHTML;
            string += btn.value;
            console.log(string);
        }
    })
})

//Change Theme:

function theme() {
    if(document.body.style.background == "white") {
        document.body.style.background = "linear-gradient(45deg, #CCFFFF, #FFCCCC)";
    } else {
        document.body.style.background = "white";
    }
}




