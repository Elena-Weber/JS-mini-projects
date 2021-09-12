const btn = document.querySelector(".btn");
const answers = document.querySelector("#answers");

const options = ["It is certain.",
"Reply hazy, try again.",
"It is decidedly so.",
"Don't count on it.",
"Without a doubt.",
"Ask again later.",
"Yes definitely.",
"My reply is no.",
"You may rely on it.",
"Better not tell you now.",
"As I see it, yes.",
"My sources say no.",
"Most likely.",
"Cannot predict now.",
"Outlook good.",
"Outlook not so good.",
"Yes.",
"Concentrate and ask again.",
"Signs point to yes.",
"Very doubtful."
];

btn.addEventListener("click", () => {
    let randomAnswer = options[Math.floor(Math.random() * options.length)];
    
})