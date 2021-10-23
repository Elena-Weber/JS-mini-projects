const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
let result; //this is needed to save data fetched from API

window.addEventListener('load', () => {
    getQuote() // send fetch request immediately after page has been loaded in browser
})

async function getQuote() { // get data from API
    const fetched = await fetch("https://type.fit/api/quotes")
    const resp = await fetched.json()
    result = await resp // set this array to variable above
}

let displayQuote = () => {
    let chosenQuote = Math.round(Math.random() * result.length) // generate random number that will be used as index for quotes array
    let quoteAuthor = result[chosenQuote].author // set author of quote with index
    if (quoteAuthor === null) {
        quoteAuthor = "unknown" // if author is null
    }
    quote.innerHTML = result[chosenQuote].text // display random quote using index
    author.innerHTML = "Source: " + quoteAuthor // display author of this quote
}

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    displayQuote() // trigger function on button click
})