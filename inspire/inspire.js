const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
let result;

window.addEventListener('load', () => {
    getQuote()
})

async function getQuote() {
        const fetched = await fetch("https://type.fit/api/quotes")
        const resp = await fetched.json()
        result = await resp
        // console.log(result)
}

let displayQuote = () => {
    let chosenQuote = Math.round(Math.random() * result.length)
    let quoteAuthor = result[chosenQuote].author
    if (quoteAuthor === null) {
        quoteAuthor = "unknown"
    }
    quote.innerHTML = result[chosenQuote].text
    author.innerHTML = "Source: " + quoteAuthor
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    displayQuote()
})