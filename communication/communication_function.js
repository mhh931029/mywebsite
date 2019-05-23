
/*
 * 沟通系统中只有工厂未完工的产品才显示出来
 */

var body = document.querySelector("body");
var box = document.createElement("div");
var header = document.createElement("div");
var main = document.createElement("div");
//定义变量记录每个item的背景颜色
var originalBGColor = null;

body.appendChild(box);
body.appendChild(header);
box.appendChild(main);

body.style.padding = 0;
body.style.margin = 0;
body.style.width = document.offsetWidth + "px";
body.style.height = document.offsetHeight + "px";
body.style.backgroundColor = "skyblue";

box.style.width = body.offsetWidth * 0.90 + "px";
box.style.margin = "0 auto";

header.style.width = body.offsetWidth + "px";
header.style.height = 65 + "px";
header.style.backgroundColor = "skyblue";
header.style.border = "2px solid skyblue";
header.style.position = "fixed";
header.style.top = 0;
var headerImg1 = document.createElement("img");
var headerImg2 = document.createElement("img");
var cancelInquiry = document.createElement("a");
header.appendChild(headerImg1);
header.appendChild(headerImg2);
header.appendChild(cancelInquiry);
headerImg1.src = "img/logo.png";
headerImg2.src = "img/logo2.png";
headerImg1.style.width = 240 + "px";
headerImg1.style.height = 60 + "px";
headerImg1.style.marginLeft = header.offsetWidth * 0.05 + "px";
headerImg1.style.verticalAlign = "top";
headerImg2.style.width = 240 + "px";
headerImg2.style.height = 60 + "px";
headerImg2.style.verticalAlign = "top";
cancelInquiry.style.marginTop = 30 + "px";
cancelInquiry.style.marginRight = header.offsetWidth * 0.1 + "px";
cancelInquiry.style.float = "right";
cancelInquiry.style.color = "gray";
cancelInquiry.style.fontFamily = "Microsoft YaHei";
cancelInquiry.style.textDecoration = "none";
cancelInquiry.style.cursor = "pointer";
cancelInquiry.innerText = "退出查询";
cancelInquiry.onmouseenter = function(){this.style.color = "black";};
cancelInquiry.onmouseout = function(){this.style.color = "gray";};
cancelInquiry.href = "../mainpage/mainpage.html";

main.style.width = box.offsetWidth + "px";
main.style.marginTop =  70 + "px";

