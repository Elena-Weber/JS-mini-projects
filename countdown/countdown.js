// calculations
const msSec = 1000;
const msMinute = 60 * 1000;
const msHour = 60 * 60 * 1000;
const msDay = 24 * 60 * 60 * 1000;

// countdown till Xmas
function countDownX() {
    const xDate = new Date("December 25, 2022 00:00");
    const now = new Date();
    const diffX = xDate - now;
// seconds till Xmas
    const displaySecondsX = Math.floor((diffX % msMinute) / msSec);
    document.querySelector(".secondsX").textContent = displaySecondsX;
// minutes till Xmas
    const displayMinutesX = Math.floor((diffX % msHour) / msMinute);
    document.querySelector(".minutesX").textContent = displayMinutesX;
// hours till Xmas
    const displayHoursX = Math.floor((diffX % msDay) / msHour);
    document.querySelector(".hoursX").textContent = displayHoursX;
// hours till Xmas
    const displayDaysX = Math.floor(diffX / msDay);
    document.querySelector(".daysX").textContent = displayDaysX;
// what to do when time runs out
    if (diffX <= 0) {
        document.querySelector(".secondsX").textContent = 0;
        document.querySelector(".minutesX").textContent = 0;
        document.querySelector(".hoursX").textContent = 0;
        document.querySelector(".daysX").textContent = 0;
        clearInterval(timerX);
        merryXmas();
    }
}

// countdown till NY
function countDownNY() {
    const nyDate = new Date("January 1, 2023 00:00");
    const now = new Date();
    const diffNY = nyDate - now;
// seconds till NY
    const displaySecondsNY = Math.floor((diffNY % msMinute) / msSec);
    document.querySelector(".secondsNY").textContent = displaySecondsNY;
// minutes till NY
    const displayMinutesNY = Math.floor((diffNY % msHour) / msMinute);
    document.querySelector(".minutesNY").textContent = displayMinutesNY;
// hours till NY
    const displayHoursNY = Math.floor((diffNY % msDay) / msHour);
    document.querySelector(".hoursNY").textContent = displayHoursNY;
// days till NY
    const displayDaysNY = Math.floor(diffNY / msDay);
    document.querySelector(".daysNY").textContent = displayDaysNY;
// what to do when time runs out
    if (diffNY <= 0) {
        document.querySelector(".secondsNY").textContent = 0;
        document.querySelector(".minutesNY").textContent = 0;
        document.querySelector(".hoursNY").textContent = 0;
        document.querySelector(".daysNY").textContent = 0;
        clearInterval(timerNY);
        happyNewYear();
    }
}

// headings to display when time runs out
function merryXmas() {
    const heading = document.querySelector(".headingX");
    heading.textContent = "Merry Christmas!";
}
function happyNewYear() {
    const heading = document.querySelector(".headingNY");
    heading.textContent = "Happy New Year!";
}
// set timers to change every one second
let timerX = setInterval(countDownX, 1000);
let timerNY = setInterval(countDownNY, 1000);

// starts songs
const xBtn = document.querySelector(".xBtn");
xBtn.addEventListener("click", () => {
    document.querySelector(".xSong").play();
})
const nyBtn = document.querySelector(".nyBtn");
nyBtn.addEventListener("click", () => {
    document.querySelector(".nySong").play();
})

// stops songs
xBtn.addEventListener("dblclick", () => {
    document.querySelector(".xSong").pause();
})
nyBtn.addEventListener("dblclick", () => {
    document.querySelector(".nySong").pause();
})