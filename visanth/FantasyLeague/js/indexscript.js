var signupButton = document.getElementById("signup-button");
var loginButton = document.getElementById("login-button");
var closeButton = document.getElementById("close-button_signup");
var modalBoxSignup = document.getElementById("modal-box_signup");
var modalBoxLogin = document.getElementById("modal-box_login");
var closeButtonLogin = document.getElementById("close-button_login");
signupButton.onclick = function() {
    modalBoxSignup.style.display = "block";
}

window.onclick = function(event){
    if(event.target == modalBoxSignup) {
        modalBoxSignup.style.display = "none";
    }
}

closeButton.onclick = function() {
    modalBoxSignup.style.display = "none";
}

loginButton.onclick = function() {
    modalBoxLogin.style.display = "block";
}

window.onclick = function(event){
    if(event.target == modalBoxLogin) {
        modalBoxLogin.style.display = "none";
    }
}

closeButtonLogin.onclick = function() {
    modalBoxLogin.style.display = "none";
}