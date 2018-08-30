function afterAjax() {
    alert("Inside afterAjax()");
    var url = "http://localhost:3000/user";

    fetch(url).then((resp) => resp.json())
        .then(function (data) {
            for (var index = 1; index < data.length; index++) {

                var messageSection = document.createElement("div");
                messageSection.classList.add("message");
                messageSection.classList.add("float-right");

                var para = document.createElement("p");
                para.classList.add("chat-text");
                var msg = document.createTextNode(data[index].content);
                para.appendChild(msg);

                var date = document.createElement("div");
                date.classList.add("date");
                var dateValue = document.createTextNode(data[index].time);
                date.appendChild(dateValue);

                var imageDiv = document.createElement("div");
                imageDiv.classList.add("avatar");

                var imageContent = document.createElement("img");
                imageContent.classList.add("list-img");
                imageContent.setAttribute("src", "./img/batman.ico");
                imageDiv.appendChild(imageContent);

                messageSection.appendChild(para);
                messageSection.appendChild(imageDiv);

                messageSection.appendChild(date);


                var outerMessageSection = document.getElementById("messages-section");
                outerMessageSection.appendChild(messageSection);
            }
        });
}

window.onload = function () {
    afterAjax();
};

var sendButton = document.getElementById("chat-second-icon");

sendButton.onclick = function () {
    alert("inside send button");
    // storing into json file
    var message = document.getElementById("message-content").value;
    var date = new Date();
    var entireTime = date.getHours() + ":" + date.getMinutes();
    fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "content": message, "user": "temp", "time": entireTime })
    }).then(function () { });
    // appending the message into html
    var messageSection = document.createElement("div");
    messageSection.classList.add("message");
    messageSection.classList.add("float-right");

    var para = document.createElement("p");
    para.classList.add("chat-text");
    var msg = document.createTextNode(message);
    para.appendChild(msg);

    var dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    var dateValue = document.createTextNode(entireTime);
    dateDiv.appendChild(dateValue);

    var imageDiv = document.createElement("div");
    imageDiv.classList.add("avatar");

    var imageContent = document.createElement("img");
    imageContent.classList.add("list-img");
    imageContent.setAttribute("src", "./img/batman.ico");
    imageDiv.appendChild(imageContent);


    messageSection.appendChild(para);
    messageSection.appendChild(imageDiv);
    messageSection.appendChild(dateDiv);


    var outerMessageSection = document.getElementById("messages-section");
    outerMessageSection.appendChild(messageSection);
};
