function expandTeam(element) {
    var nodeList = document.querySelectorAll(".content__team-card");

    if (element.classList.contains("expand-team")) {
        // element.childNodes[3].style.display = "none";
        var child = element.querySelector(".content__team-card__container-2");
        child.style.display = "none";
        for (var i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove("expand-team");
        }
    } else {
        for (i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove("expand-team");
        }
        element.classList.add("expand-team");
        // element.childNodes[3].style.display = "block";
        child = element.querySelector(".content__team-card__container-2");
        child.style.display = "block";
    }
}