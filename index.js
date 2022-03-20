const msgs = [
"",
"Остановить войну в Украине. Не верьте пропаганде. Акция протеста!",
"https://www.youtube.com/watch?v=4e1BndTE6Lg",
"Вы знаете кого-нибудь, у кого украинская семья? Спросите их о войне.",
"Путин несет ответственность за военные преступления в Украине.",
"Путин лжет. Напиши мне, если хочешь услышать правду о войне в Украине."
]

var message = msgs[0];

function selectMsg(id) {
	message = msgs[id];
}

function reqListener () {
	console.log(this.responseText);
	var number = "+" + this.responseText;
	var hrefTarget = "sms://" + number + ";?&body=" + message;

	var elm = document.createElement("a");
  var elmpreText = document.createTextNode("Tryk her for at sende besked til:");
	var elmText = document.createTextNode(number);
	elm.appendChild(elmpreText);
  elm.appendChild(elmText);
	elm.setAttribute('href', hrefTarget);

	var elmdiv = document.createElement("div");
	elmdiv.appendChild(elm);
	document.getElementById("numbers").appendChild(elmdiv);
}

function getNumbers() {
	console.log("getnumbers called");
	var count = document.getElementById("count").value;
	document.getElementById("numbers").innerHTML = "";
	while(count--) {
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.open("GET", "https://api.1920.in/");
		oReq.send();
	}
}

function copyMsg(){
	var promise = navigator.clipboard.writeText(message).then(function() {
  	console.log("Message copied!");
	}, function() {
  	console.log("Failed to copy message!");
	});
}

