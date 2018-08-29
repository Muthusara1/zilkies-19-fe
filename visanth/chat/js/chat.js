window.onload = function(){
    // url (required), options (optional)
    var node="";
    fetch("http://localhost:3000/posts/").then(function(response){
        return response.json();
    }).then(function(myJson) {
        for( var key in myJson ){
            node+="<div class='right-user'><div class='message'><p>" + myJson[key]["message"] + "</p><div class='time'>"+myJson[key]["time"]+"</div></div><img class='user-img' src='../images/index.jpeg' /> </div>";
        }
        node+="<div class='messages'></div>";
        document.getElementById("messages").innerHTML=node;
    }).catch(function() {
        //console.log(err);
    });
};
var submitButton = document.getElementById("submit-button");
submitButton.onclick = function(){
    var message = document.getElementById("inputText").value;
    var datetime =new Date();
    var time = (datetime.getHours()<10)?("0"+datetime.getHours().toString()):(datetime.getHours().toString());
    time += ":";
    time += (datetime.getMinutes()<10)?"0"+(datetime.getMinutes().toString()):(datetime.getMinutes().toString());
    time +=":";
    time += (datetime.getSeconds()<10)?("0"+datetime.getSeconds().toString()):(datetime.getSeconds().toString());
    fetch("http://localhost:3000/posts/", {
        method: "post",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"message": message , "time":time})
    }).then(function() {
        var node = "<div class='right-user'><div class='message'><p>" + message + "</p><div class='time'>"+time+"</div></div><img class='user-img' src='../images/index.jpeg' /> </div>";
        node+="<div class='messages'></div>";
        document.getElementById("messages").innerHTML += node;
        document.getElementById("inputText").value="";
        //	console.log(response);
    }).catch(function() {
        //console.log(err);
    });
};
