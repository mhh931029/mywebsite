/**
 *参数1: 产品源数据
 *参数2: 根据名人名字分组的下标
 *参数3: 父级div
 *参数4: 字体大小
 *参数5: 是否需要打印
 *参数6: 是否隐藏profile一行
 *参数7: 是否需要删除按钮
 *参数8: 删除按钮提交的后台地址
 */
function listInquiryResult(groupedDataSource, sectionIndex, div, fontSize, ifNeedPrint, ifHideProfile, ifNeedDeletion, url) {
	var solidBorder = "1px solid black";
	var dottedBorder = "1px dotted black";
	var dashedBorder = "1px dashed black";
	var doubleBorder = "1px double black";
	var grooveBorder = "1px groove black";
	var ridgeBorder = "1px ridge black";
	div.style.overflowX = "hidden";
	div.style.overflowY = "scroll";

	//创建section
	var section = document.createElement("div");
	section.id = "section_" + sectionIndex;
	section.className = "section";
	section.style.width = div.offsetWidth + "px";
	section.style.fontSize = fontSize + "rem";
	div.appendChild(section);
	var profile = document.createElement("div");
	profile.style.width = section.offsetWidth + "px";
	profile.style.height = 25 + "px";
	profile.style.backgroundColor = "rgb(150, 120, 110)";
	profile.style.color = "white";
	profile.style.fontWeight = "bold";
	profile.style.textAlign = "center";
	profile.style.border = dashedBorder;
	profile.style.borderBottom = "none";
	if (!ifHideProfile) {
		section.appendChild(profile);
	}
	var profileSub1 = document.createElement("div");
	profileSub1.style.width = section.offsetWidth * 0.15 + "px";
	profileSub1.style.height = profile.offsetHeight + "px";
	profileSub1.style.lineHeight = 25 + "px";
	profileSub1.style.display = "inline-block";
	profileSub1.innerText = "患者姓名: " + groupedDataSource[0]["patientName"];
	profile.appendChild(profileSub1);
	var profileSub2 = document.createElement("div");
	profileSub2.style.width = section.offsetWidth * 0.15 + "px";
	profileSub2.style.height = profile.offsetHeight + "px";
	profileSub2.style.lineHeight = 25 + "px";
	profileSub2.style.display = "inline-block";
	profileSub2.innerText = "医生姓名: " + groupedDataSource[0]["doctorName"];
	profile.appendChild(profileSub2);
	var profileSub3 = document.createElement("div");
	profileSub3.style.width = section.offsetWidth * 0.15 + "px";
	profileSub3.style.height = profile.offsetHeight + "px";
	profileSub3.style.lineHeight = 25 + "px";
	profileSub3.style.display = "inline-block";
	profileSub3.innerText = "医生电话: " + groupedDataSource[0]["doctorPhone"];
	profile.appendChild(profileSub3);
	var profileSub4 = document.createElement("div");
	profileSub4.style.width = section.offsetWidth * 0.4 + "px";
	profileSub4.style.height = profile.offsetHeight + "px";
	profileSub4.style.lineHeight = 25 + "px";
	profileSub4.style.display = "inline-block";
	profileSub4.innerText = "订单号: " + (ifNeedDeletion == true ? createMainNumber() : groupedDataSource[0]["orderNumber"].substring(0, 20));
	profile.appendChild(profileSub4);

	for (var i = 0; i < groupedDataSource.length + 1; i ++) {
		//创建每一整行
		var row = document.createElement("div");
		row.id = "section_" + sectionIndex + "row_" + (i - 1);
		row.style.width = section.offsetWidth + "px";
		row.style.height = 25 + "px";
		row.style.color = row.id == "section_" + sectionIndex + "row_-1" ? "white" : "black";
		row.style.backgroundColor = row.id == "section_" + sectionIndex + "row_-1" ? "rgb(150, 120, 110)" : (i % 2 == 0 ? "lightgray" : "rgb(240, 240, 240)");
		row.style.borderTop = dashedBorder;
		row.style.borderLeft = dashedBorder;
		row.style.borderRight = dashedBorder;
		row.style.borderBottom = i == groupedDataSource.length ? dashedBorder : "none";
		row.style.lineHeight = 25 + "px";
		row.style.fontWeight = row.id == "section_" + sectionIndex + "row_-1" ? "bold" : "normal";
		row.style.transition = "0.2s all";
		row.patientName = row.id == "section_" + sectionIndex + "row_-1" ? "产品名称" :groupedDataSource[i - 1]["patientName"];
		row.productName = row.id == "section_" + sectionIndex + "row_-1" ? "产品名称" :groupedDataSource[i - 1]["productName"];
		row.toothPosition = row.id == "section_" + sectionIndex + "row_-1" ? "产品名称" :groupedDataSource[i - 1]["toothPosition"];
		row.indexInGroupedDatascourse = row.id == "section_" + sectionIndex + "row_-1" ? null : i - 1;
		section.appendChild(row);
		//创建第1个子div
		var rowSub1 = document.createElement("div");
		rowSub1.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.27 + "px";
		rowSub1.style.height = row.offsetHeight + "px";
		rowSub1.style.backgroundColor = row.id == "section_" + sectionIndex + "row_-1" ? "transparent" : "transparent";
		rowSub1.style.display = "inline-block";
		rowSub1.style.textAlign = "center";
		rowSub1.style.verticalAlign = "top";
		rowSub1.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "产品名称" :(groupedDataSource[i - 1]["laborCharge"] != "" && groupedDataSource[i - 1]["toothPosition"] != "" ? "" : translateProductName(groupedDataSource[i - 1]["productName"]));
		rowSub1.className = row.id == "section_" + sectionIndex + "row_-1" ? null : (groupedDataSource[i - 1]["laborCharge"] != "" ? "paiyaDiv" : null);
		row.appendChild(rowSub1);
		//创建第2个子div
		var rowSub2 = document.createElement("div");
		rowSub2.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.07 + "px";
		rowSub2.style.height = row.offsetHeight + "px";
		rowSub2.style.display = "inline-block";
		rowSub2.style.textAlign = "center";
		rowSub2.style.verticalAlign = "top";
		rowSub2.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "牙位/半口" : (groupedDataSource[i - 1]["shangbankouSelected"] != "" || groupedDataSource[i - 1]["xiabankouSelected"] != "" ? (groupedDataSource[i - 1]["shangbankouSelected"] == "true" && groupedDataSource[i - 1]["xiabankouSelected"] == "" ? "上半口" : (groupedDataSource[i - 1]["shangbankouSelected"] == "" && groupedDataSource[i - 1]["xiabankouSelected"] == "true" ? "下半口" : "全口")) : groupedDataSource[i - 1]["toothPosition"]);
		row.appendChild(rowSub2);
		//创建第3个子div
		var rowSub3 = document.createElement("div");
		rowSub3.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.07 + "px";
		rowSub3.style.height = row.offsetHeight + "px";
		rowSub3.style.display = "inline-block";
		rowSub3.style.textAlign = "center";
		rowSub3.style.verticalAlign = "top";
		rowSub3.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "连冠/单冠" : (groupedDataSource[i - 1]["singleOrContinual"] == "lianguan" ? "连冠" : (groupedDataSource[i - 1]["singleOrContinual"] == "danguan" ? "单冠" : ""));
		row.appendChild(rowSub3);
		//创建第4个子div
		var rowSub4 = document.createElement("div");
		rowSub4.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.07 + "px";
		rowSub4.style.height = row.offsetHeight + "px";
		rowSub4.style.display = "inline-block";
		rowSub4.style.textAlign = "center";
		rowSub4.style.verticalAlign = "top";
		rowSub4.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "比色系统" : groupedDataSource[i - 1]["colorSystem"];
		row.appendChild(rowSub4);
		//创建第5个子div
		var rowSub5 = document.createElement("div");
		rowSub5.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.06 + "px";
		rowSub5.style.height = row.offsetHeight + "px";
		rowSub5.style.display = "inline-block";
		rowSub5.style.textAlign = "center";
		rowSub5.style.verticalAlign = "top";
		rowSub5.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "基牙色" : groupedDataSource[i - 1]["jiyase"];
		row.appendChild(rowSub5);
		//创建第6个子div
		var rowSub6 = document.createElement("div");
		rowSub6.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.10 + "px";
		rowSub6.style.height = row.offsetHeight + "px";
		rowSub6.style.display = "inline-block";
		rowSub6.style.textAlign = "center";
		rowSub6.style.verticalAlign = "top";
		rowSub6.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "比色/排牙信息" : (groupedDataSource[i - 1]["colorInfo"].length != 0 ? groupedDataSource[i - 1]["colorInfo"] : (groupedDataSource[i - 1]["paiyaInfo"].length != 0 ? groupedDataSource[i - 1]["paiyaInfo"] : ""));
		row.appendChild(rowSub6);
		//创建第7个子div
		var rowSub7 = document.createElement("div");
		rowSub7.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.06 + "px";
		rowSub7.style.height = row.offsetHeight + "px";
		rowSub7.style.display = "inline-block";
		rowSub7.style.textAlign = "center";
		rowSub7.style.verticalAlign = "top";
		rowSub7.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "数量" : (groupedDataSource[i - 1]["zuhanqiShuliang"].length != 0 ? groupedDataSource[i - 1]["zuhanqiShuliang"] + "个" : "");
		row.appendChild(rowSub7);
		//创建第8个子div
		var rowSub8 = document.createElement("div");
		rowSub8.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.07 + "px";
		rowSub8.style.height = row.offsetHeight + "px";
		rowSub8.style.display = "inline-block";
		rowSub8.style.textAlign = "center";
		rowSub8.style.verticalAlign = "top";
		rowSub8.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "附加费用" : (groupedDataSource[i - 1]["laborCharge"] != "" && groupedDataSource[i - 1]["toothPosition"] != "" ? "排牙费" : "");
		row.appendChild(rowSub8);
		//创建第9个子div
		var rowSub9 = document.createElement("div");
		rowSub9.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.06 + "px";
		rowSub9.style.height = row.offsetHeight + "px";
		rowSub9.style.display = "inline-block";
		rowSub9.style.textAlign = "center";
		rowSub9.style.verticalAlign = "top";
		rowSub9.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "价格" : (groupedDataSource[i - 1]["laborCharge"] != "" && groupedDataSource[i - 1]["toothPosition"] != "" ? groupedDataSource[i - 1]["laborCharge"] + "元" : (rowSub7.innerText == "" ? groupedDataSource[i - 1]["price"] + "元" : parseInt(groupedDataSource[i - 1]["price"]) * parseInt(rowSub7.innerText) + "元"));
		row.appendChild(rowSub9);
		//创建第10个子div
		var rowSub10 = document.createElement("div");
		var rowSub10Width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * (!ifNeedDeletion ? 0.15 : 0.1);
		rowSub10.style.width = rowSub10Width + "px";
		rowSub10.style.height = row.offsetHeight + "px";
		rowSub10.style.borderRight = !ifNeedDeletion ? "none" : solidBorder;
		rowSub10.style.display = "inline-block";
		rowSub10.style.textAlign = "center";
		rowSub10.style.verticalAlign = "top";
		rowSub10.text = row.id == "section_" + sectionIndex + "row_-1" ? "医生说明" : groupedDataSource[i - 1]["yishengshuoming"];
		var text = createSuitableText(rowSub10Width, row.id == "section_" + sectionIndex + "row_-1" ? "医生说明" : groupedDataSource[i - 1]["yishengshuoming"], "...");
		rowSub10.innerText = text;
		if (rowSub10.innerText.indexOf("...") != -1){
			rowSub10.onmouseenter = function(){		
				this.style.cursor = "help";
				this.style.boxShadow = "inset 0 0 5px 1px brown";
				var text = this.text;
				timer = setTimeout(function(){
					var ysBox = document.createElement("div");
					ysBox.id = "ysBox";
					ysBox.style.boxShadow = "0 0 50px 3px black";
					ysBox.style.backgroundColor = "white";
					ysBox.style.position = "absolute";
					ysBox.style.width = 500 + "px";
					ysBox.style.height = 300 + "px";
					ysBox.style.left = document.body.offsetWidth / 2 - 250 + "px";
					ysBox.style.top = document.body.clientHeight / 2 - 150 + "px";
					ysBox.style.border = dottedBorder;
					ysBox.innerText = text;
					document.body.appendChild(ysBox);
				}, 500);
			};
			rowSub10.onmouseleave = function(){
				clearInterval(timer);
				this.style.boxShadow = "none";
				if (document.body.lastChild.id == "ysBox"){
					document.body.removeChild(document.body.lastChild);
				}
			}
		}
		row.appendChild(rowSub10);
		//创建第11个子div
		if (ifNeedDeletion == true) {
			var rowSub11 = document.createElement("div");
			rowSub11.style.width = document.getElementById("section_" + sectionIndex + "row_-1").offsetWidth * 0.05 + "px";
			rowSub11.style.height = row.offsetHeight + "px";
			rowSub11.style.display = "inline-block";
			rowSub11.style.textAlign = "center";
			rowSub11.innerText = row.id == "section_" + sectionIndex + "row_-1" ? "删除" : "";
			row.appendChild(rowSub11);
			//创建删除按钮
			var deleteBtn = document.createElement("div");
			deleteBtn.id = row.id + "delBtn";
			deleteBtn.style.width = rowSub11.offsetWidth * 0.9 + "px";
			deleteBtn.style.height = rowSub11.offsetHeight - 6 + "px";
			deleteBtn.style.marginLeft = 2 + "px";
			deleteBtn.style.marginTop = 2 + "px";
			deleteBtn.style.border = solidBorder;
			deleteBtn.style.borderRadius = rowSub11.offsetWidth * 0.45 + "px";
			deleteBtn.style.verticalAlign = "top";
			deleteBtn.style.lineHeight = rowSub11.offsetHeight - 6 + "px";
			deleteBtn.style.cursor = "pointer";
			deleteBtn.style.transition = "0.2s all";
			deleteBtn.innerText = "×";
			if (row.id != "section_" + sectionIndex + "row_-1") {
				rowSub11.appendChild(deleteBtn);
			}
			deleteBtn.onmouseenter = function(){
				this.parentNode.parentNode.style.boxShadow = "inset 0 0 5px 1px brown";
				this.style.boxShadow = "0 0 5px 1px brown";
				this.style.fontWeight = "bold";
			}
			deleteBtn.onmouseleave = function(){
				this.parentNode.parentNode.style.boxShadow = "none";
				this.style.boxShadow = "none";
				this.style.fontWeight = "normal";
			}
			deleteBtn.onclick = function(){
				var section = this.parentNode.parentNode.parentNode;
				var row = this.parentNode.parentNode;
				var tempPatientName = row.patientName;
				var tempProductName = row.productName;
				var tempToothPosition = row.toothPosition;
				if (row.firstChild.nextSibling.innerText != "" || tempProductName == "sandi_shuzhimoxing_bankou" || tempProductName == "sandi_shuzhimoxing_quankou" || tempProductName == "zhengji_zuhanqi") {
					section.removeChild(row);
				}else{
					for (var i = (ifHideProfile ? 1 : 2); i < section.childNodes.length; i ++) {
						while (section.childNodes[i]!= null && section.childNodes[i].firstChild.className == "paiyaDiv" && section.childNodes[i].productName == tempProductName) {
							section.removeChild(section.childNodes[i]);
						}
					}
				}
				//删除某行后, 颜色重新排列
				for (var i = (ifHideProfile ? 1 : 2); i < section.childNodes.length; i ++) {
					section.childNodes[i].style.backgroundColor = i % 2 == 0 ? "rgb(240, 240, 240)" : "lightgray";
				}
				//当section下没有row, 删除整个section
				if (section.childNodes.length == (ifHideProfile ? 1 : 2)) {
					while(section.hasChildNodes()) {
						section.removeChild(section.lastChild);
					}
					section.parentNode.removeChild(section);
				}
				var arrayToBeDeleted = [];
				arrayToBeDeleted.splice(0, 0, tempPatientName, tempProductName, tempToothPosition);
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
				virtualFrom.action = url;
				virtualFrom.target = "_hidden";
				virtualFrom.method = "post";
				virtualFrom.submit();
			}
		}
	}
}

