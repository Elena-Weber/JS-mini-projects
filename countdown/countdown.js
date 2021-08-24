function countDown() {
    // const XDate = new Date("December 25, 2021 00:00");
    const XDate = new Date("August 23, 2021 22:54");
    const now = new Date();
    const diff = XDate - now;

    const msSec = 1000;
    const msMinute = 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    const displaySeconds = Math.floor((diff%msMinute)/msSec);
    document.querySelector(".seconds").textContent = displaySeconds;

    const displayMinutes = Math.floor((diff%msHour)/msMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displayHours = Math.floor((diff%msDay)/msHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayDays = Math.floor(diff/msDay);
    document.querySelector(".days").textContent = displayDays;

    if (diff <= 0) {
        document.querySelector(".seconds").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".days").textContent = 0;
        clearInterval(timerID);
        merryXmas();
    }
}

function merryXmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "Merry Christmas!";
    // console.log("Merry Christmas")
}
let timerID = setInterval(countDown, 1000);