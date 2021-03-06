const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    location.reload();
});

// second container, calculating the tip
let calculate = (event) => {
    event.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;
// validating the input
    if (people <= 0 || bill <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Try again.',
            text: 'Please, enter numbers greater than 0 into both the input fields.',
        })
    }
    if (isNaN(bill) || isNaN(people)) {
        Swal.fire({
            icon: 'error',
            title: "Oops... Letters won't work here.",
            text: 'Please, enter numbers greater than 0 into both the input fields.',
        })
    }
    if (bill === "" || people === "") {
        Swal.fire({
            icon: 'error',
            title: "Oops... Input fields can't be empty.",
            text: 'Please, enter numbers greater than 0 into both the input fields.',
        })
    }
// calculations themselves
    let billPerPerson = bill/people;
    let tipPerPerson = (bill * tip) / people;
    let totalPerPerson = billPerPerson + tipPerPerson;
// rounding up result
    document.querySelector("#billPerPerson").textContent = billPerPerson.toFixed(2);
    document.querySelector("#tipPerPerson").textContent = tipPerPerson.toFixed(2);
    document.querySelector("#totalPerPerson").textContent = totalPerPerson.toFixed(2);
// what to do in case of zero
    if (isNaN(billPerPerson) || people === "0") {
        document.querySelector("#billPerPerson").textContent = "";
    }
    if (isNaN(tipPerPerson) || people === "0") {
        document.querySelector("#tipPerPerson").textContent = "";
    }
    if (isNaN(totalPerPerson) || people === "0") {
        document.querySelector("#totalPerPerson").textContent = "";
    }
}

const btn = document.querySelector("#calc");
btn.addEventListener("click", calculate);

// display tip options section
let tipOptions = (event) => {
    event.preventDefault();
    const tip = document.querySelector("#tip");
    tip.style.display = "block";
}

const addTip = document.querySelector("#add_tip");
addTip.addEventListener("click", tipOptions);

// display section to rate service
const checkbox = document.querySelector("#checkbox");
const checkedBox = document.querySelector("#checkedBox");
checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        checkedBox.style.display = "block";
    } else {
        checkedBox.style.display = "none";
    }
})

// removing rating options section
const refuse = document.querySelector("#refuse");
refuse.addEventListener("click", () => {
    checkedBox.style.display = "none";
    checkbox.checked = false;
})

// adding points depending on what is checked
const result = document.querySelector("#result");
result.addEventListener("click", (event) => {
    event.preventDefault();
    let points = 0;
    if (document.querySelector(".food1").checked) {
        points += 1;
    }
    if (document.querySelector(".drink1").checked) {
        points += 1;
    }
    if (document.querySelector(".service1").checked) {
        points += 1;
    }
    if (document.querySelector(".atmosphere1").checked) {
        points += 1;
    }
    if (document.querySelector(".impression1").checked) {
        points += 1;
    }

    if (document.querySelector(".food2").checked) {
        points += 2;
    }
    if (document.querySelector(".drink2").checked) {
        points += 2;
    }
    if (document.querySelector(".service2").checked) {
        points += 2;
    }
    if (document.querySelector(".atmosphere2").checked) {
        points += 2;
    }
    if (document.querySelector(".impression2").checked) {
        points += 2;
    }

    if (document.querySelector(".food3").checked) {
        points += 3;
    }
    if (document.querySelector(".drink3").checked) {
        points += 3;
    }
    if (document.querySelector(".service3").checked) {
        points += 3;
    }
    if (document.querySelector(".atmosphere3").checked) {
        points += 3;
    }
    if (document.querySelector(".impression3").checked) {
        points += 3;
    }

    if (document.querySelector(".food4").checked) {
        points += 4;
    }
    if (document.querySelector(".drink4").checked) {
        points += 4;
    }
    if (document.querySelector(".service4").checked) {
        points += 4;
    }
    if (document.querySelector(".atmosphere4").checked) {
        points += 4;
    }
    if (document.querySelector(".impression4").checked) {
        points += 4;
    }

    if (document.querySelector(".food5").checked) {
        points += 5;
    }
    if (document.querySelector(".drink5").checked) {
        points += 5;
    }
    if (document.querySelector(".service5").checked) {
        points += 5;
    }
    if (document.querySelector(".atmosphere5").checked) {
        points += 5;
    }
    if (document.querySelector(".impression5").checked) {
        points += 5;
    }

    // displaying recommended tip based on the number of points
    let tip = '';
    if (points === 0) {
        tip = 0;
    } else if (points > 0 && points <= 5) {
        tip = "5%";
    } else if (points > 5 && points <= 10) {
        tip = "10%";
    } else if (points > 10 && points <= 15) {
        tip = "15%";
    } else if (points > 15 && points <= 20) {
        tip = "20%";
    } else if (points > 20 && points <= 24) {
        tip = "25%";
    } else {
        tip = "30% and higher";
    }

    // display proposed tip
    document.querySelector("#proposed-tip").style.display = "block";
    document.querySelector("#proposed").textContent = tip;
})