var openBar = document.getElementById("open-side-bar");
var closeBar = document.getElementById("close-side-bar");
openBar.onclick = function() {
    document.getElementById("side-nav-id").style.width = "250px";
    document.getElementById("main-body-section-id").style.marginLeft = "250px";
};

closeBar.onclick = function() {
    document.getElementById("side-nav-id").style.width = "0";
    document.getElementById("main-body-section-id").style.marginLeft = "0";
};