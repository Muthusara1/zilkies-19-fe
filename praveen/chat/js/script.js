updateScroll();
retrieveMessages();
function retrieveMessages() {
    var divToInsert = document.getElementById("message-window__regular-message");
    divToInsert.innerHTML = "";
    fetch("http://localhost:3000/messages", {
        method: "get"
    }).then(function(response) {
        return response.json();
    }).then(function(response) {
        for (var key in response) {
            var messageObject = response[key];

            var divMessageText = document.createElement("DIV");
            divMessageText.setAttribute("class", "message__text");
            var messageText = document.createTextNode(messageObject["text"]);
            divMessageText.appendChild(messageText);
            
            var divMessageTime = document.createElement("DIV");
            divMessageTime.setAttribute("class", "message__time");
            var messageTime = document.createTextNode(messageObject["time"]);
            divMessageTime.appendChild(messageTime);

            var divMessage = document.createElement("DIV");
            divMessage.setAttribute("class", "regular-message__message");
            divMessage.appendChild(divMessageText);
            divMessage.appendChild(divMessageTime);

            var divProfilePic = document.createElement("DIV");
            divProfilePic.setAttribute("class", "display-picture-container");
            var imgProfilePic = document.createElement("IMG");
            imgProfilePic.setAttribute("class", "display-picture-container__picture");
            imgProfilePic.setAttribute("src", "../pic.jpeg");
            imgProfilePic.setAttribute("alt", "display pic");
            divProfilePic.appendChild(imgProfilePic);

            var messageContainer = document.createElement("DIV");
            messageContainer.setAttribute("class", "message-container");
            messageContainer.appendChild(divMessage);
            messageContainer.appendChild(divProfilePic);

            divToInsert.appendChild(messageContainer);

            // var textMessage = '<div class="regular-message__message"><div class="message__text">' + messageObject["text"] + '</div><div class="message__time">' + messageObject["time"] + '</div></div>';
            // var profilePicture = '<div class="display-picture-container"><img class="display-picture-container__picture" src="../pic.jpeg" alt="display pic"/></div>';
            // var messageContainer = '<div class="message-container">' + textMessage + profilePicture + '</div>';
            // divToInsert.innerHTML += messageContainer;
        }
    }).catch(function(err) {
        alert(err);
    });
}

function storeMessage() {
    var today = new Date();
    var time = today.toTimeString().split(" ")[0];
    var hours = time.split(":")[0];
    var minutes = time.split(":")[1];
    time = hours + ":" + minutes;
    if (hours > 12) {
        time += " PM";
    } else {
        time += " AM";
    }
    var message = document.getElementById("type-here").value;
    document.getElementById("type-here").value = "";
    var messageJson = {
        "text": message,
        "time": time
    };
    fetch("http://localhost:3000/messages", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    
        body: JSON.stringify(messageJson)
    }).then( (response) => {
        retrieveMessages();
    }).catch(function(err) {
        alert(err);
    });
    updateScroll();
}

function updateScroll(){
    var element = document.getElementById("scroll-window");
    element.scrollTo(0, element.scrollHeight);
    alert("DONE!");
}