//产品源数据根据患者姓名分组
function groupByPatientName(dataSource){
	var dataSourceObj = new Object();
	var key = dataSource[0]["patientName"];
	dataSourceObj[key] = new Array();
	for (var i = 1; i < dataSource.length; i ++) {
		if (dataSource[i]["patientName"] != dataSource[i - 1]["patientName"] && dataSource.indexOf(dataSource[i]["patientName"]) == -1) {
			var key = dataSource[i]["patientName"];
			dataSourceObj[key] = new Array();
		}
	}
	for (var i = 0; i < dataSource.length; i ++) {
		dataSourceObj[dataSource[i]["patientName"]].push(dataSource[i]);
	}
	var groupedArray = new Array();
	for (var key in dataSourceObj){
		var tempArray = new Array();
		var tempObj = new Object();
		tempObj[key] = dataSourceObj[key];
		tempArray.push(key);
		tempArray.push(tempObj);
		groupedArray.push(tempArray);
	}
	return groupedArray;
}

//生成订单号的随机数字
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
	return currentYear + currentMonth + currentDay + currentHour + currentMinute + currentSecond + a + b + c + d + e + f;
}

//根据文本和文本框的宽度自动生成最合适的文本
/**
 *参数1:文本框宽度
 *参数2:源文本
 *参数3:超出部分需要用何种省略号代替
 */
function createSuitableText(textboxWidth, text, abbr){
	var textWidth = getTextWidth(text);
	if (textWidth < textboxWidth) {
		return text;
	}
	var abbrWidth = getTextWidth(abbr);
	var widthRemaining = textboxWidth - abbrWidth;
	var criticalIndex = 0;
	var criticalWidth = 0;
	while(widthRemaining >= criticalWidth){
		criticalWidth = getTextWidth(text.substring(0, criticalIndex));
		criticalIndex ++;
	}
	var suitableText = text.substring(0, criticalIndex - 2);
	return suitableText + abbr;
	//获取文本宽度
	function getTextWidth(string) {
		var span = document.createElement("span");
		span.innerText = string;
		document.getElementsByTagName("body")[0].appendChild(span);
		var textWidth = span.offsetWidth;
		document.getElementsByTagName("body")[0].removeChild(span);
		return textWidth;
	}
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