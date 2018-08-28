function validateForm() {
    var name = document.querySelector("input[name=name]").value;
    var company = document.querySelector("input[name='company']").value;
    var email = document.querySelector("input[name='email']").value;
    var budget = document.querySelector("input[name='budget']").value;
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    if (company == "") {
        alert("Company must be filled out");
        return false;
    }

    if (budget == "") {
        alert("Budget must be filled out");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid Email");
        return false;
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
