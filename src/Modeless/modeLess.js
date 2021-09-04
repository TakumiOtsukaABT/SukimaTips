let receivedMessage = localStorage.getItem('showNext');
var text = document.getElementById("tipsText");
console.log("モードレスやで");
console.log(receivedMessage);
text.innerHTML = "<p>"+receivedMessage+"</p>";
