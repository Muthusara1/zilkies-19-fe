function generateStars() {
    var body = document.getElementsByTagName("body")[0];
    for (var i = 0; i < 60; i++) {
        body.innerHTML += `<div class="big-star">
    <div class="top-triangle"></div>
    <div class="bottom-triangle"></div>
    </div>`;
    }
    setStars();
}
function setStars() {
    var stars = document.getElementsByClassName("big-star");
    for (var i = 0; i < stars.length; i++) {
        var top = Math.floor(Math.random() * 500) + 1;
        var left = Math.floor(Math.random() * 1200) + 1;
        stars[i].setAttribute("style", " top: " + top + "px; left : " + left + "px; ");
    }
}