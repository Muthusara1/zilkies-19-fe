function validateform() {
    var firstName = document.querySelector("input[name=first-name]").value;
    var lastName = document.querySelector("input[name=last-name]").value;
    var age = document.querySelector("input[name=age]").value;
    var mobile = document.querySelector("input[name=mobile]").value;
    var email = document.querySelector("input[name=email]").value;
    var password = document.querySelector("input[name=password]").value;
    flag = true;
    if (firstName == "" || lastName == "" || age == "" || mobile == "" || email == "" || password == "") {
        alert("Please Fill out the values");
        return false;
    }
    return true;
}