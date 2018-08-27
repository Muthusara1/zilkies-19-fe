function addMessages() {
    var message = document.getElementById("message").value;
    document.getElementById("message").value="";
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var url = "http://localhost:3000/posts";
    fetch(url,{
        method: "POST",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({"author":"rashmi", "message": message, "time":hour+":"+min})       
    }).then(function(response){
        alert("Stored!");
        var chatbox = document.getElementById("chat-box");
        var pElement = document.createElement("p");
        pElement.innerHTML = "From script";
        chatbox.append(pElement);
        printHello();
    }).catch(function(error){
        alert("Error!");
    });
   
}

function printHello() {
    return "Hello";
}