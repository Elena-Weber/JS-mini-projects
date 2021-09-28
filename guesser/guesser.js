// the heading's animation
let text = "Try guessing the number";
let i = 0;
let speed = 100;

const type = () => {
    if (i < text.length) {
        document.querySelector(".enter").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

// variables for the game
const input = document.querySelector(".inputData");
const btn = document.querySelector(".btn");
const compNum = Math.floor(Math.random()*30+1);
const newGame = document.querySelector(".newGame");

//listening to the click on the button
btn.addEventListener("click", play);
input.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        play();
        input.value = "";
    }
})

// what to do depending on the input
function play () {
    const userNum = input.value;
    if (userNum < 1 || userNum > 30) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your number must be between 1 and 30. Try again or start a new game.'
        });
        input.value = "";
    } else if (isNaN(userNum)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Is this a number? Are you sure? Try again!'
        });
        input.value = "";
    } else {
        if (userNum < compNum) {
            Swal.fire('Too low. Try a higher number.');
            input.value = "";
        } else if (userNum > compNum) {
            Swal.fire('Too high. Try a lower number.');
            input.value = "";
        } else {
            Swal.fire({
                title: 'Yay! Number ' + userNum + ' is correct.',
                imageUrl: 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'winner',
            });
            btn.disabled = true;
        }
    }
}

// new game
newGame.addEventListener("click", () => {
    location.reload();
})