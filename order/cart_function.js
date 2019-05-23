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
var patientMainNumberArray = new Array();

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
		requestByGET("http://www.maierlefu.com/mywebsite/php/select_client.php?PHPSESSID=" + sessionId, function(sessionResponse){
			if (sessionResponse.indexOf("client is") != -1 && sessionResponse.indexOf("client name ends") != -1) {
				//json数据解析
				requestByGET("http://www.maierlefu.com/mywebsite/php/select_cart.php", function(response){
					var dataSource = JSON.parse(response);
					var groupedArray = groupByPatientName(dataSource);
					for (var i = 0; i < groupedArray.length; i ++) {
						listInquiryResult(groupedArray[i][1][groupedArray[i][0]], i, showProducts, 0.9, true, false, true, "http://www.maierlefu.com/mywebsite/php/delete_cart_item.php");
						listTrialsAndAccessories(groupedArray[i][1][groupedArray[i][0]], otherinfoDiv1, otherinfoDiv2);
					}
					createPatientMainNumberArray(groupedArray, patientMainNumberArray);
					if (dataSource.length != 0) {
						showCliniclName.innerText = dataSource[0]["clinicName"];
						showOrderYear.innerText = dataSource[0]["orderYear"];
						showOrderMonth.innerText = dataSource[0]["orderMonth"];
						showOrderDay.innerText = dataSource[0]["orderDay"];
						showOrderHour.innerText = dataSource[0]["orderHour"];
						showDeliveryYear.innerText = dataSource[0]["deliveryYear"];
						showDeliveryMonth.innerText = dataSource[0]["deliveryMonth"];
						showDeliveryDay.innerText = dataSource[0]["deliveryDay"];
						showDeliveryHour.innerText = dataSource[0]["deliveryHour"];
					}
				});
			}else{
				self.location.href = "../login/login.html";
			}
		});
	}
	runOnce(getClinicName);
}

//试做信息和随单附品
function listTrialsAndAccessories(dataSource, trialsDiv, AccessoriesDiv){
	//定义试做信息变量
	var shizuoSpecific = document.createElement("div");
	shizuoSpecific.style.borderBottomStyle = "double";
	//定义随单附品变量
	var suidanSpecific = document.createElement("div");
	suidanSpecific.style.borderBottomStyle = "double";
	for (var i = 0; i < dataSource.length; i ++) {
		if (dataSource[i]["shiNeiguan"] == 1 || dataSource[i]["shiCiya"] == 1 || dataSource[i]["shiZhiiia"] == 1 || dataSource[i]["shiPaiya"] == 1) {
			if (shizuoSpecific.innerText.length == 0) {
				shizuoSpecific.innerText = dataSource[i]["patientName"] + ": ";
				if (dataSource[i]["shiNeiguan"] == 1) {
					shizuoSpecific.innerText += "试内冠 ";
				}
				if (dataSource[i]["shiCiya"] == 1) {
					shizuoSpecific.innerText += "试瓷牙 ";
				}
				if (dataSource[i]["shiZhijia"] == 1) {
					shizuoSpecific.innerText += "试支架 ";
				}
				if (dataSource[i]["shiPaiya"] == 1) {
					shizuoSpecific.innerText += "试排牙 ";
				}
				shizuoSpecific.innerText += "\n";
				trialsDiv.appendChild(shizuoSpecific);
			}
		}
		if (dataSource[i]["suidanfupinLadiShuliang"] != "" || dataSource[i]["suidanfupinJiuyaShuliang"] != "" || dataSource[i]["suidanfupinRengongyayinShuliang"] != "" || dataSource[i]["suidanfupinTuopanShuliang"] != "" || dataSource[i]["suidanfupinHejiaShuliang"] != "" || dataSource[i]["suidanfupinCankaomoShuliang"] != "" || dataSource[i]["suidanfupinJitaiShuliang"] != "" || dataSource[i]["suidanfupinZhuanyiganShuliang"] != "" || dataSource[i]["suidanfupinTidaitiShuliang"] != "" || dataSource[i]["suidanfupinQita"] != "" || dataSource[i]["suidanfupinQitaShuliang"] != "") {
			if (suidanSpecific.innerText.length == 0) {
				suidanSpecific.innerText = dataSource[i]["patientName"] + ": ";
				if (dataSource[i]["suidanfupinLadiShuliang"] != "") {
					suidanSpecific.innerText += "蜡堤×" + dataSource[i]["suidanfupinLadiShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinJiuyaShuliang"] != "") {
					suidanSpecific.innerText += "旧牙×" + dataSource[i]["suidanfupinJiuyaShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinRengongyayinShuliang"] != "") {
					suidanSpecific.innerText += "人工牙龈×" + dataSource[i]["suidanfupinRengongyayinShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinTuopanShuliang"] != "") {
					suidanSpecific.innerText += "托盘×" + dataSource[i]["suidanfupinTuopanShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinHejiaShuliang"] != "") {
					suidanSpecific.innerText += "颌架×" + dataSource[i]["suidanfupinHejiaShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinCankaomoShuliang"] != "") {
					suidanSpecific.innerText += "参考模×" + dataSource[i]["suidanfupinCankaomoShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinJitaiShuliang"] != "") {
					suidanSpecific.innerText += "基台×" + dataSource[i]["suidanfupinJitaiShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinZhuanyiganShuliang"] != "") {
					suidanSpecific.innerText += "转移杆×" + dataSource[i]["suidanfupinZhuanyiganShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinTidaitiShuliang"] != "") {
					suidanSpecific.innerText += "替代体×" + dataSource[i]["suidanfupinTidaitiShuliang"] + " ";
				}
				if (dataSource[i]["suidanfupinQita"] != "" && dataSource[i]["suidanfupinQitaShuliang"] != "") {
					suidanSpecific.innerText += dataSource[i]["suidanfupinQita"] + "×"  + dataSource[i]["suidanfupinQitaShuliang"] + " ";
				}
				AccessoriesDiv.appendChild(suidanSpecific);
			}
		}
	}
}

