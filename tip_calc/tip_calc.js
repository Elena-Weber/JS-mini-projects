const btn = document.querySelector("#calc");
btn.addEventListener("click", calculate);

const addTip = document.querySelector("#add_tip");
addTip.addEventListener("click", tipOptions);

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    location.reload();
});

function calculate(event) {
    event.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "" || people <=0 || bill <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, enter the necessary information.',
        })
    }

    let billPerPerson = bill/people;
    let tipPerPerson = (bill * tip) / people;
    let totalPerPerson = billPerPerson + tipPerPerson;

    document.querySelector("#billPerPerson").textContent = billPerPerson.toFixed(2);
    document.querySelector("#tipPerPerson").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#totalPerPerson").textContent = totalPerPerson.toFixed(2);

}

function tipOptions(event) {
    event.preventDefault();
    const tip = document.querySelector("#tip");
    tip.style.display = "block";
}

const checkbox = document.querySelector("#checkbox");
const checkedBox = document.querySelector("#checkedBox");
checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        checkedBox.style.display = "block";
    } else {
        checkedBox.style.display = "none";
    }
})

const result = document.querySelector("#result");
result.addEventListener("click", (event) => {
    event.preventDefault();
    let points = 0;
    if (document.querySelector(".food1").checked || document.querySelector(".drink1").checked || document.querySelector(".service1").checked || document.querySelector(".atmosphere1").checked || document.querySelector(".impression1").checked) {
        points += 1;
        console.log(points);
    }
    if (document.querySelector(".food2").checked || document.querySelector(".drink2").checked || document.querySelector(".service2").checked || document.querySelector(".atmosphere2").checked || document.querySelector(".impression2").checked) {
        points += 2;
        console.log(points);
    }
    if (document.querySelector(".food3").checked || document.querySelector(".drink3").checked || document.querySelector(".service3").checked || document.querySelector(".atmosphere3").checked || document.querySelector(".impression3").checked) {
        points += 3;
        console.log(points);
    }
    if (document.querySelector(".food4").checked || document.querySelector(".drink4").checked || document.querySelector(".service4").checked || document.querySelector(".atmosphere4").checked || document.querySelector(".impression4").checked) {
        points += 4;
        console.log(points);
    }
    if (document.querySelector(".food5").checked || document.querySelector(".drink5").checked || document.querySelector(".service5").checked || document.querySelector(".atmosphere5").checked || document.querySelector(".impression5").checked) {
        points += 5;
        console.log(points);
    }
    
})