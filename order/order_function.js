var body = document.querySelector("body");
var box = document.querySelector("#box");
var h3s = document.getElementsByTagName("h3");
//获取cookie方法
function getCookie(key){
	var arr = document.cookie.split("; ");//以; 为界限进行分割
	//通过循环对数组中的字符串再次进行分割
	for (var i = 0; i < arr.length; i ++){
		var arr2 = arr[i].split("=");
		//通过判断获取对应key的值
		if (arr2[0] == key){
			return arr2[1];
		}
	}
}
//获取诊所名
var sessionId = getCookie("PHPSESSID");
function runOnce(fn){
	fn();
	fn = null;
}
function getClinicName() {
	var sessionId = getCookie("PHPSESSID");
	requestByGET("http://www.maierlefu.com/mywebsite/php/select_client.php?PHPSESSID=" + sessionId, function(response){
		if (response.indexOf("client is") != -1 && response.indexOf("client name ends") != -1) {
			var clientName = (response.substring(response.indexOf("client is") + 9, response.indexOf("client name ends")));
			clinicName.value = clientName;
		}else{
			self.location.href = "../login/login.html";
		}
	});
}
runOnce(getClinicName);

//缩小火狐浏览器显示字体大小(默认的字体太大)
if (window.navigator.userAgent.toUpperCase().indexOf("FIREFOX") != -1) {
	box.style.fontSize = "0.875rem";
	box.style.lineHeight = "1.125rem";
	for (var i = 0; i < h3s.length; i ++){
		h3s[i].style.fontSize = "0.9375rem";
		h3s[i].style.fontWeight = "normal";
	}
}

//listLeft选单
var productsTypeLis = document.getElementById("leftUl").getElementsByTagName("li");
//产品清单
var productsDivs = document.getElementById("right").getElementsByTagName("div");

//点击左侧产品种类列表展示相应产品
for (var i = 0; i < productsTypeLis.length; i ++) {
	productsTypeLis[i].index = i;
	productsTypeLis[i].onclick = function(){
    	for (var j = 0; j < productsTypeLis.length; j ++) {
     		productsTypeLis[j].style.backgroundColor = "transparent";
     		productsDivs[j].style.display = "none";
     		show.style.zIndex = -1;
     		show.style.boxShadow = "none";
     	}
     	this.style.backgroundColor = "skyblue";
        productsDivs[this.index].style.display = "block";
        if (show.id == "single") {
        	resetSubsOfShow("all", "single");
        }else if (show.id == "bankou") {
        	resetSubsOfShow("all", "bankou");
        }else if (show.id == "quankou"){
        	resetSubsOfShow("all", "quankou");
        }else{
        	resetSubsOfShow("all");
        }
	}
}

//根据浏览器窗口大小锁定页面布局的宽高
var clientWidth = document.body.offsetWidth;
var clientHeight = document.body.offsetHeight;
var inputs = document.getElementsByTagName('input');
var tds = document.getElementsByTagName("td");
//检测是否使用移动端浏览,如果是移动端,做相应调整
function deviceDetector(){
	var userAgent = navigator.userAgent.toLowerCase();
	var isPad = userAgent.match(/ipad/i) == "ipad";
	var isIphone = userAgent.match(/iphone os/i) == "iphone os";
	var isAndroid = userAgent.match(/android/i) == "android";
	if (isPad || isIphone || isAndroid){
		body.style.backgroundImage = "none";
		body.style.backgroundColor = "none";
		box.style.backgroundColor = "skyblue";
		box.style.opacity = 1;
		
	}
}
deviceDetector();

//获取doctor_patient_profile信息
var clinicName = document.querySelector("#clinic_name");
var doctorName = document.querySelector("#doctor_name");
var doctorPhone = document.querySelector("#doctor_phone");
var patientName = document.querySelector("#patient_name");
var patientAge = document.querySelector("#patient_age");
var patientSexMale = document.querySelector("#patient_sex_male");
var patientSexFemale = document.querySelector("#patient_sex_female");
var patientPhone = document.querySelector("#patient_phone");
var orderYear = document.querySelector("#order_year");
var orderMonth = document.querySelector("#order_month");
var orderDay = document.querySelector("#order_day");
var orderHour = document.querySelector("#order_hour");
var deliveryYear = document.querySelector("#delivery_year");
var deliveryMonth = document.querySelector("#delivery_month");
var deliveryDay = document.querySelector("#delivery_day");
var deliveryHour = document.querySelector("#delivery_hour");
//获取试做信息,随单附品,医生说明和技工备注
var shiNeiguan = document.querySelector("#shineiguan");
var shiCiya = document.querySelector("#shiciya");
var shiZhijia = document.querySelector("#shizhijia");
var shiPaiya = document.querySelector("#shipaiya");
var suidanfupinLadiShuliang = document.querySelector("#suidanfupin_ladi_shuliang");
var suidanfupinJiuyaShuliang = document.querySelector("#suidanfupin_jiuya_shuliang");
var suidanfupinRengongyayinShuliang = document.querySelector("#suidanfupin_rengongyayin_shuliang");
var suidanfupinTuopanShuliang = document.querySelector("#suidanfupin_tuopan_shuliang");
var suidanfupinHejiaShuliang = document.querySelector("#suidanfupin_hejia_shuliang");
var suidanfupinCankaomoShuliang = document.querySelector("#suidanfupin_cankaomo_shuliang");
var suidanfupinJitaiShuliang = document.querySelector("#suidanfupin_jitai_shuliang");
var suidanfupinZhuanyiganShuliang = document.querySelector("#suidanfupin_zhuanyigan_shuliang");
var suidanfupinTidaitiShuliang = document.querySelector("#suidanfupin_tidaiti_shuliang");
var suidanfupinQita = document.querySelector("#suidanfupin_qita");
var suidanfupinQitaShuliang = document.querySelector("#suidanfupin_qita_shuliang");
var yishengshuoming = document.querySelector("#yishengshuoming");
//获取系统时间
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
var currentMonth = currentTime.getMonth() + 1;
var currentDate = currentTime.getDate();
var currentHour = currentTime.getHours();
orderYear.innerText = currentYear;
orderMonth.innerText = currentMonth;
orderDay.innerText = currentDate;
orderHour.innerText = currentHour;

function checkCart() {
	window.location.href = "cart.html";
}