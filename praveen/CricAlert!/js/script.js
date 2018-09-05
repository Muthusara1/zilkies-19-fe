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

        alert("Password is required!");
        return false;
    }
    return true;
}

function expandSearch() {
    var searchIcon = document.querySelector(".footer__search");
    searchIcon.style.display = "none";
    var addIcon = document.querySelector(".footer__add-item");
    addIcon.style.display = "none";
    var searchBar = document.querySelector(".footer__search-bar");
    searchBar.style.display = "block";
    var minimizeIcon = document.querySelector(".minimize");
    minimizeIcon.style.display = "inline-block";
}

function minimizeSearch() {
    var searchIcon = document.querySelector(".footer__search");
    searchIcon.style.display = "inline-block";
    var addIcon = document.querySelector(".footer__add-item");
    addIcon.style.display = "inline-block";
    var searchBar = document.querySelector(".footer__search-bar");
    searchBar.style.display = "none";
    var minimizeIcon = document.querySelector(".minimize");
    minimizeIcon.style.display = "none";
}

function sideBarClick() {
    var sideBar = document.querySelector(".side-bar").classList.toggle("active");
}

function allowDrop(ev, el) {
    ev.preventDefault();
    el.style.height = "110px";
    el.style.width = "110px";
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    var search = document.getElementsByClassName("footer__search")[0];
    var addItem = document.getElementsByClassName("add-item")[0];
    var editItem = document.getElementsByClassName("footer__edit")[0];
    var deleteItem = document.getElementsByClassName("footer__delete")[0];
    editItem.style.display = "inline-block";
    deleteItem.style.display = "inline-block";
    search.style.display = "none";
    addItem.style.display = "none";
}

function dragStop(ev) {
    var search = document.getElementsByClassName("footer__search")[0];
    var addItem = document.getElementsByClassName("add-item")[0];
    var editItem = document.getElementsByClassName("footer__edit")[0];
    var deleteItem = document.getElementsByClassName("footer__delete")[0];
    
    editItem.style.height = "100px";
    deleteItem.style.height = "100px";
    editItem.style.width = "100px";
    deleteItem.style.width = "100px";

    editItem.style.display = "none";
    deleteItem.style.display = "none";
    search.style.display = "inline-block";
    addItem.style.display = "inline-block";
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
}