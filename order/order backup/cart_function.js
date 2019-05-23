//获取html标签
var showCliniclName = document.querySelector("#show_clinic_name");
var showOrderYear = document.querySelector("#show_order_year");
var showOrderMonth = document.querySelector("#show_order_month");
var showOrderDay = document.querySelector("#show_order_day");
var showOrderHour = document.querySelector("#show_order_hour");
var showDeliveryYear = document.querySelector("#show_delivery_year");
var showDeliveryMonth = document.querySelector("#show_delivery_month");
var showDeliveryDay = document.querySelector("#show_delivery_day");
var showDeliveryHour = document.querySelector("#show_delivery_hour");
var showProducts = document.querySelector("#show_products");
var showOtherInfo = document.querySelector("#show_otherinfo");
var otherinfoDiv1 = document.querySelector("#otherinfo_div1");
var otherinfoDiv2 = document.querySelector("#otherinfo_div2");
var orderNumberArray = new Array();

//判断是否为火狐浏览器
if (window.navigator.userAgent.toUpperCase().indexOf("FIREFOX") != -1) {
	var firefox = true;
}else{
	var firefox = false;
}

window.onload = function(){
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
		requestByGET("http://localhost/mywebsite/php/select_client.php?PHPSESSID=" + sessionId, function(sessionResponse){
			if (sessionResponse.indexOf("client is") != -1 && sessionResponse.indexOf("client name ends") != -1) {
				//json数据解析
				requestByGET("http://localhost/mywebsite/php/select_cart.php", function(response){
					var resultArray = JSON.parse(response);
					showInGroups(resultArray, "patientName");
					if (resultArray.length != 0) {
						showCliniclName.innerText = resultArray[0]["clinicName"];
						showOrderYear.innerText = resultArray[0]["orderYear"];
						showOrderMonth.innerText = resultArray[0]["orderMonth"];
						showOrderDay.innerText = resultArray[0]["orderDay"];
						showOrderHour.innerText = resultArray[0]["orderHour"];
						showDeliveryYear.innerText = resultArray[0]["deliveryYear"];
						showDeliveryMonth.innerText = resultArray[0]["deliveryMonth"];
						showDeliveryDay.innerText = resultArray[0]["deliveryDay"];
						showDeliveryHour.innerText = resultArray[0]["deliveryHour"];
					}
				});
			}else{
				self.location.href = "../login/login.html";
			}
		});
	}
	runOnce(getClinicName);
}

