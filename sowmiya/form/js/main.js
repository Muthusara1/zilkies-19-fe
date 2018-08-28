function validateEmail(){
    var email=document.getElementsByName("email")[0].value;
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)){
        document.getElementById("validInput3").innerHTML="";
        return true;
    }
    else{
        document.getElementById("validInput3").innerHTML="Enter a valid email";
        return false;
    }
}
function validateName(){
    var name=document.getElementsByName("Name")[0].value;
    if(/^[a-zA-Z\\-]+$/.test(name)){
        document.getElementById("validName").innerHTML="";
        return true;
    }
    else{
        document.getElementById("validName").innerHTML="Enter a valid name without spaces";
        return false;
    }

}
function validateInput(){
    var val=document.getElementsByName("time");
    var flag=true;
    var nodes;
    for(var count=0;count<val.length;count++){
        if(val[count].checked){
        break;
        }
    }
    if(count==val.length)
    {
        document.getElementById("validInput1").innerHTML="Enter any one timeframe<br>";
        flag=false;
    }
    val=document.getElementsByName("project-type");
    count=0;
    for(var count=0;count<val.length;count++){
        if(val[count].checked){
        break;
        }
    }
    if(count==val.length)
    {
        document.getElementById("validInput2").innerHTML="Enter any one project-type<br>";
        flag=false;
    }
    nodes = document.querySelectorAll("input[type='text']");
    document.getElementById("Input").innerHTML="";
    for (var i=0; i<nodes.length; i++){
    if (nodes[i].value.length==0)
    {   
        document.getElementById("Input").innerHTML="*All feilds are mandatory";
        flag=false;
        break;
    }
}
    return flag;
    }
