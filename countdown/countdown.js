function countDown() {
    const XDate = new Date("December 25, 2021 00:00");
    const now = new Date();
    const diff = XDate - now;

    const msSec = 1000;
    const msMinute = 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    const displaySeconds = Math.floor((diff%msMinute)/msSec);
    document.querySelector(".seconds").textContent = displaySeconds;
    console.log(displaySeconds)

    const displayMinutes = Math.floor((diff%msHour)/msMinute);
    document.querySelector(".minutes").textContent = displayMinutes;

    const displayHours = Math.floor((diff%msDay)/msHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayDays = Math.floor(diff/msDay);
    document.querySelector(".days").textContent = displayDays;
}

setInterval(countDown, 1000);