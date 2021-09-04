const btn = document.querySelector(".btn");
btn.addEventListener("click", result);

function result(event) {
    event.preventDefault();

let points = 0;
if (document.querySelector("#answer1").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer2").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer3").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer4").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer5").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer6").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer7").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer8").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer9").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer10").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer11").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer12").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer13").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer14").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer15").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer16").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer17").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer18").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer19").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer20").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer21").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer22").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer23").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer24").checked) {
    points ++;
    // console.log(points);
}
if (document.querySelector("#answer25").checked) {
    points ++;
    console.log(points);
}
let level = '';
if (points <= 5) {
    level = "Beginner";
} else if (points > 5 && points <= 10) {
    level = "Elementary";
} else if (points > 10 && points <= 15) {
    level = "Pre-Intermediate";
} else if (points > 15 && points <= 20) {
    level = "Intermediate";
} else if (points > 20 && points <= 24) {
    level = "Upper Intermediate";
} else {
    level = "Advanced";
}
document.querySelector("#result-section").style.display = "block";
document.querySelector("#point").textContent = points;
document.querySelector("#level").textContent = level;
}