//翻译产品名称
function translateProductName(rawProductName){
	switch(rawProductName){
		// 种植
		case "zhongzhi_hanguo_chuntai_gexinghuayitiguan":
			return "种植 韩国纯钛个性化一体冠";
			break;
		case "zhongzhi_oumei_chuntai_gexinghuayitiguan":
			return "种植 欧美纯钛个性化一体冠";
			break;
		case "zhongzhi_guochanyanghuagao_gexinghuayitiguan":
			return "种植 国产氧化锆个性化一体冠";
			break;
		case "zhongzhi_weilande_gexinghuayitiguan":
			return "种植 威兰德个性化一体冠";
			break;
		case "zhongzhi_bego_guge_gexinghuayitiguan":
			return "种植 BEGO钴铬个性化一体冠";
			break;
		case "zhongzhi_zhongzhiganka":
			return "种植 种植杆卡";
			break;
		case "zhongzhi_hanguo_chuntai_gexinghuajitai":
			return "种植 韩国纯钛个性化基台";
			break;
		case "zhongzhi_hanguo_yanghuagao_gexinghuajitai":
			return "种植 韩国氧化锆个性化基台";
			break;
		case "zhongzhi_oumei_chuntai_gexinghuajitai":
			return "种植 欧美纯钛个性化基台";
			break;
		case "zhongzhi_oumei_yanghuagao_gexinghuajitai":
			return "种植 欧美氧化锆个性化基台";
			break;
		case "zhongzhi_yanghuagao_quangao":
			return "种植 氧化锆全锆";
			break;
		case "zhongzhi_weilande_quangao":
			return "种植 威兰德全锆";
			break;
		case "zhongzhi_bianselong_quangao":
			return "种植 变色龙全锆";
			break;
		case "zhongzhi_yanghuagao_quanci":
			return "种植 氧化锆全瓷";
			break;
		case "zhongzhi_weilande_quanci":
			return "种植 威兰德全瓷";
			break;
		case "zhongzhi_bianselong_quanci":
			return "种植 变色龙全瓷";
			break;
		case "zhongzhi_bego_guge_guan":
			return "种植 BEGO钴铬冠";
			break;
		case "zhongzhi_bego_guge_kaoci":
			return "种植 BEGO钴铬烤瓷";
			break;
		case "zhongzhi_sandi_guge_guan":
			return "种植 3D打印钴铬冠";
			break;
		case "zhongzhi_sandi_guge_kaoci":
			return "种植 3D打印钴铬烤瓷";
			break;
		case "zhongzhi_sandi_chuntai_guan":
			return "种植 3D打印纯钛冠";
			break;
		case "zhongzhi_sandi_chuntai_kaosu":
			return "种植 3D打印纯钛烤塑";
			break;
		case "sandi_zhongzhi_daoban":
			return "种植 3D打印导板";
			break;
		case "zhongzhi_aregen_jin_kaosu_ya_59_9_percent":
			return "种植 AREGEN 59.5%金烤塑牙";
			break;
		case "zhongzhi_aregen_jin_kaosu_ya_74_percent":
			return "种植 AREGEN 74%金烤塑牙";
			break;
		case "zhongzhi_aregen_jin_kaosu_ya_89_5_percent":
			return "种植 AREGEN 89.5%金烤塑牙";
			break;
		case "zhongzhi_aregen_jin_kaoci_ya_74_percent":
			return "种植 AREGEN 74%金烤瓷牙";
			break;
		case "zhongzhi_aregen_jin_kaoci_ya_89_5_percent":
			return "种植 AREGEN 89.5%金烤瓷牙";
			break;
		// 固定
		case "guding_guochanyanghuagao_quangao":
			return "固定 国产氧化锆全锆";
			break;
		case "guding_guochanyanghuagao_quanci":
			return "固定 国产氧化锆全瓷";
			break;
		case "guding_guochanyanghuagao_zhuanghe":
			return "固定 国产氧化锆桩核";
			break;
		case "guding_weilande_quangao":
			return "固定 威兰德全锆";
			break;
		case "guding_weilande_quanci":
			return "固定 威兰德全瓷";
			break;
		case "guding_lava_quangao":
			return "固定 LAVA全锆";
			break;
		case "guding_lava_quanci":
			return "固定 LAVA全瓷";
			break;
		case "guding_bianselong_quangao":
			return "固定 变色龙全锆";
			break;
		case "guding_bianselong_quanci":
			return "固定 变色龙全瓷";
			break;
		case "guding_sandi_guge_zhuanghe":
			return "固定 3D打印钴铬桩核";
			break;
		case "guding_sandi_guge_qianti":
			return "固定 3D打印钴铬嵌体";
			break;
		case "guding_sandi_guge_guan":
			return "固定 3D打印钴铬冠";
			break;
		case "guding_sandi_guge_kaoci":
			return "固定 3D打印钴铬烤瓷";
			break;
		case "guding_sandi_chuntai_zhuanghe":
			return "固定 3D打印纯钛桩核";
			break;
		case "guding_sandi_chuntai_qianti":
			return "固定 3D打印纯钛嵌体";
			break;
		case "guding_sandi_chuntai_guan":
			return "固定 3D打印纯钛冠";
			break;
		case "guding_sandi_chuntai_juheci":
			return "固定 3D打印纯钛聚合瓷";
			break;
		case "guding_bego_guge_zhuanghe":
			return "固定 BEGO钴铬桩核";
			break;
		case "guding_bego_guge_qianti":
			return "固定 BEGO钴铬嵌体";
			break;
		case "guding_bego_guge_guan":
			return "固定 BEGO钴铬冠";
			break;
		case "guding_bego_guge_kaoci":
			return "固定 BEGO钴铬烤瓷";
			break;
		case "guding_bego_guge_juheci":
			return "固定 BEGO钴铬聚合瓷";
			break;
		case "guding_juheci_qianti":
			return "固定 聚合瓷嵌体";
			break;
		case "guding_aregen_jin_kaoci_ya_59_9_percent":
			return "固定 AREGEN 59.9%金烤瓷牙";
			break;
		case "guding_aregen_jin_kaoci_ya_74_percent":
			return "固定 AREGEN 74%金烤瓷牙";
			break;
		case "guding_aregen_jin_kaoci_ya_89_5_percent":
			return "固定 AREGEN 89.5%金烤瓷牙";
			break;
		case "guding_aregen_jin_kaosu_ya_59_9_percent":
			return "固定 AREGEN 59.9%金烤塑牙";
			break;
		case "guding_aregen_jin_kaosu_ya_74_percent":
			return "固定 AREGEN 74%金烤塑牙";
			break;
		case "guding_aregen_jin_kaosu_ya_89_5_percent":
			return "固定 AREGEN 89.5%金烤塑牙";
			break;
		case "guding_aregen_jin_guan_59_9_percent":
			return "固定 AREGEN 59.9%金冠";
			break;
		case "guding_aregen_jin_guan_74_percent":
			return "固定 AREGEN 74%金冠";
			break;
		case "guding_aregen_jin_guan_89_5_percent":
			return "固定 AREGEN 89.5%金冠";
			break;
		case "guding_aregen_jin_qianti_59_9_percent":
			return "固定 AREGEN 59.9%金嵌体";
			break;
		case "guding_aregen_jin_qianti_74_percent":
			return "固定 AREGEN 74%金嵌体";
			break;
		case "guding_aregen_jin_qianti_89_5_percent":
			return "固定 AREGEN 89.5%金嵌体";
			break;
		case "guding_aregen_jin_zhuanghe_59_9_percent":
			return "固定 AREGEN 59.9%金桩核";
			break;
		case "guding_aregen_jin_zhuanghe_74_percent":
			return "固定 AREGEN 74%金桩核";
			break;
		case "guding_aregen_jin_zhuanghe_89_5_percent":
			return "固定 AREGEN 89.5%金桩核";
			break;
		case "guding_linshiguan_cad":
			return "固定 临时冠CAD";
			break;
		case "guding_linshiguan_cam":
			return "固定 临时冠CAM";
			break;
		case "guding_laxingsheji":
			return "固定 蜡型设计";
			break;
		case "guding_jiantaici":
			return "固定 肩台瓷";
			break;
		case "guding_yayinci":
			return "固定 牙龈瓷";
			break;
		// 活动
		case "huodong_sandi_zhijia_da_guge":
			return "活动 3D打印钴铬大支架";
			break;
		case "huodong_sandi_zhijia_xiao_guge":
			return "活动 3D打印钴铬小支架";
			break;
		case "huodong_sandi_zhijia_da_chuntai":
			return "活动 3D打印纯钛大支架";
			break;
		case "huodong_sandi_zhijia_xiao_chuntai":
			return "活动 3D打印纯钛小支架";
			break;
		case "huodong_zhijia_da_bego":
			return "活动 BEGO大支架";
			break;
		case "huodong_zhijia_da_nuobiling":
			return "活动 诺必灵大支架";
			break;
		case "huodong_zhijia_da_weitaling_2000":
			return "活动 维他灵2000大支架";
			break;
		case "huodong_zhijia_xiao_bego":
			return "活动 BEGO小支架";
			break;
		case "huodong_zhijia_xiao_nuobiling":
			return "活动 诺必灵小支架";
			break;
		case "huodong_zhijia_xiao_weitaling_2000":
			return "活动 维他灵2000小支架";
			break;
		case "huodong_paiya_kaifeng_zhusuzhuya":
			return "活动 凯丰注塑煮牙";
			break;
		case "huodong_paiya_kaijing_zhusuzhuya":
			return "活动 凯晶注塑煮牙";
			break;
		case "huodong_paiya_shofu_zhusuzhuya":
			return "活动 松风注塑煮牙";
			break;
		case "huodong_paiya_changzhengzhong_putong_zhusuzhuya":
			return "活动 长正中普通注塑煮牙";
			break;
		case "huodong_paiya_changzhengzhong_chaoying_zhusuzhuya":
			return "活动 长正中超硬注塑煮牙";
			break;
		case "huodong_jiaotuo_suliaotuoya":
			return "活动 塑料托牙";
			break;
		case "huodong_jiaotuo_gexinghuatuopan":
			return "活动 个性化托盘";
			break;
		case "huodong_jiaotuo_jinshuhedian":
			return "活动 金属颌垫";
			break;
		case "huodong_jiaotuo_jinshuhemian":
			return "活动 金属颌面";
			break;
		case "huodong_jiaotuo_zhuzaohezhituo":
			return "活动 铸造颌支托";
			break;
		case "huodong_jiaotuo_chengpinwang":
			return "活动 成品网";
			break;
		case "huodong_yinxingyichi_da":
			return "活动 隐形义齿(大)";
			break;
		case "huodong_yinxingyichi_xiao":
			return "活动 隐形义齿(小)";
			break;
		case "huodong_zhusuzhuya_bankou":
			return "活动 注塑煮牙(半口)";
			break;
		case "huodong_zhusuzhuya_quankou":
			return "活动 注塑煮牙(全口)";
			break;
		// 美学
		case "meixue_meibaichaobaotiemian":
			return "美学 好莱坞魅白超薄贴面";
			break;
		case "meixue_maierfangshengquangao":
			return "美学 迈尔仿生全锆";
			break;
		case "meixue_maierfangshengquanci":
			return "美学 迈尔仿生全瓷";
			break;
		case "meixue_zhuci_quanguan":
			return "美学 铸瓷全冠";
			break;
		case "meixue_zhuci_qianti":
			return "美学 铸瓷嵌体";
			break;
		case "meixue_bolitaoci_tiemian":
			return "美学 玻璃陶瓷贴面";
			break;
		case "meixue_bolitaoci_qianti":
			return "美学 玻璃陶瓷嵌体";
			break; 
		case "meixue_bolitaoci_quanguan":
			return "美学 玻璃陶瓷全冠";
			break;
		case "meixue_meixuezhenduanla":
			return "美学 诊断蜡";
			break;
		// 正畸
		case "zhengji_yinxingbaochiqi_bankou":
			return "正畸 隐形保持器(半口)";
			break;
		case "zhengji_wanzhibaochiqi_bankou":
			return "正畸 弯制保持器(半口)";
			break;
		case "zhengji_jianxibaochiqi":
			return "正畸 间隙保持器";
			break;
		case "zhengji_yemoyatao":
			return "正畸 夜磨牙套";
			break;
		case "zhengji_jiaozhengqi_bankou":
			return "正畸 矫正器(半口)";
			break;
		case "zhengji_luoxuankuogongqi":
			return "正畸 螺旋扩弓器";
			break;
		case "zhengji_zuhanqi":
			return "正畸 阻鼾器";
			break;
		// 精密附件
		case "jingmifujian_shuandaofuzhuoti":
			return "精密附件 栓道附着体";
			break;
		case "jingmifujian_qiumaofuzhuoti":
			return "精密附件 球帽附着体";
			break;
		case "jingmifujian_cixingfuzhuoti":
			return "精密附件 磁性附着体";
			break;
		case "jingmifujian_mk1":
			return "精密附件 MK1";
			break;
		case "jingmifujian_taijikou":
			return "精密附件 太极扣";
			break;
		case "jingmifujian_taotongguan":
			return "精密附件 套筒冠";
			break;
		// 3D树脂模型
		case "sandi_shuzhimoxing_bankou":
			return "3D 半口树脂模型(需要配合扫描)";
			break;
		case "sandi_shuzhimoxing_quankou":
			return "3D 全口树脂模型(需要配合扫描)";
			break;	
	}
}

