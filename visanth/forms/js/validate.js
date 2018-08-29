function validateName(){
    var inputValue = document.forms["myform"]["name"].value;
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputValue.match(alphaExp)){
        document.getElementById("name-error").innerHTML="";
        return true;
    }
    document.getElementById("name-error").innerHTML="Enter valid name in alphabets";
    return false;
}

function validateCompany(){
    var inputValue = document.forms["myform"]["company"].value;
    var alphaExp = /^[a-zA-Z]+$/;
    if(inputValue.match(alphaExp)){
        document.getElementById("company-error").innerHTML="";
        return true;
    }
    document.getElementById("company-error").innerHTML="Enter valid name in alphabets";
    return false;
}

function validateBudget() {
    var inputValue = document.forms["myform"]["budget"].value;
    var alphaExp =  /^[0-9]+$/;
    if(inputValue.match(alphaExp)){
        document.getElementById("budget-error").innerHTML="";
        return true;
    }
    document.getElementById("budget-error").innerHTML="Enter valid number";
    return false;
}

function validateEmail(){
    var inputValue = document.forms["myform"]["email"].value;
    var alphaExp =/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
    if(inputValue.match(alphaExp)){
        document.getElementById("email-error").innerHTML="";
        return true;
    }
    document.getElementById("email-error").innerHTML="Enter valid mail";
    return false;
}

var submitButton = document.getElementById("submit-button");
submitButton.onclick = function(){
    if(validateName() == false){
        return false;
    }
    if(validateBudget() == false){
        return false;
    }
    if(validateCompany() == false){
        return false;
    }
    if(validateEmail() == false){
        return false;
    }
    return true;
};
