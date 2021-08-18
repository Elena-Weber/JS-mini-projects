const input = document.querySelector(".inputData");
const btn = document.querySelector(".btn");

btn.addEventListener("click", play);

function play() {
    const userNum = document.querySelector(".inputData").value;
    if (userNum < 1 || userNum > 30) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your number must be between 1 and 30. Try again!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    } else if (isNaN(userNum)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Is this a number? Are you sure? Try again!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
    }
}