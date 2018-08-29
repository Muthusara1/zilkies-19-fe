function validateForm() {
    var firstName=document.querySelector("input[name=Firstname]").value;    
    if (firstName == "") {
            alert("Name should not be empty");
            return false;
    }
    var company=document.querySelector("input[name=company]").value;    
    if (company == "") {
            alert("Company should be filled");
            return false;
    }
    var email=document.querySelector("input[name=email]").value;
    var regex =/\S+@\S+\.\S+/;
    console.log(email);
    if (!regex.test(email)) {
            alert("Invalid Email");
            return false;
    }

    var budget=document.querySelector("input[name=budget]").value;
    var numberRegex = /[0-9]+/;
    if (!numberRegex.test(budget)) {
            alert("Budget should be Number");
            return false;
    }
    
}