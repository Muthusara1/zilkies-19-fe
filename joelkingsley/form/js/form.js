function validate() {
    var nameRegex = /^[A-Za-z\s]+$/;
    var name = document.getElementById("name").value;
    var company = document.getElementById("company").value;
    var email = document.getElementById("email").value;
    var budget = document.getElementById("budget").value;
    var feedback_text = document.getElementById("feedback-text").value;

    if(!nameRegex.test(name)){
        alert(name + " Enter valid name");
        return false;
    }
    if(!(/^[A-Za-z\s]+$/.test(company))){
        alert("Enter company name");
        return false;
    }
    if(email == ""){
        alert("Enter valid email");
        return false;
    }
    if(isNaN(budget)){
        alert("Enter valid budget");
        return false;
    }
    if(feedback_text == ""){
        alert("Please enter feedback");
        return false;
    }
    return true;
}