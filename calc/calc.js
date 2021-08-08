let initial = ''
const userInput = document.getElementById('user_input')
const result = document.getElementById('result')
function calc(value) {
    initial += value;
    userInput.value = initial;
}
function remove() {
    initial = initial.substring(0, initial.length - 1);
    userInput.value = initial;
}
function execute() {
    if (initial.length == 0 || initial == "") {
        alert("Oops! There's nothing to calculate. Try again!");
        return;
    }
    try {
        answer = eval(initial);
        result.value = answer;
    }
    catch(err) {
        alert("Invalid Input");
    }
}
function reset() {
    userInput.value = '';
    result.value = '';
    initial = '';
}