let initial = '';

const userInput = document.getElementById('user_input');

const result = document.getElementById('result');

function calc(val) {
    initial += val;
    userInput.value = initial;
}

function remove() {
    initial = initial.substring(0, initial.length - 1);
    userInput.value = initial;
}

function execute() {
    if (initial.length === 0 || initial === "") {
        alert("Oops! There's nothing to calculate. Please, try again!");
        return;
    }
    try {
        answer = eval(initial);
        result.value = answer;
    }
    catch(err) {
        alert("There's an error in your input. Please, try again!");
    }
}

function reset() {
    userInput.value = '';
    result.value = '';
    initial = '';
}