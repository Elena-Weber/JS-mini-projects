const search = document.querySelector("#search");
const perf = document.querySelectorAll(".perf");

search.addEventListener("keyup", (event) => {
    const word = event.target.value.toLowerCase();

    perf.forEach(item => {
        item.querySelector("h4").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
        console.log();
    })
    
})

