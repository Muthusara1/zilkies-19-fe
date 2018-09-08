window.onload=document.getElementById("modal").style.display="none";
document.getElementById("login-link").onclick= function(){
    document.getElementById("modal").style.display="flex";
}
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
}
