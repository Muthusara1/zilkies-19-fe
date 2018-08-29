function validateForm() {
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    var numberRegex = /[0-9]+/;
    var name = document.forms["myForm"]["name"].value;
    var company = document.forms["myForm"]["company"].value;
    var email = document.forms["myForm"]["email"].value;
    var budget = document.forms["myForm"]["budget"].value;
    if (!nameRegex.test(name)) {
        alert("Invalid name entered!");
        return false;
    }
    if (company == "") {
        alert("No company name entered!");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Invalid email entered!");
        return false;
    }
    if (!numberRegex.test(budget)) {
        alert("Invalid budget entered!");
        return false;
    }
    return true;
}