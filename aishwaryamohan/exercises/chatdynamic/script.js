function getText() {
    var message = document.getElementById("text-box").value;
    var date = new Date();
    fetch("http://localhost:3000/text", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "content": message, "time": date.getHours() + ":" + date.getMinutes() })
    });
}

function loadChat() {
    fetch("http://localhost:3000/text", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },

    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        for (var i = 0; i < response.length; i++) {
            fillText(response[i].content, response[i].time);
        }
        var objDiv = document.getElementById("body");
        objDiv.scroll = objDiv.scrollHeight;
    });

}



function fillText(content, time) {
    var textbox = document.createElement("DIV");
    textbox.classList.add("text-box");

    var text = document.createElement("DIV");
    text.classList.add("text");
    textbox.appendChild(text);

    var textContent = document.createElement("DIV");
    textContent.classList.add("text-content");
    text.appendChild(textContent);

    var textContentElement = document.createElement("P");
    var textData = document.createTextNode(content);
    textContentElement.appendChild(textData);

    textContent.appendChild(textContentElement);

    var textTime = document.createElement("DIV");
    textTime.classList.add("text-time");
    text.appendChild(textTime);

    var textTimeElement = document.createElement("P");
    var textData1 = document.createTextNode(time);
    textTimeElement.appendChild(textData1);

    textTime.appendChild(textTimeElement);

    text.appendChild(textContent);
    text.appendChild(textTime);

    var textIcon = document.createElement("DIV");
    textIcon.classList.add("text-icon");

    var img = document.createElement("IMG");
    img.setAttribute("src", "./asserts/profilepic.jpg");
    textIcon.appendChild(img);

    textbox.appendChild(textIcon);

    document.getElementById("main-content-wrapper").appendChild(textbox);
}
