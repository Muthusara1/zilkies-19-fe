window.onload = function sendData() {
    var message = document.getElementById("message").value;
    var time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    addChatToScreen(message, time);
    fetch("http://localhost:3000/chats", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "message": message,
            "timestamp": time
        })
    });
};

document.getElementById("send").onclick = function getChats() {
    fetch("http://localhost:3000/chats", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            addChatToScreen(response[i].message, response[i].timestamp);
        }
    });
};

function addChatToScreen(msg, time) {
    var chatWrap = document.createElement("DIV");
    chatWrap.classList.add("chat-wrap");

    var messageWrap = document.createElement("DIV");
    messageWrap.classList.add("message-wrap");

    var message = document.createElement("DIV");
    message.classList.add("message");
    var messagePara = document.createElement("P");
    var messageText = document.createTextNode(msg);
    messagePara.appendChild(messageText);
    message.appendChild(messagePara);

    var timestamp = document.createElement("DIV");
    timestamp.classList.add("timestamp");
    var timestampPara = document.createElement("P");
    var timestampText = document.createTextNode(time);
    timestampPara.appendChild(timestampText);
    timestamp.appendChild(timestampPara);

    messageWrap.appendChild(message);
    messageWrap.appendChild(timestamp);

    var avatar = document.createElement("DIV");
    avatar.classList.add("avatar");

    var img = document.createElement("IMG");
    img.setAttribute("src", "images/bot.png");
    img.id = "avatar-img";
    avatar.appendChild(img);

    chatWrap.appendChild(messageWrap);
    chatWrap.appendChild(avatar);
    document.getElementById("content").appendChild(chatWrap);
}