function createPatientMainNumberArray(groupedArray, resultArray) {
	for (var i = 0; i < groupedArray.length; i ++) {
		var tempObj = new Object();
		tempObj.patientName = groupedArray[i][0];
		tempObj.mainNumber = document.getElementById("section_" + i).firstChild.lastChild.innerText.substring(5);
		resultArray.push(tempObj);
	}
}

//正式下单按钮
function finalSubmit() {
	//打印条形码
	var sections = document.getElementsByClassName("section");
	for (var i = 0; i < sections.length; i ++) {
		var printObj = new Object();
		printObj.clinicName = showCliniclName.innerText;
		printObj.patientName = sections[i].firstChild.firstChild.innerText.substring(6);
		printObj.doctorName = sections[i].firstChild.firstChild.nextSibling.innerText.substring(6);
		printObj.doctorPhone = sections[i].firstChild.firstChild.nextSibling.nextSibling.innerText.substring(6);
		printObj.orderNumber = sections[i].firstChild.lastChild.innerText.substring(5);
		var barcodeDiv = document.createElement("div");
		barcodeDiv.style.width = 550 + "px";
		barcodeDiv.style.height = 400 + "px";
		barcodeDiv.style.position = "fixed";
		barcodeDiv.style.left = document.body.offsetWidth / 2 - 275 + "px";
		barcodeDiv.style.top = document.body.clientHeight / 2 - 200 + "px";
		barcodeDiv.style.zIndex = - 100 + i;
		document.body.appendChild(barcodeDiv);
		var resultDiv = createTable(printObj, barcodeDiv);
		var iFrame = document.createElement("iframe");
		iFrame.style.width = 550 + "px";
		iFrame.style.height = 400 + "px";
		iFrame.style.position = "fixed";
		iFrame.style.left = document.body.offsetWidth / 2 - 275 + "px";
		iFrame.style.top = document.body.clientHeight / 2 - 200 + "px";
		iFrame.style.zIndex = - 200 + i;
		document.body.appendChild(iFrame);
		iFrame.contentWindow.focus();
		iFrame.contentWindow.document.write("<link rel='stylesheet' type='text/css' href='barcode.css'>");
		iFrame.contentWindow.document.write("<body>" + resultDiv.innerHTML + "</body>");
		iFrame.contentWindow.document.write("<script>var timer = setTimeout(function(){window.print();window.close();clearInterval(this);}, 100);</script>");
	}
	//提交服务器
	var timer = setTimeout(function(){
		requestByPOST ("http://www.maierlefu.com/mywebsite/php/insert_order_db.php", "patientmainnumber=" + JSON.stringify(patientMainNumberArray), function(response) {
			if (response.indexOf("order has been placed successfully") != -1) {
				alert("下单成功!");
				window.location.href = 'order.html';
			}else{
				alert("下单失败!");
				window.location.href = "order.html";
			}
		});
	}, 1000);
}
//取消按钮
function cancelAction() {
	window.location.href = "order.html";
}

//设置打印条形码
function toothPrint(div, printObj, barcodeType){
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
        var textValue = printObj.orderNumber;
        createBarcode(div, textValue, barcodeType);
};

function createTable(printObj, body){
	var tableDiv = document.createElement("div");
	tableDiv.style.width = 550 + "px";
	tableDiv.style.height = 335 + "px";
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
	table2Tr1Td2.innerText = printObj.orderNumber.substring(0,4)+"年"+ printObj.orderNumber.substring(4,6)+"月"+ printObj.orderNumber.substring(6,8)+"日" + printObj.orderNumber.substring(8,10)+"时";
	table2Tr1.appendChild(table2Tr1Td1);
	table2Tr1.appendChild(table2Tr1Td2);
	//table2第二行
	var table2Tr2Td1 = document.createElement('td');
	var table2Tr2Td2 = document.createElement('td');
	table2Tr2Td1.innerText = "医院名称";
	table2Tr2Td2.innerText = printObj.clinicName;
	table2Tr2.appendChild(table2Tr2Td1);
	table2Tr2.appendChild(table2Tr2Td2);
	//table2第三行
	var table2Tr3Td1 = document.createElement('td');
	var table2Tr3Td2 = document.createElement('td');
	table2Tr3Td1.innerText = "医生姓名";
	table2Tr3Td2.innerText = printObj.doctorName;
	table2Tr3.appendChild(table2Tr3Td1);
	table2Tr3.appendChild(table2Tr3Td2);
	//table2第二四行
	var table2Tr4Td1 = document.createElement('td');
	var table2Tr4Td2 = document.createElement('td');
	table2Tr4Td1.innerText = "医生电话";
	table2Tr4Td2.innerText = printObj.doctorPhone;
	table2Tr4.appendChild(table2Tr4Td1);
	table2Tr4.appendChild(table2Tr4Td2);
	//table2第五行
	var table2Tr5Td1 = document.createElement('td');
	var table2Tr5Td2 = document.createElement('td');
	table2Tr5Td1.innerText = "患者姓名";
	table2Tr5Td2.innerText = printObj.patientName;
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
	toothPrint(barDiv, printObj, "C");

	tableDiv.appendChild(table1);
	tableDiv.appendChild(table2);
	tableDiv.appendChild(table3);
	return tableDiv;
};