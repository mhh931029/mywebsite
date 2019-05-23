/**
 *参数1: 要把此搜索模块添加到哪个div上
 *参数2和参数3: 搜索模块的左上角原点坐标
 *参数4: 搜索模块的宽度
 *参数5: 搜索模块的高度
 *参数6: 搜索模块的z-index
 *参数7: 搜索文本框的宽度微调(负数为减小)
 *参数8: 搜索文本框的高度微调(负数为减小)
 */

function includeOtherJSFile(path) {
	document.write("<script type='text/javascript' src='" + path + "'></script>");
}

function createSearchBar(div, originX, originY, width, height, zIndex, trimOfInputWidth, trimOfInputHeight){
	if (width <= 280) {
		width = 280;
	}
	if (height <= 25) {
		height = 25;
	}
	var searchBar = document.createElement("div");
	searchBar.style.position = "absolute";
	searchBar.style.left = originX + "px";
	searchBar.style.top = originY + "px";
	searchBar.style.padding = "2px 2px";
	searchBar.style.width = width + "px";
	searchBar.style.height = height + "px";
	searchBar.style.zIndex = zIndex == undefined ? 0 : zIndex;

	var inputArea = document.createElement("input");
	inputArea.type = "text";
	inputArea.style.width = width - 60 - 6 + (trimOfInputWidth == undefined ? 0 : trimOfInputWidth) + "px";
	inputArea.style.height = height - 4 + (trimOfInputHeight == undefined ? 0 : trimOfInputHeight) + "px";
	inputArea.style.lineHeight = height - 4 + "px";
	inputArea.style.border = "1px solid gray";
	inputArea.style.marginRight = 2 + "px";
	inputArea.style.verticalAlign = "top";
	inputArea.style.boxShadow = "inset 0 0 5px gray";
	inputArea.onfocus = function(){
		var instructionBox = document.createElement("div");
		instructionBox.id = "instructionBox";
		instructionBox.style.width = width - 16 + "px";
		instructionBox.style.position = "absolute";
		instructionBox.style.padding = "0px 10px";
		instructionBox.style.left = originX + "px";
		instructionBox.style.top = originY + height + 6 + "px";
		instructionBox.style.border = "1px dotted gray";
		instructionBox.style.borderTop = "transparent";
		instructionBox.style.backgroundColor = "white";
		instructionBox.style.zIndex = zIndex;

		var ul = document.createElement("ul");
		ul.style.listStyle = "none";
		ul.style.padding = 0;
		ul.style.color = "gray";
		ul.style.fontSize = 0.8 + "rem";
		var li1 = document.createElement("li");
		li1.innerHTML = "<p style = 'color: #646464; font-weight: bolder; line-height: 0.8rem; margin-bottom: 0;'>按患者姓名搜索：</p>请直接输入患者姓名并点击搜索按钮。";
		var li2 = document.createElement("li");
		li2.innerHTML = "<p style = 'color: #646464; font-weight: bolder; line-height: 0.8rem; margin-bottom: 0;'>按订单号搜索：</p>请输入20位订单号并点击搜索按钮。";
		var li3 = document.createElement("li");
		li3.innerHTML = "<p style = 'color: #646464; font-weight: bolder; line-height: 0.8rem; margin-bottom: 0;'>按下单日期搜索：</p>请输入8位日期，格式为YYYYMMDD，并点击搜索按钮。比如您要搜索的日期为2010年1月1日，则输入20100101。";
		var li4 = document.createElement("li");
		li4.innerHTML = "<p style = 'color: #646464; font-weight: bolder; line-height: 0.8rem; margin-bottom: 0;'>按日期段搜索：</p>请输入17位日期段，格式为YYYYMMDD-YYYYMMDD，并点击搜索按钮。比如您要搜索的日期段为2010年1月1日至2010年6月15日，则输入20100101-20100615。";
		ul.appendChild(li1);
		ul.appendChild(li2);
		ul.appendChild(li3);
		ul.appendChild(li4);
		instructionBox.appendChild(ul);
		div.appendChild(instructionBox);
	}
	inputArea.onblur = function(){
		var instructionBox = document.getElementById("instructionBox");
		div.removeChild(instructionBox);
	}
	inputArea.oninput  = function(){
		var inputStr = inputArea.value;
		var result = analyseInputString(inputStr);
		if (inputStr == "") {
			this.style.border = "1px solid gray";
			this.style.boxShadow = "inset 0 0 5px gray";
		}else{
			if (result.sort == "invalid") {
				this.style.border = "1px solid red";
				this.style.boxShadow = "inset 0 0 5px red";
				return;
			}else{
				this.style.border = "1px solid gray";
				this.style.boxShadow = "inset 0 0 5px gray";
			}
		}
	}

	var submitBtn = document.createElement("input");
	submitBtn.type = "button";
	submitBtn.value = "查询";
	submitBtn.style.width = 60 + "px";
	submitBtn.style.height = height + "px";
	submitBtn.style.verticalAlign = "top";
	submitBtn.onclick = function(){
		var inputStr = inputArea.value;
		var result = analyseInputString(inputStr);
		if (result.sort == "invalid") {
			alert ("格式不对。请核实!");
			return;
		}
		var URL = "http://localhost/mywebsite/inquiry/searchbar_result.html";
		var requestBody = "request=searchbar&sort=" + result.sort + "&value=" + result.value;
		window.open(URL + "?" + requestBody);
	}

	searchBar.appendChild(inputArea);
	searchBar.appendChild(submitBtn);
	div.appendChild(searchBar);

	function analyseInputString(string) {
		var result = new Object();
		result.sort = "";
		result.value = "";
		var count = 0;
		for (var i = 0; i < string.length; i ++) {
			if (string.charAt(i) == "-") {
				count += 1;
			}
		}
		if (count == 0) {
			if (isNaN(string)) {
				result.sort = "patient_name";
				result.value = string;
			}else{
				if (string.length == 20) {
					result.sort = "order_number";
					result.value = string;
				}else if (string.length == 8) {
					if(!ifDateValid(string)){
						result.sort = "invalid";
					}else{
						result.sort = "order_date";
						result.value = string;
					}
				}else{
					result.sort = "invalid";
				}
			}
		}else if (count == 1) {
			var strArr = string.split("-");
			var startDate = strArr[0];
			var endDate = strArr[1];
			if (startDate.length != 8 || endDate.length != 8) {
				result.sort = "invalid";
			}else{
				if(!ifDateValid(startDate) || !ifDateValid(endDate)){
					result.sort = "invalid";
				}else{
					result.sort = "date_segment";
					result.value = string;
				}
			}
		}else{
			result.sort = "invalid";
		}
		return result;
	}
}