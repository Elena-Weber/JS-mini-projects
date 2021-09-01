const btn = document.querySelector("#calc");
btn.addEventListener("click", calculate);

function calculate(event) {
    event.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "") {
        alert("Error");
    }
    let billPerPerson = bill/people;
    let tipPerPerson = (bill * tip) / people;
    let totalPerPerson = billPerPerson + tipPerPerson;
console.log(billPerPerson);
console.log(tipPerPerson);
console.log(totalPerPerson);



}