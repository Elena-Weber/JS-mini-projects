const search = document.querySelector("#search")
const brand = document.querySelector("#brand")
const perf = document.querySelectorAll(".perf")
const notFound = document.querySelector("#not_found")

search.addEventListener("keyup", (event) => {
    const word = event.target.value.toLowerCase();
    perf.forEach(item => {
        item.querySelector("h4").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none") && (notFound.style.display = "block");
    })
})

brand.addEventListener("keyup", (event) => {
    const word = event.target.value.toLowerCase();
    perf.forEach(item => {
        item.querySelector("span").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none") && (notFound.style.display = "block");
    })
})