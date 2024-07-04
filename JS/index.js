"use strict";

let hour = 0;
let min = 0;
let sec = 0;
let count = 0;
let id = null; 

document.querySelector(".start").addEventListener("click", function () {
    document.querySelector(".stop").removeAttribute("disabled");
    this.setAttribute("disabled", "");

    if (id !== null) clearInterval(id); 

    id = setInterval(() => {
        count++;
        if (count == 100) {
            sec++;
            count = 0;
            if (sec == 60) {
                min++;
                sec = 0;
            }
            if (min == 60) {
                hour++;
                min = 0;
            }
        }

        let secStr = sec < 10 ? "0" + sec : sec;
        let minStr = min < 10 ? "0" + min : min;
        let hourStr = hour < 10 ? "0" + hour : hour;
        let countStr = count < 10 ? "0" + count : count;

        document.getElementById("sec").innerHTML = secStr;
        document.getElementById("min").innerHTML = minStr;
        document.getElementById("hour").innerHTML = hourStr;
        document.getElementById("count").innerHTML = countStr;
    }, 10);
});

document.querySelector(".stop").addEventListener("click", function () {
    document.querySelector(".reset").removeAttribute("disabled");
    document.querySelector(".start").removeAttribute("disabled");
    this.setAttribute("disabled", "");

    clearInterval(id); 
    id = null; 
});

document.querySelector(".reset").addEventListener("click", function () {
    this.setAttribute("disabled", "");
    document.querySelector(".start").removeAttribute("disabled");
    document.querySelector(".stop").setAttribute("disabled", "");

    hour = 0;
    min = 0;
    sec = 0;
    count = 0;

    document.getElementById("count").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("hour").innerHTML = "00";

    clearInterval(id); 
    id = null; 
});
