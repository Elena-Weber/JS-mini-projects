let result = (event) => {
    event.preventDefault();
    let points = 0;
    if (document.querySelector("#answer1").checked) {
        points ++;
    }
    if (document.querySelector("#answer2").checked) {
        points ++;
    }
    if (document.querySelector("#answer3").checked) {
        points ++;
    }
    if (document.querySelector("#answer4").checked) {
        points ++;
    }
    if (document.querySelector("#answer5").checked) {
        points ++;
    }
    if (document.querySelector("#answer6").checked) {
        points ++;
    }
    if (document.querySelector("#answer7").checked) {
        points ++;
    }
    if (document.querySelector("#answer8").checked) {
        points ++;
    }
    if (document.querySelector("#answer9").checked) {
        points ++;
    }
    if (document.querySelector("#answer10").checked) {
        points ++;
    }
    if (document.querySelector("#answer11").checked) {
        points ++;
    }
    if (document.querySelector("#answer12").checked) {
        points ++;
    }
    if (document.querySelector("#answer13").checked) {
        points ++;
    }
    if (document.querySelector("#answer14").checked) {
        points ++;
    }
    if (document.querySelector("#answer15").checked) {
        points ++;
    }
    if (document.querySelector("#answer16").checked) {
        points ++;
    }
    if (document.querySelector("#answer17").checked) {
        points ++;
    }
    if (document.querySelector("#answer18").checked) {
        points ++;
    }
    if (document.querySelector("#answer19").checked) {
        points ++;
    }
    if (document.querySelector("#answer20").checked) {
        points ++;
    }
    if (document.querySelector("#answer21").checked) {
        points ++;
    }
    if (document.querySelector("#answer22").checked) {
        points ++;
    }
    if (document.querySelector("#answer23").checked) {
        points ++;
    }
    if (document.querySelector("#answer24").checked) {
        points ++;
    }
    if (document.querySelector("#answer25").checked) {
        points ++;
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

const btn = document.querySelector(".btn");
btn.addEventListener("click", result);