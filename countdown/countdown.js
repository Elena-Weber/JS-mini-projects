function countDownX() {
    // const xDate = new Date("December 25, 2021 00:00");
    const xDate = new Date("August 24, 2021 12:46");
    const now = new Date();
    const diffX = xDate - now;

    const msSec = 1000;
    const msMinute = 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    const displaySecondsX = Math.floor((diffX%msMinute)/msSec);
    document.querySelector(".secondsX").textContent = displaySecondsX;

    const displayMinutesX = Math.floor((diffX%msHour)/msMinute);
    document.querySelector(".minutesX").textContent = displayMinutesX;

    const displayHoursX = Math.floor((diffX%msDay)/msHour);
    document.querySelector(".hoursX").textContent = displayHoursX;

    const displayDaysX = Math.floor(diffX/msDay);
    document.querySelector(".daysX").textContent = displayDaysX;

    if (diffX <= 0) {
        document.querySelector(".secondsX").textContent = 0;
        document.querySelector(".minutesX").textContent = 0;
        document.querySelector(".hoursX").textContent = 0;
        document.querySelector(".daysX").textContent = 0;
        clearInterval(timerX);
        merryXmas();
    }

}

function countDownNY() {
    // const nyDate = new Date("January 1, 2022 00:00");
    const nyDate = new Date("August 24, 2021 12:46");
    const now = new Date();
    const diffNY = nyDate - now;

    const msSec = 1000;
    const msMinute = 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    const displaySecondsNY = Math.floor((diffNY%msMinute)/msSec);
    document.querySelector(".secondsNY").textContent = displaySecondsNY;

    const displayMinutesNY = Math.floor((diffNY%msHour)/msMinute);
    document.querySelector(".minutesNY").textContent = displayMinutesNY;

    const displayHoursNY = Math.floor((diffNY%msDay)/msHour);
    document.querySelector(".hoursNY").textContent = displayHoursNY;

    const displayDaysNY = Math.floor(diffNY/msDay);
    document.querySelector(".daysNY").textContent = displayDaysNY;

    if (diffNY <= 0) {
        document.querySelector(".secondsNY").textContent = 0;
        document.querySelector(".minutesNY").textContent = 0;
        document.querySelector(".hoursNY").textContent = 0;
        document.querySelector(".daysNY").textContent = 0;
        clearInterval(timerNY);
        happyNewYear();
    }
}

function merryXmas() {
    const heading = document.querySelector(".headingX");
    heading.textContent = "Merry Christmas!";
}

function happyNewYear() {
    const heading = document.querySelector(".headingNY");
    heading.textContent = "Happy New Year!";
}

let timerX = setInterval(countDownX, 1000);
let timerNY = setInterval(countDownNY, 1000);

const xBtn = document.querySelector(".xBtn");
xBtn.addEventListener("click", () => {
    document.querySelector(".xSong").play();
})
xBtn.addEventListener("dblclick", () => {
    document.querySelector(".xSong").pause();
})

const nyBtn = document.querySelector(".nyBtn");
nyBtn.addEventListener("click", () => {
    document.querySelector(".nySong").play();
})
nyBtn.addEventListener("dblclick", () => {
    document.querySelector(".nySong").pause();
})