function checkForm() {
	var flag1 = "off";
	var flag2 = "off";
	var flag3 = "off";
	var flag4 = "off";
	var flag5 = "off";
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
	
	if (flag1 == "on" && flag2 == "on" && flag3 == "on" && flag4 == "on" && flag5 == "on") {
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
	var subNumber = createSubNumber();
	switch(show.id){
		case "substitute":
			var tooth = generateTooth();
			switch(showSubdiv2Sub2.hasChildNodes()){
				case true:
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":zuhanqiShuliang.value}, {"shangbankouSelected":""}, {"xiabankouSelected":""}, {"orderNumber": subNumber}, tooth);
					break;
				case false:
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":""}, {"orderNumber": subNumber}, tooth);
					break;
				default:
					break;
			}
			break;
		case "bankou":
			var tooth = generateTooth();
			switch(bankouResult){
				case "shangbankou":
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":"true"}, {"xiabankouSelected":""}, {"orderNumber": subNumber}, tooth);
					break;
				case "xiabankou":
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":"true"}, {"orderNumber": subNumber}, tooth);
					break;
				case "quankou":
					productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":"true"}, {"xiabankouSelected":"true"}, {"orderNumber": subNumber}, tooth);
					break;
			}
			break;
		case "quankou":
			var tempLi = document.getElementsByClassName("paiyaLi");
			productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":""}, {"jiyase":""}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":""}, {"orderNumber": subNumber});
			//遍历productDetails数组,将排牙息插入进去
			for (var i = 0; i < productDetails.length; i ++) {
				for (var j = 0; j < tempLi.length; j ++) {
					if (tempLi[j].id.substring(7) == productDetails[i]["toothPosition"]) {
						productDetails[i].paiyaInfo = tempLi[j].lastChild.value;
					}
				}
			}
			break;
		case "single":
			var tempLi = document.getElementsByClassName("biseLi");
			productDetails.splice(1, 0, {"clinicName":clinicName.value}, {"doctorName": doctorName.value}, {"doctorPhone": doctorPhone.value}, {"patientName":patientName.value}, {"patientAge":patientAge.value}, {"patientSex": patientSex}, {"patientPhone":patientPhone.value}, {"orderYear":orderYear.innerText}, {"orderMonth":orderMonth.innerText}, {"orderDay":orderDay.innerText}, {"orderHour":orderHour.innerText}, {"deliveryYear":deliveryYear.value}, {"deliveryMonth":deliveryMonth.value}, {"deliveryDay":deliveryDay.value}, {"deliveryHour":deliveryHour.value}, {"shiNeiguan":shiNeiguan.checked}, {"shiCiya":shiCiya.checked}, {"shiZhijia":shiZhijia.checked}, {"shiPaiya":shiPaiya.checked}, {"suidanfupinLadiShuliang":suidanfupinLadiShuliang.value}, {"suidanfupinJiuyaShuliang":suidanfupinJiuyaShuliang.value}, {"suidanfupinRengongyayinShuliang":suidanfupinRengongyayinShuliang.value}, {"suidanfupinTuopanShuliang":suidanfupinTuopanShuliang.value}, {"suidanfupinHejiaShuliang":suidanfupinHejiaShuliang.value}, {"suidanfupinCankaomoShuliang":suidanfupinCankaomoShuliang.value}, {"suidanfupinJitaiShuliang":suidanfupinJitaiShuliang.value}, {"suidanfupinZhuanyiganShuliang":suidanfupinZhuanyiganShuliang.value}, {"suidanfupinTidaitiShuliang":suidanfupinTidaitiShuliang.value}, {"suidanfupinQita":suidanfupinQita.value}, {"suidanfupinQitaShuliang":suidanfupinQitaShuliang.value}, {"yishengshuoming":yishengshuoming.value}, {"colorSystem":colorSystem.value}, {"jiyase":jiyase.value}, {"zuhanqiShuliang":""}, {"shangbankouSelected":""}, {"xiabankouSelected":""}, {"orderNumber": subNumber});
			//遍历productDetails数组,将比色信息插入进去
			for (var i = 0; i < productDetails.length; i ++) {
				for (var j = 0; j < tempLi.length; j ++) {
					if (tempLi[j].id.substring(6) == productDetails[i]["toothPosition"]) {
						productDetails[i].colorInfo = tempLi[j].lastChild.value;
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
//生成订单号的分单号
function createSubNumber() {
	var a = parseInt(Math.random() * 10).toString();
	var b = parseInt(Math.random() * 10).toString();
	var c = parseInt(Math.random() * 10).toString();
	var d = parseInt(Math.random() * 10).toString();
	var e = parseInt(Math.random() * 10).toString();
	var f = parseInt(Math.random() * 10).toString();
	return a + b + c + d + e + f;
}