// document.getElementsByClassName("content__player-card").onclick = expandCard;

function activeToggle(selection) {
    var login = document.getElementById("credentials__title__login-id");
    var loginForm = document.getElementById("credentials__login-id");
    var signUp = document.getElementById("credentials__title__signup-id");
    var signUpForm = document.getElementById("credentials__signup-id");

    if (selection == "login" && login.classList.contains("credentials__title__inactive")) {
        signUpForm.classList.add("fade-out");

        setTimeout(function doThis() {
            loginForm.style.display = "flex";
            signUpForm.style.display = "none";
            loginForm.classList.add("fade-in");
        }, 250);

        login.classList.remove("credentials__title__inactive");
        login.classList.add("credentials__title__active");
        signUp.classList.remove("credentials__title__active");
        signUp.classList.add("credentials__title__inactive");

        setTimeout(function toggleDisplay() {
            signUpForm.classList.remove("fade-out");
            loginForm.classList.remove("fade-in");
        }, 500);
    } else if (selection == "signUp" && signUp.classList.contains("credentials__title__inactive")) {
        loginForm.classList.add("fade-out");

        setTimeout(function doThis() {
            loginForm.style.display = "none";
            signUpForm.style.display = "flex";
            signUpForm.classList.add("fade-in");
        }, 250);

        signUp.classList.remove("credentials__title__inactive");
        signUp.classList.add("credentials__title__active");
        login.classList.remove("credentials__title__active");
        login.classList.add("credentials__title__inactive");

        setTimeout(function toggleDisplay() {
            loginForm.classList.remove("fade-out");
            signUpForm.classList.remove("fade-in");
        }, 500);
    }
}

function validateSignUpForm() {
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var name = document.forms["signup-form"]["name"].value;
    var email = document.forms["signup-form"]["email-id"].value;
    var username = document.forms["signup-form"]["username"].value;
    var password = document.forms["signup-form"]["password"].value;
    console.log("Inside!")
    if (!nameRegex.test(name)) {
        alert("Invalid name entered!");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email entered!");
        return false;
    }
    if (username == "") {
        alert("Username is required!");
        return false;
    }
    if (password == "") {
        alert("Password is required!");
        return false;
    }
    return true;
}

function validateLoginForm() {
    var username = document.forms["login-form"]["username"].value;
    var password = document.forms["login-form"]["password"].value;
    if (username == "") {
        alert("Username is required!");
        return false;
    }
    if (password == "") {
        console.log("Hmmm...")
        alert("Password is required!");
        return false;
    }
    return true;
}

function expandCard(event) {
    var element = event.target;
    if (element.classList.contains("col-sm-8")) {
        element.classList.remove("col-sm-8");
        element.classList.add("col-sm-4");
        element.style.height = "100px";
    } else {
        var nodeList = document.querySelectorAll(".content__player-card");
        for (var i  = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove("col-sm-8");
            nodeList[i].classList.add("col-sm-4");
            nodeList[i].style.height = "100px";
        }
        element.style.backgroundColor = "wheat";
        element.style.height = 2 * element.clientHeight + "px";
        element.classList.remove("col-sm-4");
        element.classList.add("col-sm-8");    
    }
}

function expandSearch() {
    var searchIcon = document.querySelector(".footer__search");
    searchIcon.style.display = "none";
    var searchIcon = document.querySelector(".add-item");
    searchIcon.style.display = "none";
    var searchBar = document.querySelector(".footer__search-bar");
    searchBar.style.display = "block";
    var minimizeIcon = document.querySelector(".minimize");
    minimizeIcon.style.display = "inline-block";
}

function minimizeSearch() {
    var searchIcon = document.querySelector(".footer__search");
    searchIcon.style.display = "inline-block";
    var searchIcon = document.querySelector(".add-item");
    searchIcon.style.display = "inline-block";
    var searchBar = document.querySelector(".footer__search-bar");
    searchBar.style.display = "none";
    var minimizeIcon = document.querySelector(".minimize");
    minimizeIcon.style.display = "none";
}

function sideBarClick() {
    console.log("sideBarClick!")
    var sideBar = document.querySelector(".side-bar").classList.toggle('active');
}