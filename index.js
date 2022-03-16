const msgs = [
"",
"Россия вторглась в демократическую Украину. Гибнут невинные люди. Не верьте путинской пропаганде. Ищите правду в Интернете. Протестуйте и организуйте!",
"Привет, мы не знакомы, но я решил написать тебе. Россия находится в процессе разрушения демократической Украины. Вы должны остановить Путина.",
"Не верьте путинской лжи. Россия находится в процессе уничтожения Украины. Не принимайте это. Протесты!",
"Нам нужна ваша помощь, чтобы остановить Путина. Война на Украине исключительно по его вине. Из-за него гибнут невинные россияне и украинцы. Если не верите в меня, то читайте СМИ, не подпадающие под путинскую цензуру. Протесты!",
"Привет. Я твой друг из Дании. Нельзя верить российским СМИ. Правда в том, что Россия вторглась в демократическую Украину с целью поставить ее под диктатуру Путина. Нам нужна ваша помощь, чтобы остановить Путина. Протесты!"
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
