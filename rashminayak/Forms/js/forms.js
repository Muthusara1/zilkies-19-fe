function validateForm() {
    var x = document.forms["product-form"]["name"].value;
    if (!/^[A-Za-z\s]+$/.test(x)) {
        alert("Please enter a valid name!");
        document.getElementsByName("name")[0].style.backgroundColor = "#ee6262"; 
        return false;
    }
    x = document.forms["product-form"]["company"].value;
    if (x == "") {
        alert("Please fill out your company!");
        document.getElementsByName("company")[1].style.backgroundColor = "#ee6262";
        return false;
    }
    x = document.forms["product-form"]["budget"].value;
    if (!/[0-9]+/.test(x)) {
        alert("Please enter valid value for budget!");
        document.getElementsByName("budget")[3].style.backgroundColor = "#ee6262";
        return false;
    }
    x = document.forms["product-form"]["timeframe"].value;
    if(x == "") 
    {
        alert("Please choose atleast one option!");
        return false;
    }
    x = document.forms["product-form"]["project-type"].value;
    return true;
}

function form() {
    if(validateForm())
    {
        alert("HIII");
    }
    else
    {
        alert(":(");
    }
}