let userInput = document.getElementById('userInput');

let result = document.getElementById('result');

let calc = (val) => {
    userInput.value += val;
}
let execute = () => {
    if (userInput.value.length === 0 || userInput.value === "") {
        alert("Oops! There's nothing to calculate. Please, try again!");
        return;
    }
    try {
        result.value = eval(userInput.value);
    }
    catch(err) {
        alert("There's an error in your input. Please, try again!");
    }
}
function reset() {
    userInput.value = '';
        result.value = '';
    }
function remove() {
    userInput.value = userInput.value.slice(0, -1);
    if (userInput.value.length === 0 || userInput.value === "") {
        result.value = '';
    }
}