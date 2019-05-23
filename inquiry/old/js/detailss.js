var orderNumberText = document.getElementById('orderNumber');
var doctorNameText = document.getElementById('doctorName');
var patientNameText = document.getElementById('patientName');
var patientPhoneText = document.getElementById('patientPhone');
var timesText = document.getElementById('times');
var priceText = document.getElementById('price');
priceText.innerHTML = 0 + " 元";
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var detailsDiv = document.getElementById('details');
var guidelineDiv = document.getElementById('guideline');

// 获取后台数据
var orderNumber = getCookie("orderNumber");

//需要打印的二维码数组
var printArray = new Array();

$.ajax({
	type:"POST",
	url:"http://localhost/mywebsite/php/select_order_db.php",
	dataType: "json",
	data:{request:"all", ordernumber:orderNumber},
	success:function (data){

		var str = orderNumber;
		printArray.push(data);
		// 产品名称 DIV
		var oDivBox = document.createElement('div');
		oDivBox.style.borderLeft = "1px solid black";
		oDivBox.style.borderRight = "1px solid black";
		oDivBox.style.width = "calc(100% - 2.5px)";
		oDivBox.style.textAlign = "center";
		oDivBox.id = "fontSize";
	
		var oDiv1 = document.createElement("div");
			oDiv1.style.width = "25%";
			oDiv1.innerHTML = "产品名称";
			oDiv1.style.background = "red";
			oDiv1.style.display = "inline-block";

		var oDiv2 = document.createElement("div");
			oDiv2.style.width = "9%";
			oDiv2.innerHTML = "牙位/半口";
			oDiv2.style.background = "yellow";
			oDiv2.style.display = "inline-block";
		
		var oDiv3 = document.createElement("div");
			oDiv3.style.width = "9%";
			oDiv3.innerHTML = "连冠/单冠";
			oDiv3.style.background = "blue";
			oDiv3.style.display = "inline-block";
		
		var oDiv4 = document.createElement("div");
			oDiv4.style.width = "8%";
			oDiv4.innerHTML = "比色系统";
			oDiv4.style.background = "green";
			oDiv4.style.display = "inline-block";
		
		var oDiv5 = document.createElement("div");
			oDiv5.style.width = "8%";
			oDiv5.innerHTML = "基牙色";
			oDiv5.style.background = "purple";
			oDiv5.style.display = "inline-block";
		
		var oDiv6 = document.createElement("div");
			oDiv6.style.width = "10%";
			oDiv6.innerHTML = "比色/排牙信息";
			oDiv6.style.background = "red";
			oDiv6.style.display = "inline-block";
		
		var oDiv7 = document.createElement("div");
			oDiv7.style.width = "8%";
			oDiv7.innerHTML = "数量";
			oDiv7.style.background = "yellow";
			oDiv7.style.display = "inline-block";
		
		var oDiv8 = document.createElement("div");
			oDiv8.style.width = "8%";
			oDiv8.innerHTML = "单价";
			oDiv8.style.background = "blue";
			oDiv8.style.display = "inline-block";
		var oDiv9 = document.createElement("div");
			oDiv9.style.width = "7%";
			oDiv9.innerHTML = "附加费用";
			oDiv9.style.background = "green";
			oDiv9.style.display = "inline-block";
		var oDiv10 = document.createElement("div");
			oDiv10.style.width = "8%";
			oDiv10.innerHTML = "医生说明";
			oDiv10.style.background = "purple";
			oDiv10.style.display = "inline-block";
			// oDiv10.style.borderRight = "1px solid black";

		box2.appendChild(oDivBox);
		oDivBox.appendChild(oDiv1);
		oDivBox.appendChild(oDiv2);
		oDivBox.appendChild(oDiv3);
		oDivBox.appendChild(oDiv4);
		oDivBox.appendChild(oDiv5);
		oDivBox.appendChild(oDiv6);
		oDivBox.appendChild(oDiv7);
		oDivBox.appendChild(oDiv8);
		oDivBox.appendChild(oDiv9);
		oDivBox.appendChild(oDiv10);

		for (var i = 0; i < data.length; i++) {
			// 头部信息
			var strs = data[i].orderNumber.substring(0,20);
			if (str == strs) {
				doctorNameText.innerHTML = data[i].doctorName;
				patientNameText.innerHTML = data[i].patientName;
				patientPhoneText.innerHTML = data[i].patientPhone;
				timesText.innerHTML = data[i].orderYear + "年" + data[i].orderMonth + "月" + data[i].orderDay + "日";
				orderNumberText.innerHTML = str;

				var tDivBox = document.createElement('div');
				tDivBox.style.display = "inline-block";
				tDivBox.class = "tDivBox";

				var tDiv1 = document.createElement('div');
				tDiv1.style.backgroundColor = "red";
				tDiv1.style.display = 'inline-block';
				tDiv1.style.textAlign = 'center';
				tDiv1.style.verticalAlign = 'top';
				// tDiv1.style.borderLeft = "1px solid black";
				tDiv1.style.width = oDiv1.clientWidth + "px";
				tDiv1.innerText = translateProductName(data[i].productName);
				
				var tDiv2 = document.createElement('div');
				tDiv2.style.display = 'inline-block';
				tDiv2.style.height= '20px';
				tDiv2.style.textAlign = 'center';
				tDiv2.style.verticalAlign = 'top';
				tDiv2.style.width = oDiv2.offsetWidth + "px";
				tDiv2.style.background = "yellow";
				tDiv2.toothPosition = data[i]["toothPosition"];
				if (data[i]["shangbankouSelected"] != "" || data[i]["xiabankouSelected"] != "") {
					if (data[i]["shangbankouSelected"] == "true" && data[i]["xiabankouSelected"] == "") {
						tDiv2.innerText = "上半口";
					}else if (data[i]["xiabankouSelected"] == "true" && data[i]["shangbankouSelected"] == "") {
						tDiv2.innerText = "下半口";
					}else{
						tDiv2.innerText = "全口";
					}
				}else{
					tDiv2.innerText = data[i]["toothPosition"];
				}
				
				var tDiv3 = document.createElement('div');
				tDiv3.style.display = 'inline-block';
				tDiv3.style.height= '20px';
				tDiv3.style.textAlign = 'center';
				tDiv3.style.verticalAlign = 'top';
				tDiv3.style.width = oDiv3.offsetWidth + "px";
				tDiv3.style.background = "blue";
				tDiv3.singleOrContinual = data[i].singleOrContinual;
				if (data[i]["singleOrContinual"] == "lianguan") {
					tDiv3.innerText = "连冠";
				}else if (data[i]["singleOrContinual"] == "danguan") {
					tDiv3.innerText = "单冠";
				}else{
					tDiv3.innerText = "";
				}
				
				var tDiv4 = document.createElement('div');
				tDiv4.style.display = 'inline-block';
				tDiv4.style.height= '20px';
				tDiv4.style.textAlign = 'center';
				tDiv4.style.verticalAlign = 'top';
				tDiv4.style.width = oDiv4.offsetWidth + "px";
				tDiv4.innerHTML = data[i].colorSystem;
				tDiv4.style.background = "green";
				
				var tDiv5 = document.createElement('div');
				tDiv5.style.display = 'inline-block';
				tDiv5.style.height= '20px';
				tDiv5.style.textAlign = 'center';
				tDiv5.style.verticalAlign = 'top';
				tDiv5.style.width = oDiv5.offsetWidth + "px";
				tDiv5.style.background = "gray";
				tDiv5.innerHTML = data[i].jiyase;
				
				var tDiv6 = document.createElement('div');
				tDiv6.style.display = 'inline-block';
				tDiv6.style.height= '20px';
				tDiv6.style.textAlign = 'center';
				tDiv6.style.verticalAlign = 'top';
				tDiv6.style.width = oDiv6.offsetWidth + "px";
				tDiv6.style.background = "tomato";
				if (data[i]["colorInfo"].length != 0) {
					tDiv6.innerText = data[i]["colorInfo"];
				}else if (data[i]["paiyaInfo"].length != 0) {
					tDiv6.innerText = data[i]["paiyaInfo"];
				}
				

				var tDiv7 = document.createElement('div');
				tDiv7.style.display = 'inline-block';
				tDiv7.style.height= '20px';
				tDiv7.style.textAlign = 'center';
				tDiv7.style.verticalAlign = 'top';
				tDiv7.style.width = oDiv7.offsetWidth + "px";
				tDiv7.style.background = "pink";
				if (data[i]["zuhanqiShuliang"].length != 0) {
					tDiv7.innerText = data[i]["zuhanqiShuliang"] + "个";
				}else{
					tDiv7.innerText = "";
				}

				var tDiv8 = document.createElement('div');
				tDiv8.style.width = oDiv8.offsetWidth + "px";
				tDiv8.style.background = "orange";
				tDiv8.style.display = 'inline-block';
				tDiv8.style.height= '20px';
				tDiv8.style.textAlign = 'center';
				tDiv8.style.verticalAlign = 'top';
				// tDiv8.className = "";
				tDiv8.innerHTML = data[i].price + " 元";
				

				var tDiv9 = document.createElement('div');
				tDiv9.style.display = 'inline-block';
				tDiv9.style.height= '20px';
				tDiv9.style.textAlign = 'center';
				tDiv9.style.verticalAlign = 'top';
				tDiv9.style.width = oDiv9.offsetWidth + "px";
				tDiv9.style.background = "red";
				if (data[i]["laborCharge"] != "" && data[i]["toothPosition"] != "") {
					tDiv9.innerText = "排牙费";
				}else{
					tDiv9.innerText = "";
				}
				

				var tDiv10 = document.createElement('div');
				tDiv10.className = 'shuoming';
				tDiv10.style.display = 'inlin';
				tDiv10.style.height= '20px';
				tDiv10.style.textAlign = 'center';
				tDiv10.style.verticalAlign = 'top';
				tDiv10.style.width = oDiv10.offsetWidth + "px";
				tDiv10.style.background = "blue";
				tDiv10.style.display = "inline-block";
				tDiv10.yishengshuoming = data[i].yishengshuoming;
				tDiv10.style.fontStyle = '14px';
				if (tDiv10.yishengshuoming.length > 4) {
					var span = document.createElement('span');
					tDiv10.innerHTML = tDiv10.yishengshuoming.substring(0, 2) + "...>>";
					tDiv10.onmouseenter = function showYishengshuoming (para) {
						return function () {
							timer = setTimeout(function () {
								var yishengshuomingDetail = document.createElement('div');
								yishengshuomingDetail.id = "yishengshuomingDetail";
								para.appendChild(yishengshuomingDetail);
								yishengshuomingDetail.innerHTML = para.yishengshuoming;
								yishengshuomingDetail.style.position = 'fixed';
								yishengshuomingDetail.style.border = '1px solid skyblue';
								yishengshuomingDetail.style.top = '45%';
								yishengshuomingDetail.style.left = '42%';
								yishengshuomingDetail.style.width = 200 + 'px';
								yishengshuomingDetail.style.height = 100 + 'px';
								yishengshuomingDetail.style.backgroundColor = 'lightgray';
								yishengshuomingDetail.style.overflowY = 'auto';
								yishengshuomingDetail.style.textAlign = 'left';
								yishengshuomingDetail.style.color = "blue";
								yishengshuomingDetail.style.zIndex = "20";
							}, 500);
						}
					}(tDiv10);
					tDiv10.onmouseleave = function () {
						clearInterval(timer);
						if (this.lastChild.id == "yishengshuomingDetail") {
							this.removeChild(this.lastChild);
						}
					}
				}
				

				tDivBox.appendChild(tDiv1);
				tDivBox.appendChild(tDiv2);
				tDivBox.appendChild(tDiv3);
				tDivBox.appendChild(tDiv4);
				tDivBox.appendChild(tDiv5);
				tDivBox.appendChild(tDiv6);
				tDivBox.appendChild(tDiv7);
				tDivBox.appendChild(tDiv8);
				tDivBox.appendChild(tDiv9);
				tDivBox.appendChild(tDiv10);
				box3.appendChild(tDivBox);

			 	//颜色
				// if (i % 2 == 0) {
				// 	tDiv1.style.background = "rgb(240, 240, 240)";
				// 	tDiv2.style.background = "rgb(240, 240, 240)";
				// 	tDiv3.style.background = "rgb(240, 240, 240)";
				// 	tDiv4.style.background = "rgb(240, 240, 240)";
				// 	tDiv5.style.background = "rgb(240, 240, 240)";
				// 	tDiv6.style.background = "rgb(240, 240, 240)";
				// 	tDiv7.style.background = "rgb(240, 240, 240)";
				// 	tDiv8.style.background = "rgb(240, 240, 240)";
				// 	tDiv9.style.background = "rgb(240, 240, 240)";
				// 	tDiv10.style.background = "rgb(240, 240, 240)";
				// }else{
				// 	tDiv1.style.background = "lightgray";
				// 	tDiv2.style.background = "lightgray";
				// 	tDiv3.style.background = "lightgray";
				// 	tDiv4.style.background = "lightgray";
				// 	tDiv5.style.background = "lightgray";
				// 	tDiv6.style.background = "lightgray";
				// 	tDiv7.style.background = "lightgray";
				// 	tDiv8.style.background = "lightgray";
				// 	tDiv9.style.background = "lightgray";
				// 	tDiv10.style.background = "lightgray";
				// }

				var txt1 = document.getElementById('txt1');
				var txt2 = document.getElementById('txt2');
				//试做信息
				if (data[i]["shiNeiguan"] == 1 || data[i]["shiCiya"] == 1 || data[i]["shiZhijia"] == 1 || data[i]["shiPaiya"] == 1) {
					if (txt1.innerText.length == 0) {
						txt1.innerText = data[i]["patientName"] + ": ";
						if (data[i]["shiNeiguan"] == 1) {
							txt1.innerText += " 试内冠 ";
						}
						if (data[i]["shiCiya"] == 1) {
							txt1.innerText += " 试瓷牙 ";
						}
						if (data[i]["shiZhijia"] == 1) {
							txt1.innerText += " 试支架 ";
						}
						if (data[i]["shiPaiya"] == 1) {
							txt1.innerText += " 试排牙 ";
						}
						txt1.innerText += "\n";
					}
				}
						//随单附品
				if (data[i]["suidanfupinLadiShuliang"] != "" || data[i]["suidanfupinJiuyaShuliang"] != "" || data[i]["suidanfupinRengongyayinShuliang"] != "" || data[i]["suidanfupinTuopanShuliang"] != "" || data[i]["suidanfupinHejiaShuliang"] != "" || data[i]["suidanfupinCankaomoShuliang"] != "" || data[i]["suidanfupinJitaiShuliang"] != "" || data[i]["suidanfupinZhuanyiganShuliang"] != "" || data[i]["suidanfupinTidaitiShuliang"] != "" || data[i]["suidanfupinQita"] != "" || data[i]["suidanfupinQitaShuliang"] != "") {
					if (txt2.innerText.length == 0) {
						txt2.innerText = data[i]["patientName"] + ": ";
						if (data[i]["suidanfupinLadiShuliang"] != "") {
							txt2.innerText += " 蜡堤× " + data[i]["suidanfupinLadiShuliang"] + " ";
						}
						if (data[i]["suidanfupinJiuyaShuliang"] != "") {
							txt2.innerText += " 旧牙× " + data[i]["suidanfupinLadiShuliang"] + " ";
						}
						if (data[i]["suidanfupinRengongyayinShuliang"] != "") {
							txt2.innerText += " 人工牙龈× " + data[i]["suidanfupinRengongyayinShuliang"] + " ";
						}
						if (data[i]["suidanfupinTuopanShuliang"] != "") {
							txt2.innerText += " 托盘× " + data[i]["suidanfupinTuopanShuliang"] + " ";
						}
						if (data[i]["suidanfupinHejiaShuliang"] != "") {
							txt2.innerText += " 颌架× " + data[i]["suidanfupinHejiaShuliang"] + " ";
						}
						if (data[i]["suidanfupinCankaomoShuliang"] != "") {
							txt2.innerText += " 参考模× " + data[i]["suidanfupinCankaomoShuliang"] + " ";
						}
						if (data[i]["suidanfupinJitaiShuliang"] != "") {
							txt2.innerText += " 基台× " + data[i]["suidanfupinJitaiShuliang"] + " ";
						}
						if (data[i]["suidanfupinZhuanyiganShuliang"] != "") {
							txt2.innerText += " 转移杆× " + data[i]["suidanfupinZhuanyiganShuliang"] + " ";
						}
						if (data[i]["suidanfupinTidaitiShuliang"] != "") {
							txt2.innerText += " 替代体× " + data[i]["suidanfupinTidaitiShuliang"] + " ";
						}
						if (data[i]["suidanfupinQita"] != "" && data[i]["suidanfupinQitaShuliang"] != "") {
							txt2.innerText += data[i]["suidanfupinQita"] + "×"  + data[i]["suidanfupinQitaShuliang"] + " ";
						}
					}
				}
				var tempObj = new Object();
				tempObj.clinicName = data[i].clinicName;
				tempObj.doctorName = data[i].doctorName;
				tempObj.doctorPhone = data[i].doctorPhone;
				tempObj.patientName = data[i].patientName;
				tempObj.orderNumber = str;
			}
		}
		//条形码参数
		printArray.push(tempObj);
		//总价
		var priceDivs = document.getElementsByClassName('priceDiv');
		console.log(priceDivs.length);
		var amount = 0;
		for (var i = 0; i < priceDivs.length; i++) {
				amount +=parseInt(priceDivs[i].innerHTML);
		}
			priceText.innerHTML = amount + " 元";

	}
});		
		

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
	function setCookie(key, value, day){
	//获取当前时间
	var date = new Date();
	//获取日期中的某一天
	var nowDate = date.getDate();
	//设置过期的时间
	date.setDate(nowDate + day);
	//存储数据及设置过期的时间
	document.cookie = key + "=" + value + ";expires=" + date;
	}
	function getCookie(key){
	//例子:username=Stanley; age=33; sex=male;
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
	function removeCookie(key){
	setCookie(key, "", -1);//修改过期日期来快速删除
	}

$("#btn1").on("click",function (){
	window.location.href="http://localhost/mywebsite/order/order.html";
})

$("#btn2").on("click",function (){
	window.location.href="http://localhost/mywebsite/inquiry/inquiry.html";
})
$("#header_img").on("click",function (){
	window.location.href = "http://localhost/mywebsite/mainpage/mainpage.html";
})
//获取诊所名
var sessionId = getCookie("PHPSESSID");
function runOnce(fn){
	fn();
	fn = null;
}
function getClinicName() {
	var sessionId = getCookie("PHPSESSID");
	$.ajax({
		type:"GET",
		url:"http://localhost/mywebsite/php/select_client.php?PHPSESSID=" + sessionId,
		success:function (data){
			if (data.indexOf("client is") != -1 && data.indexOf("client name ends") != -1) {
				var clientName = (data.substring(data.indexOf("client is") + 9, data.indexOf("client name ends")));
				clientName.value = clientName;
			}else{
				self.location.href = "../login/login.html";
			}
		}
	})
}
runOnce(getClinicName);

//设置打印条形码
function toothPrint(div, tempObj, barcodeType){
	 (function() {
            if (!exports)
                var exports = window;
            var BARS = [ 212222, 222122, 222221, 121223, 121322, 131222, 122213,
                    122312, 132212, 221213, 221312, 231212, 112232, 122132, 122231,
                    113222, 123122, 123221, 223211, 221132, 221231, 213212, 223112,
                    312131, 311222, 321122, 321221, 312212, 322112, 322211, 212123,
                    212321, 232121, 111323, 131123, 131321, 112313, 132113, 132311,
                    211313, 231113, 231311, 112133, 112331, 132131, 113123, 113321,
                    133121, 313121, 211331, 231131, 213113, 213311, 213131, 311123,
                    311321, 331121, 312113, 312311, 332111, 314111, 221411, 431111,
                    111224, 111422, 121124, 121421, 141122, 141221, 112214, 112412,
                    122114, 122411, 142112, 142211, 241211, 221114, 413111, 241112,
                    134111, 111242, 121142, 121241, 114212, 124112, 124211, 411212,
                    421112, 421211, 212141, 214121, 412121, 111143, 111341, 131141,
                    114113, 114311, 411113, 411311, 113141, 114131, 311141, 411131,
                    211412, 211214, 211232, 23311120 ], START_BASE = 38, STOP = 106;
            function code128(code, barcodeType) {
                if (arguments.length < 2)
                    barcodeType = code128Detect(code);
                if (barcodeType == 'C' && code.length % 2 == 1)
                    code = '0' + code;
                var a = parseBarcode(code, barcodeType);
                return bar2html(a.join('')) + '<label>订单号:' + code + '</label>';
            }
        
            function bar2html(s) {
                for (var pos = 0, sb = []; pos < s.length; pos += 2) {
                	if (pos == 0) {
                		 sb.push('<div style="margin-left:135px;" class="bar' + s.charAt(pos) + ' space'
                            + s.charAt(pos + 1) + '"></div>');
                		}else{
                			sb.push('<div class="bar' + s.charAt(pos) + ' space'
                            + s.charAt(pos + 1) + '"></div>');
                		}
                }
                return sb.join('');
            }
        
            function code128Detect(code) {
                if (/^[0-9]+$/.test(code))
                    return 'C';
                if (/[a-z]/.test(code))
                    return 'B';
                return 'A';
            }
        
            function parseBarcode(barcode, barcodeType) {
                var bars = [];
                bars.add = function(nr) {
                    var nrCode = BARS[nr];
                    this.check = this.length == 0 ? nr : this.check + nr * this.length;
                    this.push(nrCode || ("UNDEFINED: " + nr + "->" + nrCode));
                };
                bars.add(START_BASE + barcodeType.charCodeAt(0));
                for (var i = 0; i < barcode.length; i++) {
                    var code = barcodeType == 'C' ? +barcode.substr(i++, 2) : barcode
                            .charCodeAt(i);
                    converted = fromType[barcodeType](code);
                    if (isNaN(converted) || converted < 0 || converted > 106)
                        throw new Error("Unrecognized character (" + code
                                + ") at position " + i + " in code '" + barcode + "'.");
                    bars.add(converted);
                }
                bars.push(BARS[bars.check % 103], BARS[STOP]);
                return bars;
            }
            var fromType = {
                A : function(charCode) {
                    if (charCode >= 0 && charCode < 32)
                        return charCode + 64;
                    if (charCode >= 32 && charCode < 96)
                        return charCode - 32;
                    return charCode;
                },
                B : function(charCode) {
                    if (charCode >= 32 && charCode < 128)
                        return charCode - 32;
                    return charCode;
                },
                C : function(charCode) {
                    return charCode;
                }
            };
            // --| Export
            exports.code128 = code128;
        })();
        /*
         * showDiv：代表需要显示的divID， textVlaue ： 代表需要生成的值， barcodeType：代表生成类型(A、B、C)三种类型
         * 
         */
        function createBarcode(div, textValue, barcodeType) {
            div.innerHTML = code128(textValue, barcodeType);
        }
        var textValue = tempObj.orderNumber;
        createBarcode(div, textValue, barcodeType);
};
function createTable(array,tempObj,body){
	// console.log(tempObj);
	var tableDiv = document.createElement("div");
	tableDiv.style.width = 550 + "px";
	tableDiv.style.height = 330 + "px";
	tableDiv.className = "my_show";
	tableDiv.style.fontSize = 0;
	tableDiv.style.border = "1px solid black";
	body.appendChild(tableDiv);

	//创建table1
	var table1 = document.createElement('table');
	table1.style.fontSize = 30 + "px";
	table1.style.fontWeight = "bold";
	table1.style.width = tableDiv.offsetWidth + "px";
	table1.style.height = 65 + "px";
	table1.style.textAlign = "center";
	table1.style.lineHeight = 25 + "px";
	var table1Tr = document.createElement('tr');
	table1.appendChild(table1Tr);
	var table1TrTd = document.createElement('td');
	table1TrTd.innerText = "迈尔医疗";
	table1Tr.appendChild(table1TrTd);

	//创建table2
	var table2 = document.createElement('table');
	table2.style.fontSize = 18 + "px";
	table2.style.width = tableDiv.offsetWidth + "px";
	table2.style.height = 130 + "px";
	table2.style.textAlign = "left";
	table2.style.textIndent = 100 + "px";
	var table2Tr1 = document.createElement('tr');
	var table2Tr2 = document.createElement('tr');
	var table2Tr3 = document.createElement('tr');
	var table2Tr4 = document.createElement('tr');
	var table2Tr5 = document.createElement('tr');
	//table2第一行
	var table2Tr1Td1 = document.createElement('td');
	var table2Tr1Td2 = document.createElement('td');
	table2Tr1Td1.style.width = tableDiv.offsetWidth * 0.4 + "px";
	table2Tr1Td1.style.height = table2.offsetHeight * 0.2 + "px";
	table2Tr1Td2.style.width = tableDiv.offsetWidth * 0.6 + "px";
	table2Tr1Td2.style.height = table2.offsetHeight * 0.2 + "px";
	table2Tr1Td1.innerText = "订单日期";
	table2Tr1Td2.innerText = tempObj.orderNumber.substring(0,4)+"年"+ tempObj.orderNumber.substring(4,6)+"月"+ tempObj.orderNumber.substring(6,8)+"日" + tempObj.orderNumber.substring(8,10)+"时";
	table2Tr1.appendChild(table2Tr1Td1);
	table2Tr1.appendChild(table2Tr1Td2);
	//table2第二行
	var table2Tr2Td1 = document.createElement('td');
	var table2Tr2Td2 = document.createElement('td');
	table2Tr2Td1.innerText = "医院名称";
	table2Tr2Td2.innerText = tempObj.clinicName;
	table2Tr2.appendChild(table2Tr2Td1);
	table2Tr2.appendChild(table2Tr2Td2);
	//table2第三行
	var table2Tr3Td1 = document.createElement('td');
	var table2Tr3Td2 = document.createElement('td');
	table2Tr3Td1.innerText = "医生姓名";
	table2Tr3Td2.innerText = tempObj.doctorName;
	table2Tr3.appendChild(table2Tr3Td1);
	table2Tr3.appendChild(table2Tr3Td2);
	//table2第二四行
	var table2Tr4Td1 = document.createElement('td');
	var table2Tr4Td2 = document.createElement('td');
	table2Tr4Td1.innerText = "医生电话";
	table2Tr4Td2.innerText = tempObj.doctorPhone;
	table2Tr4.appendChild(table2Tr4Td1);
	table2Tr4.appendChild(table2Tr4Td2);
	//table2第五行
	var table2Tr5Td1 = document.createElement('td');
	var table2Tr5Td2 = document.createElement('td');
	table2Tr5Td1.innerText = "患者姓名";
	table2Tr5Td2.innerText = tempObj.patientName;
	table2Tr5.appendChild(table2Tr5Td1);
	table2Tr5.appendChild(table2Tr5Td2);
	//添加至table2
	table2.appendChild(table2Tr1);
	table2.appendChild(table2Tr2);
	table2.appendChild(table2Tr3);
	table2.appendChild(table2Tr4);
	table2.appendChild(table2Tr5);

	//创建table3
	var table3 = document.createElement('table');
	table3.style.width = tableDiv.offsetWidth + "px";
	table3.style.marginTop = 30 + "px";
	table3.style.height = 150 + "px";
	var table3Tr = document.createElement("tr");
	table3.appendChild(table3Tr);
	var table3TrTd = document.createElement("td");
	table3Tr.appendChild(table3TrTd);
	table3TrTd.style.width = tableDiv.offsetWidth + "px";
	table3TrTd.style.height = 140 + "px";
	var barDiv = document.createElement("div");
	barDiv.style.width = tableDiv.offsetWidth + "px";
	barDiv.className = "barcode2";
	table3TrTd.appendChild(barDiv);
	// 打印条形码函数
	toothPrint(barDiv, tempObj, "C");

	tableDiv.appendChild(table1);
	tableDiv.appendChild(table2);
	tableDiv.appendChild(table3);
	return tableDiv;
};

// print
function print(){
	var productArray = printArray[0];
	for (var i = 1; i < printArray.length; i ++) {
		// var newWindow = window.open("", "new"+i, "width=550", "height=330");
		// newWindow.document.write("<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>new window</title><link rel='stylesheet' type='text/css' href='css/barcode.css'></head><body></body></html>");
		var barcodeDiv = document.createElement('div');
		barcodeDiv.style.width = 550 + "px";
		barcodeDiv.style.height = 550 + "px";
		barcodeDiv.style.marginTop = 1000 + "px";
		document.body.appendChild(barcodeDiv);
		var resultDiv = createTable(productArray, printArray[i], barcodeDiv);
		var iFrame = document.createElement('iframe');
		iFrame.style.width = 550 + "px";
		iFrame.style.height = 550 + "px";
		iFrame.style.display = "block";
		iFrame.style.marginTop = 550 + "px";
		document.body.appendChild(iFrame);
		iFrame.contentWindow.document.write("<link rel='stylesheet' type='text/css' href='./css/barcode.css'>");
		iFrame.contentWindow.document.write("<body>" + resultDiv.innerHTML + "</body>");
		iFrame.contentWindow.focus();
		iFrame.contentWindow.document.write("<script>var timer = setTimeout(function(){window.print();window.close();clearInterval(this);}, 100);</script>");
		var timer = setTimeout(function(){
			location.reload();
		}, 300);
	}
}




