//把产品明细 按照 病人姓名分组显示
function showInGroups(array, by){
	var tempArray = [];
	for (var i = 0; i < array.length; i ++) {
		if (tempArray.length == 0) {
			tempArray.push(array[0][by]);
		}else if (array[i][by] != array[i - 1][by] && tempArray.indexOf(array[i][by]) == -1) {
			tempArray.push(array[i][by]);
		}
	}
	for (var i = 0; i < tempArray.length; i ++) {
		var patientArray = [];	
		for (var j = 0; j < array.length; j ++) {
			if (array[j][by] == tempArray[i]) {
				patientArray.push(array[j]);
			}
		}
		var patientProductDiv = document.createElement("div");
		patientProductDiv.className = "patientProductDiv";
		patientProductDiv.style.width = showProducts.offsetWidth - 2 + "px";
		patientProductDiv.style.border = "1px solid black";
		patientProductDiv.style.margin = "2px 0";
		if (i == 0) {
			patientProductDiv.style.margin = "0 0 1px 0";
		}else if (i == tempArray.length - 1) {
			patientProductDiv.style.margin = "1px 0 0 0";
		}
		showProducts.appendChild(patientProductDiv);
		var firstLineDiv = document.createElement("div");
		firstLineDiv.style.width = patientProductDiv.clientWidth + "px";
		firstLineDiv.style.height = 20 + "px";
		firstLineDiv.style.fontSize = 0;
		firstLineDiv.style.borderBottom = "1px dashed black";
		firstLineDiv.style.backgroundColor = "rgb(150, 120, 110)";
		patientProductDiv.appendChild(firstLineDiv);
		var firstOfFirst = document.createElement("div");
		firstOfFirst.style.width = firstLineDiv.offsetWidth * 0.333 + "px";
		firstOfFirst.style.height = 20 + "px";
		firstOfFirst.style.lineHeight = 20 + "px";
		firstOfFirst.style.fontSize = 1 + "rem";
		firstOfFirst.style.textAlign = "center";
		firstOfFirst.style.color = "white";
		firstOfFirst.innerText = "患者姓名: " + tempArray[i];
		firstOfFirst.style.display = "inline-block";
		firstOfFirst.style.verticalAlign = "top";
		firstLineDiv.appendChild(firstOfFirst);
		var secondOfFirst = document.createElement("div");
		secondOfFirst.style.width = firstLineDiv.offsetWidth * 0.333 + "px";
		secondOfFirst.style.height = 20 + "px";
		secondOfFirst.style.lineHeight = 20 + "px";
		secondOfFirst.style.fontSize = 1 + "rem";
		secondOfFirst.style.textAlign = "center";
		secondOfFirst.style.color = "white";
		secondOfFirst.innerText = "医生姓名: " + patientArray[0]["doctorName"];
		secondOfFirst.style.display = "inline-block";
		secondOfFirst.style.verticalAlign = "top";
		firstLineDiv.appendChild(secondOfFirst);
		var thirdOfFirst = document.createElement("div");
		var mainNumber = createMainNumber();
		var tempObj = new Object();
		tempObj.patientName = tempArray[i];
		tempObj.orderNumber = mainNumber;
		orderNumberArray.push(tempObj);
		thirdOfFirst.style.width = firstLineDiv.offsetWidth * 0.333 + "px";
		thirdOfFirst.style.height = 20 + "px";
		thirdOfFirst.style.lineHeight = 20 + "px";
		thirdOfFirst.style.fontSize = 1 + "rem";
		thirdOfFirst.style.textAlign = "center";
		thirdOfFirst.style.color = "white";
		thirdOfFirst.innerText = "订单号: " + mainNumber;
		thirdOfFirst.style.display = "inline-block";
		thirdOfFirst.style.verticalAlign = "top";
		firstLineDiv.appendChild(thirdOfFirst);
		var secondlineDiv = document.createElement("div");
		secondlineDiv.style.width = patientProductDiv.clientWidth + "px";
		secondlineDiv.style.height = 20 + "px";
		secondlineDiv.style.fontSize = 0;
		secondlineDiv.style.borderBottom = "1px dashed black";
		secondlineDiv.style.backgroundColor = "rgb(150, 120, 110)";
		secondlineDiv.style.color = "white";
		patientProductDiv.appendChild(secondlineDiv);
		var firstOfSecond = document.createElement("div");
		firstOfSecond.style.width = secondlineDiv.clientWidth * 0.27 + "px";
		firstOfSecond.style.height = 20 + "px";
		firstOfSecond.style.lineHeight = 20 + "px";
		firstOfSecond.style.textAlign = "center";
		firstOfSecond.style.fontSize = "1rem";
		firstOfSecond.style.display = "inline-block";
		firstOfSecond.innerText = "产品名称";
		firstOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(firstOfSecond);
		var secondOfSecond = document.createElement("div");
		secondOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		secondOfSecond.style.height = 20 + "px";
		secondOfSecond.style.lineHeight = 20 + "px";
		secondOfSecond.style.textAlign = "center";
		secondOfSecond.style.fontSize = "1rem";
		secondOfSecond.style.display = "inline-block";
		secondOfSecond.innerText = "牙位/半口";
		secondOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(secondOfSecond);
		var thirdOfSecond = document.createElement("div");
		thirdOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		thirdOfSecond.style.height = 20 + "px";
		thirdOfSecond.style.lineHeight = 20 + "px";
		thirdOfSecond.style.textAlign = "center";
		thirdOfSecond.style.fontSize = "1rem";
		thirdOfSecond.style.display = "inline-block";
		thirdOfSecond.innerText = "连冠/单冠";
		thirdOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(thirdOfSecond);
		var fourthOfSecond = document.createElement("div");
		fourthOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		fourthOfSecond.style.height = 20 + "px";
		fourthOfSecond.style.lineHeight = 20 + "px";
		fourthOfSecond.style.textAlign = "center";
		fourthOfSecond.style.fontSize = "1rem";
		fourthOfSecond.style.display = "inline-block";
		fourthOfSecond.innerText = "比色系统";
		fourthOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(fourthOfSecond);
		var fifthOfSecond = document.createElement("div");
		fifthOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		fifthOfSecond.style.height = 20 + "px";
		fifthOfSecond.style.lineHeight = 20 + "px";
		fifthOfSecond.style.textAlign = "center";
		fifthOfSecond.style.fontSize = "1rem";
		fifthOfSecond.style.display = "inline-block";
		fifthOfSecond.innerText = "基牙色";
		fifthOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(fifthOfSecond);
		var sixthOfSecond = document.createElement("div");
		sixthOfSecond.style.width = secondlineDiv.clientWidth * 0.12 + "px";
		sixthOfSecond.style.height = 20 + "px";
		sixthOfSecond.style.lineHeight = 20 + "px";
		sixthOfSecond.style.textAlign = "center";
		sixthOfSecond.style.fontSize = "1rem";
		sixthOfSecond.style.display = "inline-block";
		sixthOfSecond.innerText = "比色/排牙信息";
		sixthOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(sixthOfSecond);
		var seventhOfSecond = document.createElement("div");
		seventhOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		seventhOfSecond.style.height = 20 + "px";
		seventhOfSecond.style.lineHeight = 20 + "px";
		seventhOfSecond.style.textAlign = "center";
		seventhOfSecond.style.fontSize = "1rem";
		seventhOfSecond.style.display = "inline-block";
		seventhOfSecond.innerText = "数量";
		seventhOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(seventhOfSecond);
		var eighthOfSecond = document.createElement("div");
		eighthOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		eighthOfSecond.style.height = 20 + "px";
		eighthOfSecond.style.lineHeight = 20 + "px";
		eighthOfSecond.style.textAlign = "center";
		eighthOfSecond.style.fontSize = "1rem";
		eighthOfSecond.style.display = "inline-block";
		eighthOfSecond.innerText = "附加费用";
		eighthOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(eighthOfSecond);
		var ninethOfSecond = document.createElement("div");
		ninethOfSecond.style.width = secondlineDiv.clientWidth * 0.08 + "px";
		ninethOfSecond.style.height = 20 + "px";
		ninethOfSecond.style.lineHeight = 20 + "px";
		ninethOfSecond.style.textAlign = "center";
		ninethOfSecond.style.fontSize = "1rem";
		ninethOfSecond.style.display = "inline-block";
		ninethOfSecond.innerText = "价格";
		ninethOfSecond.style.verticalAlign = "top";
		secondlineDiv.appendChild(ninethOfSecond);
		var tenthOfSecond = document.createElement("div");
		tenthOfSecond.style.width = secondlineDiv.clientWidth * 0.05 + "px";
		tenthOfSecond.style.height = 20 + "px";
		tenthOfSecond.style.lineHeight = 20 + "px";
		tenthOfSecond.style.textAlign = "center";
		tenthOfSecond.style.fontSize = "1rem";
		tenthOfSecond.style.display = "inline-block";
		secondlineDiv.appendChild(tenthOfSecond);
		//定义试做信息变量
		var shizuoSpecific = document.createElement("div");
		shizuoSpecific.style.borderBottomStyle = "double";
		//定义随单附品变量
		var suidanSpecific = document.createElement("div");
		suidanSpecific.style.borderBottomStyle = "double";
		for (var j = 0; j < patientArray.length; j ++) {
			var specificDiv = document.createElement("div");
			specificDiv.style.width = patientProductDiv.clientWidth + "px";
			specificDiv.style.height = 20 + "px";
			specificDiv.style.verticalAlign = "top";
			specificDiv.className = "specificDiv";
			if (j % 2 == 0) {
				specificDiv.style.backgroundColor = "rgb(240, 240, 240)";
			}else{
				specificDiv.style.backgroundColor = "lightgray";
			}
			var subDiv1 = document.createElement("div");
			subDiv1.style.width = patientProductDiv.clientWidth * 0.27 + "px";
			subDiv1.style.height = 20 + "px";
			subDiv1.style.textAlign = "center";
			subDiv1.style.lineHeight = 20 + "px";
			subDiv1.style.verticalAlign = "top";
			subDiv1.style.display = "inline-block";
			subDiv1.productName = patientArray[j]["productName"];
			if (patientArray[j]["laborCharge"] != "" && patientArray[j]["toothPosition"] != "") {
				subDiv1.innerText = "";
			}else{
				subDiv1.innerText = translateProductName(patientArray[j]["productName"]);
			}
			if (patientArray[j]["laborCharge"] != "") {
				subDiv1.className = "paiyaDiv";
			}
			var subDiv2 = document.createElement("div");
			subDiv2.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv2.style.height = 20 + "px";
			subDiv2.style.textAlign = "center";
			subDiv2.style.lineHeight = 20 + "px";
			subDiv2.style.verticalAlign = "top";
			subDiv2.style.display = "inline-block";
			subDiv2.toothPosition = patientArray[j]["toothPosition"];
			if (patientArray[j]["shangbankouSelected"] != "" || patientArray[j]["xiabankouSelected"] != "") {
				if (patientArray[j]["shangbankouSelected"] == "true" && patientArray[j]["xiabankouSelected"] == "") {
					subDiv2.innerText = "上半口";
				}else if (patientArray[j]["xiabankouSelected"] == "true" && patientArray[j]["shangbankouSelected"] == "") {
					subDiv2.innerText = "下半口";
				}else{
					subDiv2.innerText = "全口";
				}
			}else{
				subDiv2.innerText = patientArray[j]["toothPosition"];
			}
			var subDiv3 = document.createElement("div");
			subDiv3.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv3.style.height = 20 + "px";
			subDiv3.style.textAlign = "center";
			subDiv3.style.lineHeight = 20 + "px";
			subDiv3.style.verticalAlign = "top";
			subDiv3.style.display = "inline-block";
			if (patientArray[j]["singleOrContinual"] == "lianguan") {
				subDiv3.innerText = "连冠";
			}else if (patientArray[j]["singleOrContinual"] == "danguan") {
				subDiv3.innerText = "单冠";
			}else{
				subDiv3.innerText = "";
			}
			var subDiv4 = document.createElement("div");
			subDiv4.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv4.style.height = 20 + "px";
			subDiv4.style.textAlign = "center";
			subDiv4.style.lineHeight = 20 + "px";
			subDiv4.style.verticalAlign = "top";
			subDiv4.style.display = "inline-block";
			subDiv4.innerText = patientArray[j]["colorSystem"];
			var subDiv5 = document.createElement("div");
			subDiv5.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv5.style.height = 20 + "px";
			subDiv5.style.textAlign = "center";
			subDiv5.style.lineHeight = 20 + "px";
			subDiv5.style.verticalAlign = "top";
			subDiv5.style.display = "inline-block";
			subDiv5.innerText = patientArray[j]["jiyase"];
			var subDiv6 = document.createElement("div");
			subDiv6.style.width = patientProductDiv.clientWidth * 0.12 + "px";
			subDiv6.style.height = 20 + "px";
			subDiv6.style.textAlign = "center";
			subDiv6.style.lineHeight = 20 + "px";
			subDiv6.style.verticalAlign = "top";
			subDiv6.style.display = "inline-block";
			if (patientArray[j]["colorInfo"].length != 0) {
				subDiv6.innerText = patientArray[j]["colorInfo"];
			}else if (patientArray[j]["paiyaInfo"].length != 0) {
				subDiv6.innerText = patientArray[j]["paiyaInfo"];
			}
			var subDiv7 = document.createElement("div");
			subDiv7.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv7.style.height = 20 + "px";
			subDiv7.style.textAlign = "center";
			subDiv7.style.lineHeight = 20 + "px";
			subDiv7.style.verticalAlign = "top";
			subDiv7.style.display = "inline-block";
			if (patientArray[j]["zuhanqiShuliang"].length != 0) {
				subDiv7.innerText = patientArray[j]["zuhanqiShuliang"] + "个";
			}else{
				subDiv7.innerText = "";
			}
			var subDiv8 = document.createElement("div");
			subDiv8.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv8.style.height = 20 + "px";
			subDiv8.style.textAlign = "center";
			subDiv8.style.lineHeight = 20 + "px";
			subDiv8.style.verticalAlign = "top";
			subDiv8.style.display = "inline-block";
			if (patientArray[j]["laborCharge"] != "" && patientArray[j]["toothPosition"] != "") {
				subDiv8.innerText = "排牙费";
			}else{
				subDiv8.innerText = "";
			}
			var subDiv9 = document.createElement("div");
			subDiv9.style.width = patientProductDiv.clientWidth * 0.08 + "px";
			subDiv9.style.height = 20 + "px";
			subDiv9.style.textAlign = "center";
			subDiv9.style.lineHeight = 20 + "px";
			subDiv9.style.verticalAlign = "top";
			subDiv9.style.display = "inline-block";
			subDiv9.className = "priceDiv";
			if (patientArray[j]["laborCharge"] != "" && patientArray[j]["toothPosition"] != "") {
				subDiv9.innerText = patientArray[j]["laborCharge"] + "元";
			}else{
				if (subDiv7.innerText == "") {
					var quantity = 1;
				}else{
					var quantity = parseInt(subDiv7.innerText);
				}
				subDiv9.innerText = patientArray[j]["price"] * quantity + "元";
			}
			var subDiv10 = document.createElement("div");
			if (firefox) {
				subDiv10.style.width = patientProductDiv.clientWidth * 0.048 + "px";
			}else{
				subDiv10.style.width = patientProductDiv.clientWidth * 0.05 + "px";
			}
			subDiv10.style.height = 20 + "px";
			subDiv10.style.textIndent = 10 + "px";
			subDiv10.style.lineHeight = 20 + "px";
			subDiv10.style.verticalAlign = "top";
			subDiv10.style.display = "inline-block";
				var deleteItemBtn = document.createElement("input");
				deleteItemBtn.style.type = "button";
				deleteItemBtn.style.width = 15 + "px";
				deleteItemBtn.style.height = 15 + "px";
				deleteItemBtn.value = "X";
				deleteItemBtn.style.textAlign = "center";
				deleteItemBtn.style.cursor = "pointer";
				deleteItemBtn.style.border = "1px solid black";
				deleteItemBtn.style.borderRadius = "3px";
				deleteItemBtn.onclick = deleteItemAction;
				subDiv10.appendChild(deleteItemBtn);
			specificDiv.appendChild(subDiv1);
			specificDiv.appendChild(subDiv2);
			specificDiv.appendChild(subDiv3);
			specificDiv.appendChild(subDiv4);
			specificDiv.appendChild(subDiv5);
			specificDiv.appendChild(subDiv6);
			specificDiv.appendChild(subDiv7);
			specificDiv.appendChild(subDiv8);
			specificDiv.appendChild(subDiv9);
			specificDiv.appendChild(subDiv10);
			patientProductDiv.appendChild(specificDiv);
			//试做信息
			if (patientArray[j]["shiNeiguan"] == 1 || patientArray[j]["shiCiya"] == 1 || patientArray[j]["shiZhijia"] == 1 || patientArray[j]["shiPaiya"] == 1) {
				if (shizuoSpecific.innerText.length == 0) {
					shizuoSpecific.innerText = patientArray[j]["patientName"] + ": ";
					if (patientArray[j]["shiNeiguan"] == 1) {
						shizuoSpecific.innerText += "试内冠 ";
					}
					if (patientArray[j]["shiCiya"] == 1) {
						shizuoSpecific.innerText += "试瓷牙 ";
					}
					if (patientArray[j]["shiZhijia"] == 1) {
						shizuoSpecific.innerText += "试支架 ";
					}
					if (patientArray[j]["shiPaiya"] == 1) {
						shizuoSpecific.innerText += "试排牙 ";
					}
					shizuoSpecific.innerText += "\n";
					otherinfoDiv1.appendChild(shizuoSpecific);
				}
			}
			//随单附品
			if (patientArray[j]["suidanfupinLadiShuliang"] != "" || patientArray[j]["suidanfupinJiuyaShuliang"] != "" || patientArray[j]["suidanfupinRengongyayinShuliang"] != "" || patientArray[j]["suidanfupinTuopanShuliang"] != "" || patientArray[j]["suidanfupinHejiaShuliang"] != "" || patientArray[j]["suidanfupinCankaomoShuliang"] != "" || patientArray[j]["suidanfupinJitaiShuliang"] != "" || patientArray[j]["suidanfupinZhuanyiganShuliang"] != "" || patientArray[j]["suidanfupinTidaitiShuliang"] != "" || patientArray[j]["suidanfupinQita"] != "" || patientArray[j]["suidanfupinQitaShuliang"] != "") {
				if (suidanSpecific.innerText.length == 0) {
					suidanSpecific.innerText = patientArray[j]["patientName"] + ": ";
					if (patientArray[j]["suidanfupinLadiShuliang"] != "") {
						suidanSpecific.innerText += "蜡堤×" + patientArray[j]["suidanfupinLadiShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinJiuyaShuliang"] != "") {
						suidanSpecific.innerText += "旧牙×" + patientArray[j]["suidanfupinLadiShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinRengongyayinShuliang"] != "") {
						suidanSpecific.innerText += "人工牙龈×" + patientArray[j]["suidanfupinRengongyayinShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinTuopanShuliang"] != "") {
						suidanSpecific.innerText += "托盘×" + patientArray[j]["suidanfupinTuopanShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinHejiaShuliang"] != "") {
						suidanSpecific.innerText += "颌架×" + patientArray[j]["suidanfupinHejiaShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinCankaomoShuliang"] != "") {
						suidanSpecific.innerText += "参考模×" + patientArray[j]["suidanfupinCankaomoShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinJitaiShuliang"] != "") {
						suidanSpecific.innerText += "基台×" + patientArray[j]["suidanfupinJitaiShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinZhuanyiganShuliang"] != "") {
						suidanSpecific.innerText += "转移杆×" + patientArray[j]["suidanfupinZhuanyiganShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinTidaitiShuliang"] != "") {
						suidanSpecific.innerText += "替代体×" + patientArray[j]["suidanfupinTidaitiShuliang"] + " ";
					}
					if (patientArray[j]["suidanfupinQita"] != "" && patientArray[j]["suidanfupinQitaShuliang"] != "") {
						suidanSpecific.innerText += patientArray[j]["suidanfupinQita"] + "×"  + patientArray[j]["suidanfupinQitaShuliang"] + " ";
					}
					otherinfoDiv2.appendChild(suidanSpecific);
				}
			}
		}
	}
	//显示总价
	var totalAmount = document.getElementById("total_amount");
	var amount = 0;
	var priceDivs = document.getElementsByClassName("priceDiv");
	for (var i = 0; i < priceDivs.length; i ++) {
		amount += parseInt(priceDivs[i].innerText);
	}
	totalAmount.innerText += " " + amount + "元";
}

