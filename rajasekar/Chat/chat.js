function showMessage() {
    var msg = document.querySelector("input[name=text-input]").value;
    var d = new Date();
    var textMsg = "";
    var timeStamp = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    fetch('http://localhost:3000/posts/', {
        method: 'post',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "userid": 5, "message": msg, "time": timeStamp })
    }).then(function (response) {
        textMsg = '<div class="row message-1"><div class="col-sm-8 message-1__text" id="inner-div">' + msg + '</div><div class="col-sm-4 message-1__image"><img src="aco_bot.jpg" alt="Bot" style="width:50%"></div><div id="time">' + timeStamp + '</div>';
        document.getElementById("add-chat").innerHTML += textMsg;
        document.querySelector("input[name=text-input]").value = '';
    }).catch(function (err) {
    });
}

function fetchMessage() {
    var messages = '';
    fetch('http://localhost:3000/posts/').then(function (response) {
        return response.json();
    }).then(function (myJson) {
        for (var key in myJson) {
            messages = '<div class="row message-1"><div class="col-sm-8 message-1__text" id="inner-div">' + myJson[key]["message"] + '</div><div class="col-sm-4 message-1__image"><img src="aco_bot.jpg" alt="Bot" style="width:50%"></div><div id="time">' + myJson[key]["time"] + '</div>';
            document.getElementById("add-chat").innerHTML += messages;
        }
    }).catch(function (err) {
    });
}