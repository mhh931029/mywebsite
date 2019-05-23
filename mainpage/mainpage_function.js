var orderClickCount = 1;
var communicationClickCount = 0;
var inquiryClickCount = 0;
var mallClickCount = 0;
var order = document.getElementById("order");
order.pass = false;
var communication = document.getElementById("communication");
communication.pass = false;
var inquiry = document.getElementById("inquiry");
inquiry.pass = false;
var mall = document.getElementById("mall");
mall.pass = false;
var ad_section = document.getElementById("ad_section");
var previousClick = order;

function resetOtherThan(para) {
	for (var i = 0; i < 4; i ++){
		if (previousClick.id != para){
			previousClick.style.transformOrigin = "0 0";
			if (previousClick.id == "order"){
				previousClick.style.transform = "rotate(-90deg)";
				previousClick.style.zIndex = "4";
				orderClickCount = 0;
			}else if(previousClick.id == "communication"){
				previousClick.style.transform = "rotate(-75deg)";
				previousClick.style.zIndex = "3";
				communicationClickCount = 0;
			}else if(previousClick.id == "inquiry"){
				previousClick.style.transform = "rotate(-60deg)";
				previousClick.style.zIndex = "2";
				inquiryClickCount = 0;
			}else{
				previousClick.style.transform = "rotate(-45deg)";
				previousClick.style.zIndex = "1";
				mallClickCount = 0;
			}
			
			previousClick.style.transform = "scale(1/1.3)";
			previousClick.style.transition = "1s all";
		}
	}
}

order.onclick = function(){
	resetOtherThan(this.id);
	if (orderClickCount == 0) {
		order.style.transformOrigin = "0 0";
		order.style.transform = "rotate(0)";
		order.style.transform = "scale(1.3)";
		order.style.transition = "1s all";
		order.style.zIndex = "5";
		previousClick = this;
		console.log(this);
	}
	if (orderClickCount > 0) {
		if (!this.pass) {
			self.location.href = "http://www.maierlefu.com/mywebsite/login/login.html";
		}else{
			self.location.href = "http://www.maierlefu.com/mywebsite/order/order.html";
			orderClickCount = 0;
		}
	}
	orderClickCount += 1;
};

communication.onclick = function(){
	resetOtherThan(this.id);
	if (communicationClickCount == 0) {
		communication.style.transformOrigin = "0 0";
		communication.style.transform = "rotate(0)";
		communication.style.transform = "scale(1.3)";
		communication.style.transition = "1s all";
		communication.style.zIndex = "5";
		previousClick = this;
	}
	if (communicationClickCount > 0) {
		if (!this.pass) {
			self.location.href = "http://www.maierlefu.com/mywebsite/login/login.html";
		}else{
			self.location.href = "http://www.maierlefu.com/mywebsite/communication/communication.html";
			communicationClickCount = 0;
		}
	}
	communicationClickCount += 1;
}

inquiry.onclick = function(){
	resetOtherThan(this.id);
	if (inquiryClickCount == 0) {
		inquiry.style.transformOrigin = "0 0";
		inquiry.style.transform = "rotate(0)";
		inquiry.style.transform = "scale(1.3)";
		inquiry.style.transition = "1s all";
		inquiry.style.zIndex = "5";
		previousClick = this;
	}
	if (inquiryClickCount > 0) {
		if (!this.pass) {
			self.location.href = "http://www.maierlefu.com/mywebsite/login/login.html";
		}else{
			self.location.href = "http://www.maierlefu.com/mywebsite/inquiry/inquiry.html";
			inquiryClickCount = 0;
		}
	}
	inquiryClickCount += 1;
}

mall.onclick = function(){
	resetOtherThan(this.id);
	if (mallClickCount == 0) {
		mall.style.transformOrigin = "0 0";
		mall.style.transform = "rotate(0)";
		mall.style.transform = "scale(1.3)";
		mall.style.transition = "1s all";
		mall.style.zIndex = "5";
		previousClick = this;
	}
	if (mallClickCount > 0) {
		if (!this.pass) {
			self.location.href = "http://www.maierlefu.com/mywebsite/login/login.html";
		}else{
			self.location.href = "http://www.51aiyaku.com/";
			mallClickCount = 0;
		}
	}
	mallClickCount += 1;
}

