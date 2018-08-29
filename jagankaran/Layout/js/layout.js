document.getElementById("send").onclick = function () {
    var name = document.getElementById("name").value;
    var nameregex = /^[a-zA-Z ]{2,30}$/;
    var company = document.getElementById("company").value;
    var companyregex = /^[A-Z][a-z]{5,20}$/;
    var budget = document.getElementById("budget").value;
    var budgetregex = /[0-9]+/;
    if (!nameregex.test(name)) {
        alert("INVALID NAME");
        return false;
    }
    if (!companyregex.test(company)) {
        alert("INVALID COMPANY");
        return false;
    }
    if (!budgetregex.test(budget)) {
        alert("INVALID BUDGET VALUE ENTER IN WHOLE VALUE (12000)");
        return false;
    }
};
