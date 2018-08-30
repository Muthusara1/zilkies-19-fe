var modal = document.getElementById("myModal");
var btn = document.getElementById("submit-btn");
btn.onclick = function (event) {
    event.preventDefault();
    var nameValid = "",
        companyName = "",
        emailValid = "",
        budgetValid = "",
        text_areaValid = "";
    var name = document.getElementById("personal-details-input__name").value,
        company = document.getElementById("personal-details-input__company").value,
        budget = document.getElementById("personal-details-input__budget").value,
        text_area = document.getElementById("text-area-section__input").value;
    if (name == "") {
        nameValid = "Enter a valid name !";
    }
    if (company == "") {
        companyName = "Enter a valid company name !";
    }
    if (budget == "") {
        emailValid = "Enter a valid budget";
    }
    if (text_area == "") {
        text_areaValid = "Empty Text Area";
    }

    modal.style.display = "block";
    document.getElementById("model-body__name-result").innerHTML = nameValid;
    document.getElementById("model-body__company-result").innerHTML = companyName;
    document.getElementById("model-body__email-result").innerHTML = emailValid;
    document.getElementById("model-body__budget-result").innerHTML = budgetValid;
    document.getElementById("model-body__textarea-result").innerHTML = text_areaValid;
};

document.getElementById("close-div").onclick = function () {
    modal.style.display = "none";
};
