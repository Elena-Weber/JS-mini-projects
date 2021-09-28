let result = (event) => {
    event.preventDefault();
    // disable the button
    btn.disabled = true;
    // calculate the points if proper radio buttons are checked
    let points = 0;
    if (document.querySelector("#answer1").checked) {
        document.querySelector("#ans1").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer2").checked) {
        document.querySelector("#ans2").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer3").checked) {
        document.querySelector("#ans3").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer4").checked) {
        document.querySelector("#ans4").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer5").checked) {
        document.querySelector("#ans5").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer6").checked) {
        document.querySelector("#ans6").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer7").checked) {
        document.querySelector("#ans7").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer8").checked) {
        document.querySelector("#ans8").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer9").checked) {
        document.querySelector("#ans9").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer10").checked) {
        document.querySelector("#ans10").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer11").checked) {
        document.querySelector("#ans11").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer12").checked) {
        document.querySelector("#ans12").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer13").checked) {
        document.querySelector("#ans13").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer14").checked) {
        document.querySelector("#ans14").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer15").checked) {
        document.querySelector("#ans15").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer16").checked) {
        document.querySelector("#ans16").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer17").checked) {
        document.querySelector("#ans17").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer18").checked) {
        document.querySelector("#ans18").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer19").checked) {
        document.querySelector("#ans19").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer20").checked) {
        document.querySelector("#ans20").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer21").checked) {
        document.querySelector("#ans21").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer22").checked) {
        document.querySelector("#ans22").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer23").checked) {
        document.querySelector("#ans23").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer24").checked) {
        document.querySelector("#ans24").style.color = "green";
        points ++;
    }
    if (document.querySelector("#answer25").checked) {
        document.querySelector("#ans25").style.color = "green";
        points ++;
    }
// calculating the level based on the number of points
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
// display the results
    document.querySelector("#result-section").style.display = "block";
    document.querySelector("#point").textContent = points;
    document.querySelector("#level").textContent = level;
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", result);