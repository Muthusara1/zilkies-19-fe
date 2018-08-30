var activeTab;

window.onload = function (e) {
    setActive("user");
    activeTab = "user";
    $("#login").hover(function(){
        if(activeTab === "user") {
            $(this).css("background-color", "#536DFE");
        }
        else if(activeTab === "tester") {
            $(this).css("background-color", "#289C00");
        }
        else if(activeTab === "admin") {
            $(this).css("background-color", "#E42102");
        }
    }, function() {
        $(this).css("background-color", "transparent");
    });
}

document.getElementById("user").addEventListener("click", setUserActive);
document.getElementById("tester").addEventListener("click", setTesterActive);
document.getElementById("admin").addEventListener("click", setAdminActive);

function changeLoginColor() {
    console.log("i");
    if(activeTab === "user") {
        document.getElementById("login").style.backgroundColor = "#536DFE";
    }
    else if(activeTab === "tester") {
        document.getElementById("login").style.backgroundColor = "#289c00";
    }
    else if(activeTab === "admin") {
        document.getElementById("login").style.backgroundColor = "#e42102";
    }
}

function setActive(id) {
    if (id === "user") {
        document.getElementById(id).style.backgroundColor = "#536DFE";
        document.getElementById("tester").style.backgroundColor = "#435159";
        document.getElementById("admin").style.backgroundColor = "#435159";
    }
    else if (id === "tester") {
        document.getElementById(id).style.backgroundColor = "#289c00";
        document.getElementById("user").style.backgroundColor = "#435159";
        document.getElementById("admin").style.backgroundColor = "#435159";
    }
    else if(id === "admin") {
        document.getElementById(id).style.backgroundColor = "#e42102";
        document.getElementById("tester").style.backgroundColor = "#435159";
        document.getElementById("user").style.backgroundColor = "#435159";
    }
    activeTab = id;
}

function setUserActive() {
    if(activeTab !== "user") {
        setActive("user");
    }
} 

function setTesterActive() {
    if(activeTab !== "tester") {
        setActive("tester");
    }
} 

function setAdminActive() {
    if(activeTab !== "admin") {
        setActive("admin");
    }
} 