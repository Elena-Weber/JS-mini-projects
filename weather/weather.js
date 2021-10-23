// if !empty or !isNaN, fetch data about weather
async function getInfo(data) {
    if (data === "") {
        alert("This field cannot be empty. Please type the name of the city.")
    } else if (!isNaN(data)) {
        alert("Please type the name of the city. Numbers are not accepted.")
    } else {
        const fetched = await fetch(`${api.endpoint}weather?q=${data}&units=imperial&APPID=${api.key}`)
        const res = await fetched.json()
        // inform if there is no such city, otherwise display the city weather
        if (res.cod === "404") {
            noCity()
        } else {
            displayRes(res);
            yesCity()
        }
    }

    // DID NOT FIGURE OUT WHAT TO DO WITH THIS BUT IT WORKS

    // const picture = document.createElement("img")UT IT IS WORKING
    // const weather = document.querySelector("#weather").textContent
    // if (weather.includes("clouds")) {
    //     console.log("clouds")
    // picture.src = "..."
    // picture.alt = "clods"
    // } else if (weather.includes("snow")) {
    //     console.log("snow")
    // picture.src = "..."
    // picture.alt = "clods"
    // } else if (weather.includes("clear")) {
        // picture.src = "..."
    // picture.alt = "clods"
    //     console.log("clear")
    // } else if (weather.includes("rain")) {
    //     console.log("rain")
    // picture.src = "..."
    // picture.alt = "clods"
    // } else {
    //     console.log("misc")
}

// display weather details section
let displayRes = res => {
    date();

    let city = document.querySelector("#city")
    let temperature = document.querySelector("#temperature")
    let feels = document.querySelector("#feels")
    let min_max = document.querySelector("#min_max")
    let weather = document.querySelector("#weather")
    let humidity = document.querySelector("#humidity")
    let wind_section = document.querySelector("#wind_section")
    let wind = res.wind.deg
    let weatherIcon = document.querySelector("#image")

    //figure out weather direction by degree
    if (wind > 11.25 && wind <= 33.75) {
        wind = "NNE"
    } else if (wind > 33.75 && wind <= 56.25) {
        wind = "NE"
    } else if (wind > 56.25 && wind <= 78.75) {
        wind = "ENE"
    } else if (wind > 78.75 && wind <= 101.25) {
        wind = "E"
    } else if (wind > 101.25 && wind <= 123.75) {
        wind = "ESE"
    } else if (wind > 123.75 && wind <= 146.25) {
        wind = "SE"
    } else if (wind > 146.25 && wind <= 168.75) {
        wind = "SSE"
    } else if (wind > 168.75 && wind <= 191.25) {
        wind = "S"
    } else if (wind > 191.25 && wind <= 213.75) {
        wind = "SSW"
    } else if (wind > 213.75 && wind <= 236.25) {
        wind = "SW"
    } else if (wind > 236.25 && wind <= 258.75) {
        wind = "WSW"
    } else if (wind > 258.75 && wind <= 281.25) {
        wind = "W"
    } else if (wind > 281.25 && wind <= 303.75) {
        wind = "WNW"
    } else if (wind > 303.75 && wind <= 326.25) {
        wind = "NW"
    } else if (wind > 326.25 && wind <= 348.75) {
        wind = "NNW"
    } else {
        wind = "N"
    }

    let country = res.sys.country
    city.textContent = "Location: " + `${res.name}, ${country}`
    temperature.innerHTML = "Temperature: " + `${Math.round(res.main.temp)}` + "°F" + " / " + `${Math.round((res.main.temp-32)*0.5556)}` + "°C"
    feels.innerHTML = "Feels like: " + `${Math.round(res.main.feels_like)}` + "°F" + " / " + `${Math.round((res.main.feels_like-32)*0.5556)}` + "°C"
    min_max.innerHTML = "Min: " + `${Math.round(res.main.temp_min)}` + "°F" + " / " + `${Math.round((res.main.temp_min-32)*0.5556)}` + "°C" + " || " + "Max: " + `${Math.round(res.main.temp_max)}` + "°F" + " / " + `${Math.round((res.main.temp_max-32)*0.5556)}` + "°C"
    weather.textContent = "Conditions: " + `${res.weather[0].description}`
    wind_section.textContent = "Wind: " + `${wind}, ${Math.round(res.wind.speed)}` + " miles/hour"
    humidity.textContent = "Humidity: " + `${res.main.humidity}%`
    weatherIcon.src = "http://openweathermap.org/img/wn/" + `${res.weather[0].icon}` + "@2x.png"

    // send country to holidays API
    apiHolidays(country)
}

// what to when no city is found
const noCity = () => {
    let note = document.querySelector("#no_city")
    note.style.display = "block"
    let properties = document.querySelector("#properties")
    properties.style.display = "none"
    let holidays = document.querySelector(".holiday")
    holidays.style.display = "none"
}

// what to do when the city is found
const yesCity = () => {
    let note = document.querySelector("#no_city")
    note.style.display = "none"
    let properties = document.querySelector("#properties")
    properties.style.display = "block"
    let holidays = document.querySelector(".holiday")
    holidays.style.display = "block"
}

// what to do when Enter is pressed (hint: start validation and fetch)
let enter = (event) => {
    if (event.keyCode === 13) {
        getInfo(input.value);
        input.value = ""
    }
}

// what to do when button is clicked (hint: start validation and fetch)
let btn = () => {
    getInfo(input.value);
    input.value = "";
    document.querySelector("input").focus()
}

// listening for button click and key hitting
const input = document.querySelector("#input")
input.addEventListener("keypress", enter)
search = document.querySelector("#search")
search.addEventListener("click", btn)

// displaying and formatting date
let date = () => {
    const day = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = days[day.getDay()];
    let today = day.getDate();
    let month = document.querySelector("#date").innerHTML = months[day.getMonth()];
    let year = day.getFullYear();
    let displayDate = document.querySelector("#date");
    displayDate.innerHTML = `${date}` + " " + `${month}` + " " + `${today}` + ", " + `${year}`;
}

// fetching holidays for the country and formatting data
async function apiHolidays(country) {
    let hols = document.querySelector(".holiday")
    hols.innerHTML = ""
    const hol = "https://calendarific.com/api/v2/holidays?&api_key=acdb2623ea9e104cd44f12da479c5d188225df0a&type=national&year=2021&country"
    const fetched = await fetch(`${hol}=${country}`)
    const res = await fetched.json()
    
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    for (let holiday of res.response.holidays) {
        let name = holiday.name
        let month = holiday.date.datetime.month
        let calMonth = months[month-1]
        let date = holiday.date.datetime.day
        let item = document.createElement("li")
        item.innerHTML = calMonth + " " + date + " - " + name
        hols.appendChild(item)
    }
}