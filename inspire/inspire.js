const quote = document.querySelector("#quote")
const author = document.querySelector("#author")


async function getQuote() {

//     fetch("https://cors-anywhere.herokuapp.com/https://healthruwords.p.rapidapi.com/v1/quotes/?t=Wisdom&maxR=1&size=medium&id=731", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "healthruwords.p.rapidapi.com",
// 		"x-rapidapi-key": "6998f8e074msh898d87563eaa668p1a474fjsn9de3fa1f73db"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

    // if (data === "") {
    //     alert("This field cannot be empty. Please type the name of the city.")
    // } else if (!isNaN(data)) {
    //     alert("Please type the name of the city. Numbers are not accepted.")
    // } else {
        // const fetched = await fetch("https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/random")
        const fetched = await fetch("https://type.fit/api/quotes")
        const resp = await fetched.json()
        console.log(resp)
        let chosenQuote = Math.round(Math.random() * resp.length)
        console.log(resp.length)
        console.log(resp[chosenQuote])
        // console.log(resp[0].a)
        // console.log(resp[0].q)
        // quote.innerHTML = resp[0].q
    // }

    
}

const btn = document.querySelector("#btn")
    btn.addEventListener("click", () => {
        getQuote()
    })