for (var i = 0; i < 50; i ++) {
	//创建每一条title
	var item = document.createElement("div");
	item.style.width = main.offsetWidth * 0.16 + "px";
	item.style.height = 90 + "px";
	item.style.paddingLeft = main.offsetWidth * 0.04 + "px";
	item.style.border = "1px solid gray";
	item.style.borderRadius = 5 + "px";
	item.style.boxShadow = "10px 10px 15px rgb(120, 120, 120)";
	if (i % 2 == 0) {
		item.style.backgroundColor = "white";
	}else{
		item.style.backgroundColor = "rgb(230, 230, 230)";
	}
	//创建日期div
	var dateBlock = document.createElement("div");
	dateBlock.style.height = 30 + "px";
	dateBlock.style.fontSize = 20 + "px";
	dateBlock.style.lineHeight = 30 + "px";
	// dateBlock.style.textAlign = "center";
	var dateIconArea = document.createElement("div");
	dateIconArea.style.width = 20 + "px";
	dateIconArea.style.height = 20 + "px";
	dateIconArea.style.marginTop = 3 + "px";
	dateIconArea.style.verticalAlign = "top";
	dateIconArea.style.display = "inline-block";
	var dateIconImg = document.createElement("img");
	dateIconImg.src = "img/cal.png";
	dateIconImg.style.width = 20 + "px";
	dateIconImg.style.height = 20 + "px";
	dateIconArea.appendChild(dateIconImg);
	dateBlock.appendChild(dateIconArea);
	var dateArea = document.createElement("div");
	dateArea.style.lineHeight = 30 + "px";
	dateArea.style.display = "inline-block";
	var yearBlock = document.createElement("a");
	yearBlock.innerText = parseInt(Math.random() * (2017 - 1990) + 1990);
	var yearChar = document.createElement("a");
	yearChar.innerText = "年";
	var monthBlock = document.createElement("a");
	monthBlock.innerText = parseInt(Math.random() * (12 - 1) + 1);
	var monthChar = document.createElement("a");
	monthChar.innerText = "月";
	var dayBlock = document.createElement("a");
	dayBlock.innerText = parseInt(Math.random() * (31 - 1) + 1);
	var dayChar = document.createElement("a");
	dayChar.innerText = "日";
	dateArea.appendChild(yearBlock);
	dateArea.appendChild(yearChar);
	dateArea.appendChild(monthBlock);
	dateArea.appendChild(monthChar);
	dateArea.appendChild(dayBlock);
	dateArea.appendChild(dayChar);
	dateBlock.appendChild(dateArea);
	item.appendChild(dateBlock);
	//创建医生姓名div
	var doctorBlock = document.createElement("div");
	doctorBlock.style.height = 30 + "px";
	doctorBlock.style.fontSize = 20 + "px";
	doctorBlock.style.lineHeight = 30 + "px";
	// doctorBlock.style.textAlign = "center";
	var doctorIconArea = document.createElement("div");
	doctorIconArea.style.width = 20 + "px";
	doctorIconArea.style.height = 20 + "px";
	doctorIconArea.style.marginTop = 3 + "px";
	doctorIconArea.style.verticalAlign = "top";
	doctorIconArea.style.display = "inline-block";
	var doctorIconImg = document.createElement("img");
	doctorIconImg.src = "img/doc.png";
	doctorIconImg.style.width = 20 + "px";
	doctorIconImg.style.height = 20 + "px";
	doctorIconArea.appendChild(doctorIconImg);
	doctorBlock.appendChild(doctorIconArea);
	var doctorNameArea = document.createElement("div");
	doctorNameArea.style.lineHeight = 30 + "px";
	doctorNameArea.style.textAlign = "center";
	if (i % 2 == 0) {
		doctorNameArea.innerText = "张三丰";
	}else{
		doctorNameArea.innerText = "张三";
	}
	doctorNameArea.style.display = "inline-block";
	doctorBlock.appendChild(doctorNameArea);
	item.appendChild(doctorBlock);
	//创建患者姓名div
	var patientBlock = document.createElement("div");
	patientBlock.style.height = 30 + "px";
	patientBlock.style.fontSize = 20 + "px";
	patientBlock.style.lineHeight = 30 + "px";
	// patientBlock.style.textAlign = "center";
	var patientIconArea = document.createElement("div");
	patientIconArea.style.width = 20 + "px";
	patientIconArea.style.height = 20 + "px";
	patientIconArea.style.marginTop = 3 + "px";
	patientIconArea.style.verticalAlign = "top";
	patientIconArea.style.display = "inline-block";
	var patientIconImg = document.createElement("img");
	patientIconImg.src = "img/pat.png";
	patientIconImg.style.width = 20 + "px";
	patientIconImg.style.height = 20 + "px";
	patientIconArea.appendChild(patientIconImg);
	patientBlock.appendChild(patientIconArea);
	var patientNameArea = document.createElement("div");
	patientNameArea.style.lineHeight = 30 + "px";
	patientNameArea.style.textAlign = "center";
	if (i % 2 == 0) {
		patientNameArea.innerText = "郭一楠";
	}else{
		patientNameArea.innerText = "郭一";
	}
	patientNameArea.style.display = "inline-block";
	patientBlock.appendChild(patientNameArea);
	item.appendChild(patientBlock);
	main.appendChild(item);
	item.onmouseover = function(){
		originalBGColor = this.style.backgroundColor;
		this.style.backgroundColor = "lightgreen";
		this.style.border = "1px solid green";
		this.style.boxShadow = "10px 10px 15px lightgreen";
		this.style.transition = "0.5s all";
	}
	item.onmouseout = function(){
		this.style.backgroundColor = originalBGColor;
		this.style.border = "1px solid gray";
		this.style.boxShadow = "10px 10px 15px rgb(120, 120, 120)";
		this.style.transition = "0.5s all";
	}
	item.style.cursor = "pointer";
}