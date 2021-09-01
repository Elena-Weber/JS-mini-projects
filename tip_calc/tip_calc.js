const btn = document.querySelector("#calc");
btn.addEventListener("click", calculate);

function calculate(event) {
    event.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "" || people <=0 || bill <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, enter the necessary information',
        })
    }
    let billPerPerson = bill/people;
    let tipPerPerson = (bill * tip) / people;
    let totalPerPerson = billPerPerson + tipPerPerson;
console.log(billPerPerson);
console.log(tipPerPerson);
console.log(totalPerPerson);

document.querySelector("#billPerPerson").textContent = billPerPerson.toFixed(2);
document.querySelector("#tipPerPerson").textContent = tipPerPerson.toFixed(2);
document.querySelector("#totalPerPerson").textContent = totalPerPerson.toFixed(2);

}