function checkForm() {
	var flag1 = "off";
	var flag2 = "off";
	var flag3 = "off";
	var flag4 = "off";
	var flag5 = "off";
	var flag6 = "off";
	var flag7 = "off";
	var flag8 = "off";
	var flag9 = "off";
	//表单填写代码
	if (doctorName.value.length == 0){
		doctorName.style.backgroundColor = "rgb(255, 150, 180)";
		doctorName.setAttribute("placeholder", "必填");
		flag1 = "off";
	}else{
		flag1 = "on";
	}
	if (doctorPhone.value.length == 0){
		doctorPhone.setAttribute("placeholder", "必填");
		doctorPhone.style.backgroundColor = "rgb(255, 150, 180)";
		flag2 = "off";
	}else if (isNaN(doctorPhone.value)){
		alert("医生电话必须为数字");
		flag2 = "off";
	}else{
		flag2 = "on";
	}
	if (patientName.value.length == 0){
		patientName.setAttribute("placeholder", "必填");
		patientName.style.backgroundColor = "rgb(255, 150, 180)";
		flag3 = "off";
	}else{
		flag3 = "on";
	}
	if (patientAge.value.length == 0){
		patientAge.setAttribute("placeholder", "必填");
		patientAge.style.backgroundColor = "rgb(255, 150, 180)";
		flag4 = "off";
	}else if (isNaN(patientAge.value)){
		alert("患者年龄必须为数字");
	}else{
		flag4 = "on";
	}
	if (patientSexMale.checked == false && patientSexFemale.checked == false){
		patientSexMale.parentNode.style.backgroundColor = "rgb(255, 150, 180)";
		flag5 = "off";
	}else{
		flag5 = "on";
	}
	//日期时间
	if (orderYear.value.length == 0){
		orderYear.setAttribute("placeholder", "必填");
		orderYear.style.backgroundColor = "rgb(255, 150, 180)";
		flag6 = "off";
	}else if (isNaN(orderYear.value)){
		alert("收件日期必须为数字");
		flag6 = "off";
	}else{
		flag6 = "on";
	}
	if (orderMonth.value.length == 0){
		orderMonth.setAttribute("placeholder", "必填");
		orderMonth.style.backgroundColor = "rgb(255, 150, 180)";
		flag7 = "off";
	}else if (isNaN(orderMonth.value)){
		alert("收件日期必须为数字");
		flag7 = "off";
	}else{
		flag7 = "on";
	}
	if (orderDay.value.length == 0){
		orderDay.setAttribute("placeholder", "必填");
		orderDay.style.backgroundColor = "rgb(255, 150, 180)";
		flag8 = "off";
	}else if (isNaN(orderDay.value)){
		alert("收件日期必须为数字");
		flag8 = "off";
	}else{
		flag8= "on";
	}
	if (orderHour.value.length == 0){
		orderHour.setAttribute("placeholder", "必填");
		orderHour.style.backgroundColor = "rgb(255, 150, 180)";
		flag10 = "off";
	}else if (isNaN(orderHour.value)){
		alert("收件日期必须为数字");
		flag9 = "off";
	}else{
		flag9 = "on";
	}
	if (flag1 == "on" && flag2 == "on" && flag3 == "on" && flag4 == "on" && flag5 == "on" && flag6 == "on" && flag7 == "on" && flag8 == "on" && flag9 == "on") {
		return true;
	}else{
		return false;
	}
}
//获取下一步按钮
var addToCartBtn = document.getElementById("add_to_cart_btn");
//定义虚拟input去接受被选中的产品
var virtualInputOfProductSelected = document.createElement("input");
addToCartBtn.onclick = function(){
	if (!checkForm()) {
		return false;
	}
	if (patientSexMale.checked == true){
		var patientSex = "男";
	}else{
		var patientSex = "女";
	}
	switch(show.id){
		case "substitute":
			var tooth = new Object();
			tooth.toothPosition = "";
			tooth.singleOrContinual = "";
			tooth.color = "";
			tooth.paiya = "";
			switch(showSubdiv2Sub2.hasChildNodes()){
				case true:
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":zuhanqiShuliang.value}, {"shangbankouSelected":""}, {"xiabankouSelected":""}, tooth);
					break;
				case false:
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":""}, tooth);
					break;
				default:
					break;
			}
			break;
		case "bankou":
			var tooth = new Object();
			tooth.toothPosition = "";
			tooth.singleOrContinual = "";
			tooth.color = "";
			tooth.paiya = "";
			switch(bankouResult){
				case "shangbankou":
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":"true"}, {"xiabankouSelected":""}, tooth);
					break;
				case "xiabankou":
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":"true"}, tooth);
					break;
				case "quankou":
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":"true"}, {"xiabankouSelected":"true"}, tooth);
					break;
			}
			break;
		case "quankou":
			var tempLi = document.getElementsByClassName("paiyaLi");
			productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":""});
			//遍历productDetails数组,将排牙息插入进去
			for (var i = 0; i < productDetails.length; i ++) {
				for (var j = 0; j < tempLi.length; j ++) {
					if (tempLi[j].id.substring(7) == productDetails[i]["toothPosition"]) {
						productDetails[i].paiya = tempLi[j].lastChild.value;
						productDetails[i].color = "";
					}
				}
			}
			break;
		case "single":
			var tempLi = document.getElementsByClassName("biseLi");
			productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.value}, {"orderMonth":orderMonth.value}, {"orderDay":orderDay.value}, {"orderHour":orderHour.value}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":colorSystem.value}, {"jiyase":jiyase.value}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":""});
			//遍历productDetails数组,将比色信息插入进去
			for (var i = 0; i < productDetails.length; i ++) {
				for (var j = 0; j < tempLi.length; j ++) {
					if (tempLi[j].id.substring(6) == productDetails[i]["toothPosition"]) {
						productDetails[i].color = tempLi[j].lastChild.value;
						productDetails[i].paiya = "";
					}
				}
			}
			break;
		default:
			break;
	}
	
	//把产品详情的数组转成JSON字符串
	var jsonOfProductDetails = JSON.stringify(productDetails);
	//创建要提交的虚拟表单
	var virtualFrom = document.createElement("form");
	document.body.appendChild(virtualFrom);
	//创建虚拟输入框
	var virtualInput = document.createElement("input");
	virtualInput.type = "hidden";
	virtualInput.name = "jsonOfProductDetails";
	virtualInput.value = jsonOfProductDetails;
	virtualFrom.appendChild(virtualInput);
	virtualFrom.action = "http://localhost/mywebsite/php/add_to_cart.php";
	virtualFrom.target = "_blank";
	virtualFrom.method = "post";
	virtualFrom.submit();
	show.style.zIndex = -1;
	for (var i = 0; i < productDetails.length; i ++) {
		console.log(productDetails[i]);
	}
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