//删除按钮点击事件
function deleteItemAction() {
	var rootDiv = this.parentNode.parentNode.parentNode;
	var patientProductDivs = document.getElementsByClassName("patientProductDiv");
	var tempPatientName = this.parentNode.parentNode.parentNode.firstChild.firstChild.innerText.split(": ")[1];
	var tempProductName = this.parentNode.parentNode.firstChild.productName;
	var tempToothPosition = this.parentNode.parentNode.firstChild.nextSibling.toothPosition;
	if (this.parentNode.parentNode.firstChild.nextSibling.innerText != "" || tempProductName == "sandi_shuzhimoxing_bankou" || tempProductName == "sandi_shuzhimoxing_quankou" || tempProductName == "zhengji_zuhanqi") {
		this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
		console.log(tempProductName);
	}else{
		for (var i = 0; i < patientProductDivs.length; i ++) {
			for (var j = 2; j < patientProductDivs[i].childNodes.length; j ++) {
				while (patientProductDivs[i].childNodes[j]!= null && patientProductDivs[i].childNodes[j].firstChild.className == "paiyaDiv" && patientProductDivs[i].childNodes[j].firstChild.productName == tempProductName) {
					patientProductDivs[i].removeChild(patientProductDivs[i].childNodes[j]);
				}
			}
		}
	}
	//当某个病人名下的产品全部删除的时候,移除整个div
	for (var i = 0; i < patientProductDivs.length; i ++) {
		if (patientProductDivs[i].childNodes.length <= 2) {
			patientProductDivs[i].parentNode.removeChild(patientProductDivs[i]);
		}
	}
	
	//刷新总价
	var totalAmount = document.getElementById("total_amount");
	totalAmount.innerText = "参考总价: ";
	var amount = 0;
	var priceDivs = document.getElementsByClassName("priceDiv");
	for (var i = 0; i < priceDivs.length; i ++) {
		amount += parseInt(priceDivs[i].innerText);
	}
	totalAmount.innerText += " " + amount + "元";
	for (var i = 2; i < rootDiv.childNodes.length; i ++) {
		if (i % 2 == 0) {
			rootDiv.childNodes[i].style.backgroundColor = "rgb(240, 240, 240)";
		}else{
			rootDiv.childNodes[i].style.backgroundColor = "lightgray";
		}
	}
	var arrayToBeDeleted = [];
	arrayToBeDeleted.splice(0, 0, tempPatientName, tempProductName, tempToothPosition);
	console.log(arrayToBeDeleted);
	//把产品详情的数组转成JSON字符串
	var toBeDeleted = JSON.stringify(arrayToBeDeleted);
	//创建要提交的虚拟表单
	var virtualFrom = document.createElement("form");
	document.body.appendChild(virtualFrom);
	//创建虚拟输入框
	var virtualInput = document.createElement("input");
	virtualInput.type = "hidden";
	virtualInput.name = "toBeDeleted";
	virtualInput.value = toBeDeleted;
	virtualFrom.appendChild(virtualInput);
	virtualFrom.action = "http://localhost/mywebsite/php/delete_cart_item.php";
	virtualFrom.target = "_hidden";
	virtualFrom.method = "post";
	virtualFrom.submit();
}

