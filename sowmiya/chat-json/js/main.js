function post(event){
    event.preventDefault();
    var content=document.getElementById("chat").value;
    var date=new Date();
    var time=date.toLocaleTimeString();
    fetch("http://localhost:3000/chat", {
	method: 'POST', 
	headers: new Headers({
    "Accept":"application/json",
    "Content-Type":"application/json" 	
    }),
    body: JSON.stringify({
        "content":content,
        "time": time
    })
}).then(function() { alert("added"); })
}

function addContent(){
    fetch('http://localhost:3000/chat').then(function(response) { 
       return response.json();
    }).then(function(json) {
        for(key in json){
            var time=json[key].time;
            var content=json[key].content;
            var body=document.getElementsByClassName("main-content")[0];
            var message=document.createElement("div");
            var message_content=document.createElement("div");
            var message_paragraph=document.createElement("div");
            var message_time=document.createElement("div");
            var image_div=document.createElement("div");
            var paragraph_content=document.createElement("p");
            var paragraph_time=document.createElement("p");
            var image=document.createElement("img");
            message.className="message";
            message_content.className="message__content";
            message_paragraph.className="message_paragraph";
            message_time.className="message_time";
            image_div.className="message__image";
            paragraph_content.innerHTML=content;
            paragraph_time.innerHTML=time;
            image.src="../asserts/profile.jpg";
            image_div.appendChild(image);
            message_paragraph.appendChild(paragraph_content);
            message_time.appendChild(paragraph_time);
            message_content.appendChild(message_paragraph);
            message_content.appendChild(message_time);
            message.appendChild(message_content);
            message.appendChild(image_div);
            body.appendChild(message);
        }
    });
}
