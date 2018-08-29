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
        }, 500);

        // signUp.classList.remove("fade-in");
        // signUp.classList.add("fade-out");
        // login.classList.remove("fade-out");
        // login.classList.add("fade-in");
        
        login.classList.remove("credentials__title__inactive");
        login.classList.add("credentials__title__active");
        signUp.classList.remove("credentials__title__active");
        signUp.classList.add("credentials__title__inactive");

        setTimeout(function toggleDisplay() {
            signUpForm.classList.remove("fade-out");
            loginForm.classList.remove("fade-in");
            

        }, 1000);
    } else if (selection == "signUp" && signUp.classList.contains("credentials__title__inactive")) {
        loginForm.classList.add("fade-out");
        login.classList.add("fade-out");
        signUp.classList.add("fade-out");

        setTimeout(function doThis() {
            login.classList.remove("fade-out");
            signUp.classList.remove("fade-out");
            signUp.classList.remove("credentials__title__inactive");
            signUp.classList.add("credentials__title__active");
            login.classList.remove("credentials__title__active");
            login.classList.add("credentials__title__inactive");
    
            loginForm.style.display = "none";
            signUpForm.style.display = "flex";
            signUpForm.classList.add("fade-in");
            login.classList.add("fade-in");
            signUp.classList.add("fade-in");
        }, 500);

        // login.classList.remove("fade-in");
        // void login.offsetWidth;
        // login.classList.add("fade-in");
        // signUp.classList.remove("fade-in");
        // void signUp.offsetWidth;
        // signUp.classList.add("fade-in");

        setTimeout(function toggleDisplay() {
            loginForm.classList.remove("fade-out");
            signUpForm.classList.remove("fade-in");
        }, 1000);
    }
}
