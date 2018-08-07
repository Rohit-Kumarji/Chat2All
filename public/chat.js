var socket=io.connect("https://chat2all.herokuapp.com");
var message=document.getElementById('message');
var output=document.getElementById('output');
var btn=document.getElementById('send');
var feedback=document.getElementById('feedback');
var handle=document.getElementById('handle');

btn.addEventListener("click",function(){
	socket.emit("chat",{message:message.value,handle:handle.value});
});
message.addEventListener("keypress",function(){
	socket.emit("typing",handle.value);
});

socket.on("chat",function(data){
	feedback.innerHTML="";
	output.innerHTML+="<p><strong>"+data.handle+":</strong>"+data.message+"</p>";
});
socket.on("typing",function(data){
	feedback.innerHTML="<p><em>"+data+" is typing a message....</em></p>";
});