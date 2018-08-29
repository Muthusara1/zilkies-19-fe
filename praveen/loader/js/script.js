scroll();
function scroll() {
    var element = document.getElementById("counter-id");
    var elementTwo = document.getElementById("counter-id-2");
    var i = 10;
    var intervalId = setInterval(function() {
        elementTwo.innerHTML = i;
        element.innerHTML = i;
        i += 10;
        
        if (i == 100) {
            // elementTwo.style.visibility = "hidden";
            element.style.opacity = "0";
            window.clearInterval(intervalId);
        }
    }, 1000);
}