//正式下单按钮
function finalSubmit() {
	requestByPOST("http://localhost/mywebsite/php/insert_order_db.php", "ordernumber=" + JSON.stringify(orderNumberArray), function(response) {
		if (response.indexOf("order has been placed successfully") != -1) {
			alert("下单成功!");
			window.location.href = "order.html";
		}else{
			alert("下单失败!");
			window.location.href = "order.html";
		}
	});
}
//取消按钮
function cancelAction() {
	window.location.href = "order.html";
}
//生成订单号的主单号
function createMainNumber() {
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear().toString();
	var currentMonth = currentTime.getMonth() + 1;
	if (currentMonth < 10) {
		currentMonth = "0" + currentMonth.toString();
	}
	var currentDay = currentTime.getDate();
	if (currentDay < 10) {
		currentDay = "0" + currentDay.toString();
	}
	var currentHour = currentTime.getHours();
	if (currentHour < 10) {
		currentHour = "0" + currentHour.toString();
	}
	var currentMinute = currentTime.getMinutes();
	if (currentMinute < 10) {
		currentMinute = "0" + currentMinute.toString();
	}
	var currentSecond = currentTime.getSeconds();
	if (currentSecond < 10) {
		currentSecond = "0" + currentSecond.toString();
	}
	var a = parseInt(Math.random() * 10).toString();
	var b = parseInt(Math.random() * 10).toString();
	var c = parseInt(Math.random() * 10).toString();
	var d = parseInt(Math.random() * 10).toString();
	var e = parseInt(Math.random() * 10).toString();
	var f = parseInt(Math.random() * 10).toString();
	return currentYear + currentMonth + currentDay + currentHour + currentMinute + currentSecond + a + b +c + d + e + f;
}