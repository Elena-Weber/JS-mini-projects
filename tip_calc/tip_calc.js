const btn = document.querySelector("button");
btn.addEventListener("click", calculate);

calculate = () => {
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "") {
        alert("Error");
    }
}