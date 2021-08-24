function countDown() {
    const xDate = new Date("December 25, 2021 00:00");
    const nyDate = new Date("December 31, 2021 00:00");
    const now = new Date();
    const diffX = xDate - now;
    const diffNY = nyDate - now;

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
        clearInterval(timerID);
        merryXmas();
    } else if (diffNY <= 0) {
        document.querySelector(".secondsNY").textContent = 0;
        document.querySelector(".minutesNY").textContent = 0;
        document.querySelector(".hoursNY").textContent = 0;
        document.querySelector(".daysNY").textContent = 0;
        clearInterval(timerID);
        happyNewYear();
    }

    const displaySecondsNY = Math.floor((diffNY%msMinute)/msSec);
    document.querySelector(".secondsNY").textContent = displaySecondsNY;

    const displayMinutesNY = Math.floor((diffNY%msHour)/msMinute);
    document.querySelector(".minutesNY").textContent = displayMinutesNY;

    const displayHoursNY = Math.floor((diffNY%msDay)/msHour);
    document.querySelector(".hoursNY").textContent = displayHoursNY;

    const displayDaysNY = Math.floor(diffNY/msDay);
    document.querySelector(".daysNY").textContent = displayDaysNY;

}

function merryXmas() {
    const heading = document.querySelector(".headingX");
    heading.textContent = "Merry Christmas!";
}

function happyNewYear() {
    const heading = document.querySelector(".headingNY");
    heading.textContent = "Happy New Year!";
}

let timerID = setInterval(countDown, 1000);