function start(){
    getMessages();
}

//add chat message
function addMessage(){
    alert("Function invoked");
    var agent = "agent";
    var message = document.getElementById("input-text").value;
    var date = new Date();
    var time = date.getHours() + ":" + date.getMinutes();
    var url = "http://localhost:3000/posts";
    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"author": agent, "message": message, "time": time})
    }).then(function() {
        addChat({"author": agent, "message": message, "time": time});
        message = document.getElementById("input-text");
        message.value = "";
        alert("Success");
    });
}

function getMessages(){
    alert("Function invoked");
    var url = "http://localhost:3000/posts";
    fetch(url, {
        method: "GET",
    }).then(function(response){
        return response.json();
    }).then(function(response){
        for(var i = 0;i < response.length; i++){
            addChat(response[i]);
        }
        alert(JSON.stringify(response));
    }).catch(function(err){
        // Error :(
        alert(err);
    });
}

function addChat(chat){
    var chatBox = document.getElementById("chat-box");

    var profileDiv = document.createElement("div");
    profileDiv.className = "profile";
    if(chat.author == "agent"){
        profileDiv.innerHTML = "<i class='fas fa-user-secret'></i>";
    } else{
        profileDiv.innerHTML = "<i class='fas fa-user-astronaut'></i>";
    }

    var talkTextPara = document.createElement("p");
    talkTextPara.className = "talk-text";
    talkTextPara.innerText = chat.message;
        
    var talkTextDiv = document.createElement("div");
    talkTextDiv.className = "talk-text";
    talkTextDiv.appendChild(talkTextPara);
        
    var talkBubbleDiv = document.createElement("div");
    talkBubbleDiv.className = "talk-bubble";
    talkBubbleDiv.appendChild(talkTextDiv);
    
    var senderDiv = document.createElement("div");

    if(chat.author == "agent"){
        senderDiv.className = "sender";
    } else{
        senderDiv.className = "receiver";
    }
    senderDiv.appendChild(profileDiv);
    senderDiv.appendChild(talkBubbleDiv);

    var spaceDiv = document.getElementById("space");

    chatBox.insertBefore(senderDiv,spaceDiv);
}