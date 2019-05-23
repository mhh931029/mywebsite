var sierialNumbers = document.getElementsByClassName("sierial_num");
for (var i = 0; i < sierialNumbers.length; i ++) {
	sierialNumbers[i].innerText = i + 1;
	sierialNumbers[i].style.textAlign = "center";
	var randomNum = parseInt(Math.random() * 900 + 100);
	sierialNumbers[i].nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.firstChild.value = randomNum;
}