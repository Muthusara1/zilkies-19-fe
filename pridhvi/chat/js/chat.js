function addChat() {

    var user="pridhvi";
    var message = document.getElementById("text-area").value;
    document.getElementById("text-area").value="";  
    var date=new Date();
    var time= date.getHours()+":"+date.getMinutes();

    fetch("http://localhost:3000/posts", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"author": user, "message": message, "time": time})
    })
        .then(function(response) {
            appendChat(message, time);
        })
        .catch(function(err) {
        // Error :(
        });
}

function appendChat(message, time) {
    document.getElementById("chat-box").innerHTML += "<div class='chat'><div class='user-text'><p>"+message+"</p></div><div class='user-dp'><i class='fas fa-user-astronaut'></i></div><div class='chat-time'><p>"+time+"</p></div></div>";
}

function getChat() {
    fetch("http://localhost:3000/posts", {
        method: "get",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            for(var i=0;i<response.length;i++){
                appendChat(response[i].message, response[i].time);
            }
        })
        .catch(function(err) {
        // Error :(
        });
}