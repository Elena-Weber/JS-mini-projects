function countDown() {
    const XDate = new Date("December 25, 2021 00:00");
    const now = newDate();
    const diff = XDate - now;

    const msSec = 1000;
    const msMinute = 60 * 1000;
    const msHour = 60 * 60 * 1000;
    const msDay = 24 * 60 * 60 * 1000;

    const displaySeconds = Math.floor(diff/msSec);
    document.querySelector(".seconds").textContent = displayHours;

    const displayMinutes = Math.floor(diff/msMinute);
    document.querySelector(".minutes").textContent = displayHours;

    const displayHours = Math.floor(diff/msHour);
    document.querySelector(".hours").textContent = displayHours;

    const displayDays = Math.floor(diff/msDay);
    document.querySelector(".days").textContent = displayDays;


}