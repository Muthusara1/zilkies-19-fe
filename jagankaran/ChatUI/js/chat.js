window.onload = postdata();
document.getElementById("send_button").onclick = function () {
    var message = document.getElementById("message").value;
    document.getElementById("message").value = "";
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var time = hour + ":" + minute;
    let url = "http://localhost:3000/messages";
    let fetchdata = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "message": message, "time": time })
    };
    //alert(time)
    fetch(url, fetchdata);
    fetch(url)
        .then(response => response.json());
    {
        var conversationarea = document.getElementsByClassName("chatbox-conversationarea")[0];

        var chatarea = document.createElement("div");
        chatarea.className = "conversationarea_chat";

        var chatdivision = document.createElement("div");
        chatdivision.className = "chatdivision";

        var messagenode = document.createElement("div");
        messagenode.className = "message";
        messagenode.innerHTML = message;
        var timenode = document.createElement("div");
        timenode.className = "time";
        timenode.innerHTML = time;
        var imagenode = document.createElement("div");
        imagenode.className = "userimagedivision";

        var image = document.createElement("img");
        image.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png");

        imagenode.appendChild(image);
        chatdivision.appendChild(messagenode);
        chatdivision.appendChild(timenode);
        chatarea.appendChild(chatdivision);
        chatarea.appendChild(imagenode);
        conversationarea.appendChild(chatarea);
    }
};

function postdata() {
    let url = "http://localhost:3000/messages";
    fetch(url)
        .then(response => response.json())
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var conversationarea = document.getElementsByClassName("chatbox-conversationarea")[0];

                var chatarea = document.createElement("div");
                chatarea.className = "conversationarea_chat";

                var chatdivision = document.createElement("div");
                chatdivision.className = "chatdivision";

                var messagenode = document.createElement("div");
                messagenode.className = "message";
                messagenode.innerHTML = data[i].message;

                var timenode = document.createElement("div");
                timenode.className = "time";
                timenode.innerHTML = data[i].time;
                var imagenode = document.createElement("div");
                imagenode.className = "userimagedivision";

                var image = document.createElement("img");
                image.setAttribute("src", "https://cdn1.iconfinder.com/data/icons/freeline/32/account_friend_human_man_member_person_profile_user_users-512.png");

                imagenode.appendChild(image);
                chatdivision.appendChild(messagenode);
                chatdivision.appendChild(timenode);
                chatarea.appendChild(chatdivision);
                chatarea.appendChild(imagenode);
                conversationarea.appendChild(chatarea);
            }
        }
        );
};