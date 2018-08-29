function addMessages() {
    var message = document.getElementById("message").value;
    document.getElementById("message").value="";
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var url = "http://localhost:3000/posts";
    var meridian;
    if(hour > 11) 
        meridian = "PM";
    else
        meridian = "AM";
    fetch(url,{
        method: "POST",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({"author":"rashmi", "message": message, "time":hour+":"+min+meridian})       
    }).then(function(response){
        var chatbox = document.getElementById("chat-box");
        var newMessage = document.createElement("div");
        newMessage.setAttribute("class","message-container");
        newMessage.innerHTML += "<div class='message-content'><p class='message'>"+message+"</p><p class='time'>"+hour+":"+min+meridian+"</p></div><i class='fas fa-headset' style='color: black;'></i>";
        chatbox.append(newMessage);
    }).catch(function(error){
        alert("Error!");
    });
   
}

function printHello() {
    return "Hello";
}