function generateLoginArea(loginStatus, str) {
	var myAccountBtn = document.createElement("div");
	myAccountBtn.style.display = "inline-block";
	myAccountBtn.style.marginTop = 10 + "px";
	myAccountBtn.style.width = document.getElementById("header").offsetWidth * 0.965 - document.getElementById("header_img1").offsetWidth - document.getElementById("header_img2").offsetWidth + "px";
	myAccountBtn.style.height = 50 + "px";
	myAccountBtn.style.color = "gray";
	myAccountBtn.style.textDecoration = "none";
	myAccountBtn.style.fontFamily = "Microsoft YaHei";
	myAccountBtn.style.textAlign = "center";
	document.getElementById("header").appendChild(myAccountBtn);
	var topHalf = document.createElement("div");
	topHalf.style.width = myAccountBtn.offsetWidth + "px";
	topHalf.style.height = 25 + "px";
	myAccountBtn.appendChild(topHalf);
	var bottomHalf = document.createElement("div");
	bottomHalf.style.width = myAccountBtn.offsetWidth + "px";
	bottomHalf.style.height = 25 + "px";
	bottomHalf.style.verticalAlign = "top";
	myAccountBtn.appendChild(bottomHalf);
	var bottomSub1 = document.createElement("div");
	bottomSub1.style.display = "inline-block";
	bottomSub1.style.width = myAccountBtn.offsetWidth * 0.8 + "px";
	bottomSub1.style.height = 25 + "px";
	bottomSub1.style.verticalAlign = "top";
	bottomSub1.style.textAlign = "right";
	bottomHalf.appendChild(bottomSub1);
	var bottomSub2 = document.createElement("div");
	bottomSub2.style.display = "inline-block";
	bottomSub2.style.width = myAccountBtn.offsetWidth * 0.2 + "px";
	bottomSub2.style.height = 25 + "px";
	bottomSub2.style.verticalAlign = "top";
	bottomSub2.style.cursor = "pointer";
	bottomHalf.appendChild(bottomSub2);
	switch (loginStatus) {
		case "logged in":
			order.pass = true;
			communication.pass = true;
			inquiry.pass = true;
			mall.pass = true;
			topHalf.innerText = str;
			topHalf.style.cursor = "pointer";
			bottomSub1.innerText = "欢迎您回来!";
			bottomSub2.innerText = "退出";
			topHalf.onmouseenter = function(){
				this.style.color = "black";
			}
			topHalf.onmouseleave = function(){
				this.style.color = "gray";
			}
			topHalf.onclick = function(){

			}
			bottomSub2.onmouseenter = function(){
				this.style.color = "black";
			}
			bottomSub2.onmouseleave = function(){
				this.style.color = "gray";
			}
			bottomSub2.onclick = function(){
				requestByGET("http://www.maierlefu.com/mywebsite/php/select_client.php?PHPSESSID=''", function(response){
					console.log(response);
					if (response.indexOf("need login") != -1) {
						topHalf.innerText = "";
						bottomSub1.innerText = "";
						bottomSub2.innerText = "登录";
						location.reload();
					}
				});
			}
			break;
		case "logged out":
			topHalf.innerText = "";
			bottomSub1.innerText = "";
			bottomSub2.innerText = "登录";
			bottomSub2.onmouseenter = function(){
				this.style.color = "black";
			}
			bottomSub2.onmouseleave = function(){
				this.style.color = "gray";
			}
			bottomSub2.onclick = function(){
				self.location.href = "http://www.maierlefu.com/mywebsite/login/login.html";
			}
			break;
	}
}

window.onload = function(){
	var sessionId = getCookie("PHPSESSID");
    console.log("PHPSESSID是:" + sessionId);
	requestByGET("http://www.maierlefu.com/mywebsite/php/select_client.php?PHPSESSID=" + sessionId, function(response){
		console.log(response);
		if (response.indexOf("client is") != -1 && response.indexOf("client name ends") != -1) {
			var clientName = (response.substring(response.indexOf("client is") + 9, response.indexOf("client name ends")));
			generateLoginArea("logged in", clientName);
		}else{
			generateLoginArea("logged out", "");
		}
	});
}


function addCookie(key, value, day,path){//添加cookie   
    var str = key + "=" + escape(value);   
    if (day > 0) {//为0时不设定过期时间，浏览器关闭时cookie自动消失   
        var date = new Date();   
        var ms = day * 3600 * 1000;   
        date.setTime(date.getTime() + ms);   
        str += "; expires=" + date.toGMTString();
        str += "; path=/" + path;
    }   
    document.cookie = str;      
}   

function getCookie(key){//获取指定名称的cookie的值
    var arrStr = document.cookie.split("; ");
    console.log(arrStr)
    for (var i = 0; i < arrStr.length; i++) {   
        var temp = arrStr[i].split("=");   
        if (temp[0] == key)   
            return unescape(temp[1]);   
    }   
}   

//删除cookie方法
function removeCookie(key){
	addCookie(key, "",-1);//修改过期日期来快速删除
}
// 获取窗口宽度
if (window.innerWidth) {
	winWidth = window.innerWidth;
}else if ((document.body) && (document.body.clientWidth)) {
	winWidth = document.body.clientWidth;
}
// 获取窗口高度
if (window.innerHeight) {
	winHeight = window.innerHeight;
}else if ((document.body) && (document.body.clientHeight)) {
	winHeight = document.body.clientHeight;
}
// 通过深入 Document 内部对 body 进行检测，获取窗口大小
if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
{
	winHeight = document.documentElement.clientHeight;
	winWidth = document.documentElement.clientWidth;
}

document.body.style.width = winWidth + "px";
document.body.style.height = winHeight + "px";
ad_section.style.height = winHeight * 0.80 + "px";