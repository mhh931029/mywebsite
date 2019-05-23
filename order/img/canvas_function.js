var productDetails = new Array();

var show = document.getElementById("show");
show.style.backgroundColor = "rgb(64, 138, 211)";
show.style.width = document.getElementById("right").offsetWidth + "px";
show.style.height = document.getElementById("right").offsetHeight - 2 + "px";
show.style.fontSize = 0;
show.style.position = "absolute";
show.style.left = document.getElementById("right").offsetLeft + "px";
show.style.top = document.getElementById("right").offsetTop + "px";
show.style.zIndex = -1;

var showSubdiv1 = document.getElementById("show_subdiv1");
showSubdiv1.style.width = show.offsetWidth * 0.425 + "px";
showSubdiv1.style.height = show.offsetHeight + "px";
showSubdiv1.style.display = "inline-block";
showSubdiv1.style.fontSize = "1rem";

var showSubdiv2 = document.getElementById("show_subdiv2");
showSubdiv2.style.width = show.offsetWidth * 0.575 + "px";
showSubdiv2.style.height = show.offsetHeight + "px";
showSubdiv2.style.display = "inline-block";
showSubdiv2.style.fontSize = 0;
showSubdiv2.style.verticalAlign = "top";

var showSubdiv2Sub1 = document.getElementById("show_subdiv2_sub1");
showSubdiv2Sub1.style.width = showSubdiv2.offsetWidth + "px";
showSubdiv2Sub1.style.height = 25 + "px";
showSubdiv2Sub1.style.fontSize = "1rem";
showSubdiv2Sub1.style.verticalAlign = "top";
var showSubdiv2Sub2 = document.getElementById("show_subdiv2_sub2");
showSubdiv2Sub2.style.width = showSubdiv2.offsetWidth * 0.30 + "px";
showSubdiv2Sub2.style.height = showSubdiv2.offsetHeight - 25 + "px";
showSubdiv2Sub2.style.display = "inline-block";
showSubdiv2Sub2.style.fontSize = "1rem";
showSubdiv2Sub2.style.verticalAlign = "top";
var showSubdiv2Sub3 = document.getElementById("show_subdiv2_sub3");
showSubdiv2Sub3.style.width = showSubdiv2.offsetWidth * 0.40 + "px";
showSubdiv2Sub3.style.height = showSubdiv2.offsetHeight - 25 + "px";
showSubdiv2Sub3.style.display = "inline-block";
showSubdiv2Sub3.style.fontSize = "1rem";
showSubdiv2Sub3.style.verticalAlign = "top";
function addContentsToSub3(type) {
	switch(type) {
		case "bise":
			colorSystem = document.createElement("select");
			colorSystem.style.margin = "5px 0";
			colorSystem.style.display = "block";
			showSubdiv2Sub3.appendChild(colorSystem);
			var option1 = document.createElement("option");
			option1.value = "VITA16";
			option1.innerText = "VITA 16色";
			colorSystem.appendChild(option1);
			var option2 = document.createElement("option");
			option2.value = "VITA26";
			option2.innerText = "VITA 26色";
			colorSystem.appendChild(option2);
			var a1 = document.createElement("a");
			a1.innerText = "基牙色";
			showSubdiv2Sub3.appendChild(a1);
			var br = document.createElement("br");
			showSubdiv2Sub3.appendChild(br);
			var input = document.createElement("input");
			input.type = "text";
			input.name = "jiyase";
			input.id = "jiyase";
			input.style.width = "160px";
			input.style.borderRadius = "5px";
			input.style.backgroundColor = "lightgray";
			input.style.display = "block";
			showSubdiv2Sub3.appendChild(input);
			var a2 = document.createElement("a");
			a2.innerText = "比色";
			a2.style.display = "block";
			showSubdiv2Sub3.appendChild(a2);
			generateUl(type);
			break;
		case "paiya":
			generateUl(type);
			break;
		default:
			break;
	}
}
//生成比色ul
function generateUl(type) {
	switch(type) {
		case "bise":
			biseUl = document.createElement("ul");
			biseUl.style.height = 270 + "px";
			biseUl.style.overflow = "auto";
			showSubdiv2Sub3.appendChild(biseUl);
			break;
		case "paiya":
			paiyaUl = document.createElement("ul");
			paiyaUl.style.height = 270 + "px";
			paiyaUl.style.overflow = "auto";
			showSubdiv2Sub3.appendChild(paiyaUl);
			break;
	}
}

var showSubdiv2Sub4 = document.getElementById("show_subdiv2_sub4");
showSubdiv2Sub4.style.width = showSubdiv2.offsetWidth * 0.30 - 1 + "px";
showSubdiv2Sub4.style.height = showSubdiv2.offsetHeight - 25 + "px";
showSubdiv2Sub4.style.display = "inline-block";
showSubdiv2Sub4.style.fontSize = "1rem";
showSubdiv2Sub4.style.verticalAlign = "top";

//点击产品名弹出详情
var productLinks = document.getElementsByClassName("product_link");
for (var i = 0; i < productLinks.length; i ++) {
	productLinks[i].onclick = function () {
		if (this.id == "zhengji_zuhanqi" || this.id == "sandi_shuzhimoxing_bankou" || this.id == "sandi_shuzhimoxing_quankou") {
			while (showSubdiv1.hasChildNodes()){
				showSubdiv1.removeChild(showSubdiv1.lastChild);
			}
			while (showSubdiv2Sub2.hasChildNodes()){
				showSubdiv2Sub2.removeChild(showSubdiv2Sub2.lastChild);
			}
			while(showSubdiv2Sub3.hasChildNodes()){
				showSubdiv2Sub3.removeChild(showSubdiv2Sub3.lastChild);
			}
			if (this.id == "sandi_shuzhimoxing_bankou" || this.id == "sandi_shuzhimoxing_quankou") {
				var p = document.createElement("p");
				p.innerText = "请再次点击\"添加到购物车\"按钮确认";
				p.style.textAlign = "center";
				p.style.fontSize = 1.3 + "rem";
				p.style.fontWeight = "bold";
				p.style.marginTop = showSubdiv2Sub2.offsetHeight / 2 + 15 + "px";
				showSubdiv1.appendChild(p);
			}else{
				var p1 = document.createElement("p");
				p1.innerText = "请填写数量";
				p1.style.textAlign = "right";
				p1.style.fontSize = 1.3 + "rem";
				p1.style.fontWeight = "bold";
				p1.style.marginTop = showSubdiv2Sub2.offsetHeight / 2 + 15 + "px";
				showSubdiv1.appendChild(p1);
				var p2 = document.createElement("p");
				p2.innerText = "阻鼾器 ×";
				p2.style.textAlign = "center";
				p2.style.fontSize = 1.3 + "rem";
				p2.style.fontWeight = "bold";
				p2.style.marginTop = showSubdiv2Sub2.offsetHeight / 2 - 10 + "px";
				showSubdiv2Sub2.appendChild(p2);
				zuhanqiShuliang = document.createElement("input");
				zuhanqiShuliang.style.width = 60 + "px";
				zuhanqiShuliang.style.height = 30 + "px";
				zuhanqiShuliang.style.textAlign = "center";
				zuhanqiShuliang.style.fontSize = 1.3 + "rem";
				zuhanqiShuliang.style.marginTop = showSubdiv2Sub3.offsetHeight / 2 - 14 + "px";
				zuhanqiShuliang.onkeyup = function(){
					this.value = this.value.replace(/\D/g,'');//如果输入了数字以外的字符,自动删除
				}
				zuhanqiShuliang.onblur = function(){
					this.value = this.value.replace(/\D/g,'');//如果输入了数字以外的字符,自动删除
				}
				showSubdiv2Sub3.appendChild(zuhanqiShuliang);
			}
			show.id = "substitute";
			showSubdiv1.appendChild(substituteOfCanvas);
		}else if (this.id == "huodong_sandi_zhijia_da_guge" || this.id == "huodong_sandi_zhijia_xiao_guge" || this.id == "huodong_sandi_zhijia_da_chuntai" || this.id == "huodong_sandi_zhijia_xiao_chuntai" || this.id == "huodong_zhijia_da_bego" || this.id == "huodong_zhijia_da_nuobiling" || this.id == "huodong_zhijia_da_weitaling_2000" || this.id == "huodong_zhijia_xiao_bego" || this.id == "huodong_zhijia_xiao_nuobiling" || this.id == "huodong_zhijia_xiao_weitaling_2000" || this.id == "zhengji_yinxingbaochiqi_bankou" || this.id == "zhengji_wanzhibaochiqi_bankou" || this.id == "zhengji_yemoyatao" || this.id == "zhengji_jiaozhengqi_bankou" || this.id == "zhengji_luoxuankuogongqi") {
			while (showSubdiv1.hasChildNodes()){
				showSubdiv1.removeChild(showSubdiv1.lastChild);
			}
			while (showSubdiv2Sub2.hasChildNodes()){
				showSubdiv2Sub2.removeChild(showSubdiv2Sub2.lastChild);
			}
			while(showSubdiv2Sub3.hasChildNodes()){
				showSubdiv2Sub3.removeChild(showSubdiv2Sub3.lastChild);
			}
			generateCanvas("bankou");
			show.id = "bankou";
			showSubdiv1.appendChild(canvas);
		}else if (this.id == "huodong_paiya_kaifeng_zhusuzhuya" || this.id == "huodong_paiya_kaijing_zhusuzhuya" || this.id == "huodong_paiya_shofu_zhusuzhuya" || this.id == "huodong_paiya_changzhengzhong_putong_zhusuzhuya" || this.id == "huodong_paiya_changzhengzhong_chaoying_zhusuzhuya") {
			while (showSubdiv1.hasChildNodes()){
				showSubdiv1.removeChild(showSubdiv1.lastChild);
			}
			while (showSubdiv2Sub2.hasChildNodes()){
				showSubdiv2Sub2.removeChild(showSubdiv2Sub2.lastChild);
			}
			while(showSubdiv2Sub3.hasChildNodes()){
				showSubdiv2Sub3.removeChild(showSubdiv2Sub3.lastChild);
			}
			generateCanvas("quankou");
			addContentsToSub3("paiya");
			show.id = "quankou";
			showSubdiv1.appendChild(canvas);
		}else{
			while (showSubdiv1.hasChildNodes()){
				showSubdiv1.removeChild(showSubdiv1.lastChild);
			}
			while (showSubdiv2Sub2.hasChildNodes()){
				showSubdiv2Sub2.removeChild(showSubdiv2Sub2.lastChild);
			}
			while(showSubdiv2Sub3.hasChildNodes()){
				showSubdiv2Sub3.removeChild(showSubdiv2Sub3.lastChild);
			}
			generateCanvas("single");
			addContentsToSub3("bise");
			show.id = "single";
			showSubdiv1.appendChild(canvas);
		}
		show.style.zIndex = 1;
		show.style.boxShadow = "0 0 10px #333";
		var productName = {"productName":this.id};
		productDetails.push(productName);
		console.log(productDetails);
	}
}

//canvas替代div
var substituteOfCanvas = document.createElement("div");
substituteOfCanvas.style.width = showSubdiv1.offsetWidth + "px";
substituteOfCanvas.style.height = showSubdiv1.offsetHeight + "px";

//生成初始canvas
function generateCanvas(drawType) {
	// canvas
	canvas = document.createElement("canvas");
	context = canvas.getContext("2d");
	canvas.style.width = showSubdiv1.offsetWidth + "px";
	canvas.style.height = showSubdiv1.offsetHeight + "px";
	canvas.width = showSubdiv1.offsetWidth;
	canvas.height = showSubdiv1.offsetHeight;
	if (canvas.getContext) {
		//首先清空画布
		context.clearRect(0, 0, canvas.width, canvas.height);
		// 横
		function getBeveling(x,y){  
			return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
		}  
	  
		function drawDashLine(context,x1,y1,x2,y2,dashLen){
		dashLen = dashLen === undefined ? 5 : dashLen;
	    	//得到斜边的总长度  
	   	var beveling = getBeveling(x2-x1,y2-y1);  
	    	//计算有多少个线段  
	    var num = Math.floor(beveling/dashLen);  
	      
		for(var i = 0 ; i < num; i++) {
	       	context[i%2 == 0 ? "moveTo" : "lineTo"](x1+(x2-x1)/num*i,y1+(y2-y1)/num*i);  
	    }  
	    context.stroke();  
		}; 
		drawDashLine(context,80,220,320,220,4); 
		// 竖
		drawDashLine(context,200,60,200,390,4);
		//绘文字
		function drawTextIndicator(x,y,text,fontSize){
			context.fillStyle = "black";
			context.font = "normal " + fontSize + "px arial";
			context.fillText(text, x - 6, y + 4);
		}

		switch (drawType) {
			case "single":
				drawTextIndicator(15, 30, "连冠", 16);
				context.fillStyle = "lightgray";
				context.fillRect(45, 20, 16, 16);
				drawTextIndicator(15, 50, "单冠", 16);
				context.fillStyle = "lightgray";
				context.fillRect(45, 40, 16, 16);
				break;
			case "bankou":
				drawTextIndicator(15, 30, "上半口", 16);
				context.fillStyle = "lightgray";
				context.fillRect(60, 20, 16, 16);
				drawTextIndicator(15, 50, "下半口", 16);
				context.fillStyle = "lightgray";
				context.fillRect(60, 40, 16, 16);
				break;
			case "quankou":
				drawTextIndicator(15, 30, "请选择排牙位：", 16);
				break;
			default:
				break;
		}
		
		drawToothIndicator(context, 100, 200, 10, 0, "lightgray");
		drawTextIndicator(78, 200, "18", 11);
		drawToothIndicator(context, 300, 200, 10, 0, "lightgray");
		drawTextIndicator(322, 200, "28");
		drawToothIndicator(context, 300, 240, 10 ,0, "lightgray");
		drawTextIndicator(322, 240, "38");
		drawToothIndicator(context, 100, 240, 10, 0, "lightgray");
		drawTextIndicator(78, 240, "48");
		
		drawToothIndicator(context, 103, 177, 10, 0, "lightgray");
		drawTextIndicator(81, 174, "17");
		drawToothIndicator(context, 297, 177, 10, 0, "lightgray");
		drawTextIndicator(319, 174, "27");
		drawToothIndicator(context, 297, 263, 10, 0, "lightgray");
		drawTextIndicator(319, 266, "37");
		drawToothIndicator(context, 103, 263, 10, 0, "lightgray");
		drawTextIndicator(81, 266, "47");
		
		drawToothIndicator(context, 108, 155, 10, 0, "lightgray");
		drawTextIndicator(86, 152, "16");
		drawToothIndicator(context, 292, 155, 10, 0, "lightgray");
		drawTextIndicator(314, 152, "26");
		drawToothIndicator(context, 292, 285, 10, 0, "lightgray");
		drawTextIndicator(314, 288, "36");
		drawToothIndicator(context, 108, 285, 10, 0, "lightgray");
		drawTextIndicator(86, 288, "46");

		drawToothIndicator(context, 115, 134, 10, 0, "lightgray");
		drawTextIndicator(95, 130, "15");
		drawToothIndicator(context, 285, 134, 10, 0, "lightgray");
		drawTextIndicator(305, 130, "25");
		drawToothIndicator(context, 285, 306, 10, 0, "lightgray");
		drawTextIndicator(305, 310, "35");
		drawToothIndicator(context, 115, 306, 10, 0, "lightgray");
		drawTextIndicator(95, 310, "45");

		drawToothIndicator(context, 125, 114, 10, 0, "lightgray");
		drawTextIndicator(105, 109, "14");
		drawToothIndicator(context, 275, 114, 10, 0, "lightgray");
		drawTextIndicator(295, 109, "24");
		drawToothIndicator(context, 275, 326, 10, 0, "lightgray");
		drawTextIndicator(295, 331, "34");
		drawToothIndicator(context, 125, 326, 10, 0, "lightgray");
		drawTextIndicator(105, 331, "44");

		drawToothIndicator(context, 140, 98, 10, 0, "transparent");
		drawTextIndicator(122, 87, "13");
		drawToothIndicator(context, 260, 98, 10, 0, "transparent");
		drawTextIndicator(278, 87, "23");
		drawToothIndicator(context, 260, 342, 10, 0, "transparent");
		drawTextIndicator(278, 353, "33");
		drawToothIndicator(context, 140, 342, 10, 0, "transparent");
		drawTextIndicator(122, 353, "43");

		drawToothIndicator(context, 160, 85, 10, 0, "transparent");
		drawTextIndicator(149, 71, "12");
		drawToothIndicator(context, 240, 85, 10, 0, "transparent");
		drawTextIndicator(251, 71, "22");
		drawToothIndicator(context, 240, 355, 10, 0, "transparent");
		drawTextIndicator(251, 369, "32");
		drawToothIndicator(context, 160, 355, 10, 0, "transparent");
		drawTextIndicator(149, 369, "42");

		drawToothIndicator(context, 185, 77, 10, 0, "transparent");
		drawTextIndicator(178, 62, "11");
		drawToothIndicator(context, 215, 77, 10, 0, "transparent");
		drawTextIndicator(222, 62, "21");
		drawToothIndicator(context, 215, 363, 10, 0, "transparent");
		drawTextIndicator(222, 378, "31");
		drawToothIndicator(context, 185, 363, 10, 0, "transparent");
		drawTextIndicator(178, 378, "41");
		
		var triangle1 = drawTriangle(context, 140, 108, 130, 92, 150, 92);
		var triangle2 = drawTriangle(context, 260, 108, 250, 92, 270, 92);
		var triangle3 = drawTriangle(context, 260, 332, 250, 348, 270, 348);
		var triangle4 = drawTriangle(context, 140, 332, 130, 348, 150, 348);
	
		var ellipse1 = drawEllipse(context, 160, 85, 11, 7);
		var ellipse2 = drawEllipse(context, 240, 85, 11, 7);
		var ellipse3 = drawEllipse(context, 240, 355, 11, 7);
		var ellipse4 = drawEllipse(context, 160, 355, 11, 7);

		var ellipse5 = drawEllipse(context, 185, 77, 11, 7);
		var ellipse6 = drawEllipse(context, 215, 77, 11, 7);
		var ellipse7 = drawEllipse(context, 215, 363, 11, 7);
		var ellipse8 = drawEllipse(context, 185, 363, 11, 7);
		canvas.addEventListener('click', function (e){
			clickPoint = getEventPosition(e);
			reDraw(clickPoint, context, drawType);
		}, false);
	}
	return canvas;
}

function getEventPosition(ev){
	var x,y;
	var canvasRect = canvas.getBoundingClientRect();
		x = ev.clientX - canvasRect.left * (canvas.width/canvasRect.width);
		y = ev.clientY - canvasRect.top * (canvas.height/canvasRect.height);
	return {x:x, y:y};
}
//单冠或连冠的数组
typeArray1 = [
	{x:45, y:20, width:16, height:16, id:"lianguan"},
	{x:45, y:40, width:16, height:16, id:"danguan"}
];
//单冠或连冠牙位数组
toothIndicatorArray1 = [
	{x:100, y:200, radius:10, id:18},
	{x:300, y:200, radius:10, id:28},
	{x:300, y:240, radius:10, id:38},
	{x:100, y:240, radius:10, id:48},
	{x:103, y:177, radius:10, id:17},
	{x:297, y:177, radius:10, id:27},
	{x:297, y:263, radius:10, id:37},
	{x:103, y:263, radius:10, id:47},
	{x:108, y:155, radius:10, id:16},
	{x:292, y:155, radius:10, id:26},
	{x:292, y:285, radius:10, id:36},
	{x:108, y:285, radius:10, id:46},
	{x:115, y:134, radius:10, id:15},
	{x:285, y:134, radius:10, id:25},
	{x:285, y:306, radius:10, id:35},
	{x:115, y:306, radius:10, id:45},
	{x:125, y:114, radius:10, id:14},
	{x:275, y:114, radius:10, id:24},
	{x:275, y:326, radius:10, id:34},
	{x:125, y:326, radius:10, id:44},

	{x:140, y:98, radius:10, id:13},
	{x:260, y:98, radius:10, id:23},
	{x:260, y:342, radius:10, id:33},
	{x:140, y:342, radius:10, id:43},

	{x:160, y:85, radius:10, id:12},
	{x:240, y:85, radius:10, id:22},
	{x:240, y:355, radius:10, id:32},
	{x:160, y:355, radius:10, id:42},
	{x:185, y:77, radius:10, id:11},
	{x:215, y:77, radius:10, id:21},
	{x:215, y:363, radius:10, id:31},
	{x:185, y:363, radius:10, id:41}
];
for (var i = 0; i < toothIndicatorArray1.length; i ++) {
	toothIndicatorArray1[i].selected = false;
}
//上半口或下半口数组
typeArray2 = [
	{x:60, y:20, width:16, height:16, id:"shangbankou"},
	{x:60, y:40, width:16, height:16, id:"xiabankou"}
];
//上半口或下半口牙位数组
toothIndicatorArray2 = [
	{x:100, y:200, radius:10, id:18},
	{x:300, y:200, radius:10, id:28},
	{x:103, y:177, radius:10, id:17},
	{x:297, y:177, radius:10, id:27},
	{x:108, y:155, radius:10, id:16},
	{x:292, y:155, radius:10, id:26},
	{x:115, y:134, radius:10, id:15},
	{x:285, y:134, radius:10, id:25},
	{x:125, y:114, radius:10, id:14},
	{x:275, y:114, radius:10, id:24},
	{x:140, y:98, radius:10, id:13},
	{x:260, y:98, radius:10, id:23},
	{x:160, y:85, radius:10, id:12},
	{x:240, y:85, radius:10, id:22},
	{x:185, y:77, radius:10, id:11},
	{x:215, y:77, radius:10, id:21},

	{x:300, y:240, radius:10, id:38},
	{x:100, y:240, radius:10, id:48},
	{x:297, y:263, radius:10, id:37},
	{x:103, y:263, radius:10, id:47},
	{x:292, y:285, radius:10, id:36},
	{x:108, y:285, radius:10, id:46},
	{x:285, y:306, radius:10, id:35},
	{x:115, y:306, radius:10, id:45},
	{x:275, y:326, radius:10, id:34},
	{x:125, y:326, radius:10, id:44},
	{x:260, y:342, radius:10, id:33},
	{x:140, y:342, radius:10, id:43},
	{x:240, y:355, radius:10, id:32},
	{x:160, y:355, radius:10, id:42},
	{x:215, y:363, radius:10, id:31},
	{x:185, y:363, radius:10, id:41}
];

//重绘
var type1Selected = null;
var shangbankouSelected = false;
var xiabankouSelected = false;
function reDraw(clickPoint, context, drawType){
	switch (drawType) {
		case "single":
			function drawSingle () {
				for (var i = 0; i < typeArray1.length; i ++) {
					if (clickPoint && clickPoint.x >= typeArray1[i].x && clickPoint.y >= typeArray1[i].y && clickPoint.x <= typeArray1[i].x + typeArray1[i].width && clickPoint.y <= typeArray1[i].y + typeArray1[i].height){
						if (i == 0) {
							context.fillStyle = "brown";
							context.fillRect(typeArray1[i].x, typeArray1[i].y, typeArray1[i].width, typeArray1[i].height);
							context.fillStyle = "lightgray";
							context.fillRect(typeArray1[i + 1].x, typeArray1[i + 1].y, typeArray1[i + 1].width, typeArray1[i + 1].height);
							type1Selected = typeArray1[i].id;
						}else{
							context.fillStyle = "blue";
							context.fillRect(typeArray1[i].x, typeArray1[i].y, typeArray1[i].width, typeArray1[i].height);
							context.fillStyle = "lightgray";
							context.fillRect(typeArray1[i - 1].x, typeArray1[i - 1].y, typeArray1[i - 1].width, typeArray1[i - 1].height);
							type1Selected = typeArray1[i].id;
						}
					}
				}
				for (var i = 0; i < toothIndicatorArray1.length; i ++) {
					if (i < 20) {
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (type1Selected == "lianguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "brown";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "lianguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else if (type1Selected == "danguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "blue";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "danguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "bise");
							}
							context.beginPath();
							context.arc(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y, toothIndicatorArray1[i].radius, 0, Math.PI*2, true);
							context.fill();
							break;
						}
					}else if(i >= 20 && i < 22) {
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (type1Selected == "lianguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "brown";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "lianguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else if (type1Selected == "danguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "blue";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "danguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "bise");
							}
							context.beginPath();
							context.moveTo(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y + 10);
							context.lineTo(toothIndicatorArray1[i].x - 10, toothIndicatorArray1[i].y - 6);
							context.lineTo(toothIndicatorArray1[i].x + 10, toothIndicatorArray1[i].y - 6);
							context.closePath();
							context.fill();
							break;
						}
					}else if (i >= 22 && i < 24){
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (type1Selected == "lianguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "brown";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "lianguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else if (type1Selected == "danguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "blue";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "danguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "bise");
							}
							context.beginPath();
							context.moveTo(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y - 10);
							context.lineTo(toothIndicatorArray1[i].x + 10, toothIndicatorArray1[i].y + 6);
							context.lineTo(toothIndicatorArray1[i].x - 10, toothIndicatorArray1[i].y + 6);
							context.closePath();
							context.fill();
							break;
						}
					}else{
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (type1Selected == "lianguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "brown";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "lianguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else if (type1Selected == "danguan" && toothIndicatorArray1[i].selected == false){
								context.fillStyle = "blue";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								tooth.singleOrContinual = "danguan";
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "bise");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "bise");
							}
							context.beginPath();
							var step = 11 > 7 ? 1 / 11 : 1 / 7;
							context.moveTo(toothIndicatorArray1[i].x + 11, toothIndicatorArray1[i].y);
							for (var j = 0; j < 2 * Math.PI; j += step){
								context.lineTo(toothIndicatorArray1[i].x + 11 * Math.cos(j), toothIndicatorArray1[i].y + 7 * Math.sin(j));
							}
							context.closePath();
							context.fill();
							break;
						}
					}
				}
				console.log(productDetails);
			}
			drawSingle();
			break;
		case "bankou":
			function drawBankou () {
				for (var i = 0; i < typeArray2.length; i ++) {
					if (clickPoint && clickPoint.x >= typeArray2[i].x && clickPoint.y >= typeArray2[i].y && clickPoint.x <= typeArray2[i].x + typeArray2[i].width && clickPoint.y <= typeArray2[i].y + typeArray2[i].height){
						if (i == 0) {
							if (shangbankouSelected == false) {
								context.fillStyle = "red";
								context.fillRect(typeArray2[i].x, typeArray2[i].y, typeArray2[i].width, typeArray2[i].height);
								drawShangbankou("red");
								shangbankouSelected = true;
								console.log(productDetails);
							}else{
								context.fillStyle = "lightgray";
								context.fillRect(typeArray2[i].x, typeArray2[i].y, typeArray2[i].width, typeArray2[i].height);
								drawShangbankou("lightgray");
								shangbankouSelected = false;
								console.log(productDetails);
							}
						}else{
							if (xiabankouSelected == false) {
								context.fillStyle = "red";
								context.fillRect(typeArray2[i].x, typeArray2[i].y, typeArray2[i].width, typeArray2[i].height);
								drawXiabankou("red");
								xiabankouSelected = true;
								console.log(productDetails);
							}else{
								context.fillStyle = "lightgray";
								context.fillRect(typeArray2[i].x, typeArray2[i].y, typeArray2[i].width, typeArray2[i].height);
								drawXiabankou("lightgray");
								xiabankouSelected = false;
								console.log(productDetails);
							}
						}
					}
				}
				if (shangbankouSelected && !xiabankouSelected) {
					bankouResult = "shangbankou";
				}else if (!shangbankouSelected && xiabankouSelected) {
					bankouResult = "xiabankou";
				}else if (shangbankouSelected && xiabankouSelected) {
					bankouResult = "quankou";
				}
			}
			drawBankou();
			break;
		case "quankou":
			function drawQuankou () {
				for (var i = 0; i < toothIndicatorArray1.length; i ++) {
					if (i < 20) {
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (toothIndicatorArray1[i].selected == false){
								context.fillStyle = "rgb(250, 115, 0)";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "paiya");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "paiya");
							}
							context.beginPath();
							context.arc(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y, toothIndicatorArray1[i].radius, 0, Math.PI*2, true);
							context.fill();
							break;
						}
					}else if(i >= 20 && i < 22) {
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (toothIndicatorArray1[i].selected == false){
								context.fillStyle = "rgb(250, 115, 0)";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "paiya");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "paiya");
							}
							context.beginPath();
							context.moveTo(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y + 10);
							context.lineTo(toothIndicatorArray1[i].x - 10, toothIndicatorArray1[i].y - 6);
							context.lineTo(toothIndicatorArray1[i].x + 10, toothIndicatorArray1[i].y - 6);
							context.closePath();
							context.fill();
							break;
						}
					}else if (i >= 22 && i < 24){
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (toothIndicatorArray1[i].selected == false){
								context.fillStyle = "rgb(250, 115, 0)";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "paiya");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "paiya");
							}
							context.beginPath();
							context.moveTo(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y - 10);
							context.lineTo(toothIndicatorArray1[i].x + 10, toothIndicatorArray1[i].y + 6);
							context.lineTo(toothIndicatorArray1[i].x - 10, toothIndicatorArray1[i].y + 6);
							context.closePath();
							context.fill();
							break;
						}
					}else{
						if (clickPoint && Math.sqrt(Math.pow(clickPoint.x - toothIndicatorArray1[i].x, 2) + Math.pow(clickPoint.y - toothIndicatorArray1[i].y, 2)) <= toothIndicatorArray1[i].radius){
							if (toothIndicatorArray1[i].selected == false){
								context.fillStyle = "rgb(250, 115, 0)";
								toothIndicatorArray1[i].selected = true;
								var tooth = new Object();
								tooth.toothPosition = toothIndicatorArray1[i].id;
								productDetails.push(tooth);
								createLi(toothIndicatorArray1[i].id, "paiya");
							}else{
								context.fillStyle = "lightgray";
								toothIndicatorArray1[i].selected = false;
								for (var j = 0; j < productDetails.length; j ++) {
									if (productDetails[j].toothPosition && productDetails[j].toothPosition == toothIndicatorArray1[i].id){
										productDetails.splice(j, 1);
									}
								}
								removeLi(toothIndicatorArray1[i].id, "paiya");
							}
							context.beginPath();
							var step = 11 > 7 ? 1 / 11 : 1 / 7;
							context.moveTo(toothIndicatorArray1[i].x + 11, toothIndicatorArray1[i].y);
							for (var j = 0; j < 2 * Math.PI; j += step){
								context.lineTo(toothIndicatorArray1[i].x + 11 * Math.cos(j), toothIndicatorArray1[i].y + 7 * Math.sin(j));
							}
							context.closePath();
							context.fill();
							break;
						}
					}
				}
				console.log(productDetails);
			}
			drawQuankou();
			break;
	}
}
function drawShangbankou(color) {
	context.fillStyle = color;
	for (var i = 0; i < toothIndicatorArray2.length; i ++) {
		if (i < 10) {
			context.beginPath();
			context.arc(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y, toothIndicatorArray2[i].radius, 0, Math.PI*2, true);
			context.fill();
		}else if (i >= 10 && i < 12) {
			context.beginPath();
			context.moveTo(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y + 10);
			context.lineTo(toothIndicatorArray2[i].x - 10, toothIndicatorArray2[i].y - 6);
			context.lineTo(toothIndicatorArray2[i].x + 10, toothIndicatorArray2[i].y - 6);
			context.closePath();
			context.fill();
		}else if (i >= 12 && i < 16) {
			context.beginPath();
			var step = 11 > 7 ? 1 / 11 : 1 / 7;
			context.moveTo(toothIndicatorArray2[i].x + 11, toothIndicatorArray2[i].y);
			for (var j = 0; j < 2 * Math.PI; j += step){
				context.lineTo(toothIndicatorArray2[i].x + 11 * Math.cos(j), toothIndicatorArray2[i].y + 7 * Math.sin(j));
			}
			context.closePath();
			context.fill();
		}
	}
}
function drawXiabankou(color) {
	context.fillStyle = color;
	for (var i = 0; i < toothIndicatorArray2.length; i ++) {
		if (i >= 16 && i < 26) {
			context.beginPath();
			context.arc(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y, toothIndicatorArray2[i].radius, 0, Math.PI*2, true);
			context.fill();
		}else if (i >= 26 && i < 28) {
			context.beginPath();
			context.moveTo(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y - 10);
			context.lineTo(toothIndicatorArray2[i].x + 10, toothIndicatorArray2[i].y + 6);
			context.lineTo(toothIndicatorArray2[i].x - 10, toothIndicatorArray2[i].y + 6);
			context.closePath();
			context.fill();
		}else if (i >= 28 && i < 33) {
			context.beginPath();
			var step = 11 > 7 ? 1 / 11 : 1 / 7;
			context.moveTo(toothIndicatorArray2[i].x + 11, toothIndicatorArray2[i].y);
			for (var j = 0; j < 2 * Math.PI; j += step){
				context.lineTo(toothIndicatorArray2[i].x + 11 * Math.cos(j), toothIndicatorArray2[i].y + 7 * Math.sin(j));
			}
			context.closePath();
			context.fill();
		}
	}
}
//定义画圆形(牙位标记),三角和椭圆的方程
function drawToothIndicator(context,x,y,r,sAngle,fillStyle){
	context.fillStyle = fillStyle;
	context.beginPath();
	context.arc(x,y,r,sAngle,Math.PI*2,true);
	context.fill();
	return context;//如果不return,那么下面的变量是undefined!不过在本例中return或不return均可,因为后面不会使用变量,只是执行画图指令而已.
}
function drawTriangle(context, a, b, c, d, e, f){
	context.fillStyle = "lightgray";
	context.beginPath();
	context.moveTo(a, b);
	context.lineTo(c, d);
	context.lineTo(e, f);
	context.closePath();
	context.fill();
}
function drawEllipse(context,x,y,a,b){
	context.fillStyle = "lightgray";
	context.beginPath();
	var step = a > b ? 1 / a : 1 / b;
	context.moveTo(x + a, y);
	for (var i = 0; i < 2 * Math.PI; i += step){
		context.lineTo(x + a * Math.cos(i), y + b * Math.sin(i));
	}
	context.closePath();
	context.fill();
}
//添加比色li
function createLi(idName, type){
	switch (type) {
		case "bise":
			var biseLi = document.createElement("li");
			biseLi.id = "biseLi" + idName;
			biseLi.className = "biseLi";
			biseUl.appendChild(biseLi);
			var input = document.createElement("input");
			input.id = "biseLi" + idName;
			var nameOfPaiya = document.createElement("a");
			nameOfPaiya.innerText = "牙" + idName;
			input.style.width = 125 + "px";
			input.style.borderRadius = 5 + "px";
			input.style.backgroundColor = "lightgray";
			input.placeholder = "比色信息(选填)";
			biseLi.appendChild(nameOfPaiya);
			biseLi.appendChild(input);
			break;
		case "paiya":
			var paiyaLi = document.createElement("li");
			paiyaLi.id = "paiyaLi" + idName;
			paiyaLi.className = "paiyaLi";
			paiyaUl.appendChild(paiyaLi);
			var input = document.createElement("input");
			input.id = "paiyaLi" + idName;
			var nameOfPaiya = document.createElement("a");
			nameOfPaiya.innerText = "牙" + idName;
			input.style.width = 125 + "px";
			input.style.borderRadius = 5 + "px";
			input.style.backgroundColor = "lightgray";
			input.placeholder = "排牙信息(选填)";
			paiyaLi.appendChild(nameOfPaiya);
			paiyaLi.appendChild(input);
			break;
	}
}
//移除比色li
function removeLi(idName, type){
	switch (type) {
		case "bise":
			var tempLi = document.getElementsByTagName("li");
			for (var i = 0; i < tempLi.length; i ++) {
				if (tempLi[i].id == "biseLi" + idName){
					biseUl.removeChild(tempLi[i]);
				}
			}
			break;
		case "paiya":
			var tempLi = document.getElementsByTagName("li");
			for (var i = 0; i < tempLi.length; i ++) {
				if (tempLi[i].id == "paiyaLi" + idName){
					paiyaUl.removeChild(tempLi[i]);
				}
			}
			break;
	}
}

//生成牙齿信息
function generateTooth(toothPosition, singleOrContinual, color, paiya, paiyaType){
	var tooth = new Object();
	tooth.toothPosition = toothPosition;
	tooth.singleOrContinual = singleOrContinual;
	tooth.color = color;
	tooth.paiya = paiya;
	tooth.paiyaType = paiyaType;
}
//关闭canvas按钮
var closeShowBtn = document.getElementById("close_show_btn");
closeShowBtn.onclick = function () {
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
//清空canvas按钮
var resetShowBtn = document.getElementById("reset_btn");
resetShowBtn.onclick = function(){
	if (show.id == "single") {
    	resetSubsOfShow("partial", "single");
    }else if (show.id == "bankou") {
    	resetSubsOfShow("partial", "bankou");
    }else if (show.id == "quankou"){
    	resetSubsOfShow("partial", "quankou");
    }else{
    	resetSubsOfShow("partial");
    }
};
//清除canvas的函数
function resetSubsOfShow(para, drawType) {
	switch(para){
		case "all":
			productDetails.splice(0, productDetails.length);
			break;
		case "partial":
			productDetails.splice(1, productDetails.length);
			break;
	}
	switch (drawType) {
		case "single":
			type1Selected = null;
			//清空医生说明
			yishengshuoming.value = "";
			//单冠或连冠选择块归位
			context.fillStyle = "lightgray";
			context.fillRect(45, 20, 16, 16);
			context.fillRect(45, 40, 16, 16);
			//清除showSubdiv2Sub3所有子元素
			while(showSubdiv2Sub3.hasChildNodes()) {  
		        showSubdiv2Sub3.removeChild(showSubdiv2Sub3.firstChild);  
		    }
			for (var i = 0; i < toothIndicatorArray1.length; i ++) {
				if (i < 20) {
					toothIndicatorArray1[i].selected = false;
					context.beginPath();
					context.arc(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y, toothIndicatorArray1[i].radius, 0, Math.PI*2, true);
					context.fill();
				}else if(i >= 20 && i < 22) {
					toothIndicatorArray1[i].selected = false;
					context.beginPath();
					context.moveTo(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y + 10);
					context.lineTo(toothIndicatorArray1[i].x - 10, toothIndicatorArray1[i].y - 6);
					context.lineTo(toothIndicatorArray1[i].x + 10, toothIndicatorArray1[i].y - 6);
					context.closePath();
					context.fill();
				}else if (i >= 22 && i < 24){
					toothIndicatorArray1[i].selected = false;
					context.beginPath();
					context.moveTo(toothIndicatorArray1[i].x, toothIndicatorArray1[i].y - 10);
					context.lineTo(toothIndicatorArray1[i].x + 10, toothIndicatorArray1[i].y + 6);
					context.lineTo(toothIndicatorArray1[i].x - 10, toothIndicatorArray1[i].y + 6);
					context.closePath();
					context.fill();
				}else{
					toothIndicatorArray1[i].selected = false;
					context.beginPath();
					var step = 11 > 7 ? 1 / 11 : 1 / 7;
					context.moveTo(toothIndicatorArray1[i].x + 11, toothIndicatorArray1[i].y);
					for (var j = 0; j < 2 * Math.PI; j += step){
						context.lineTo(toothIndicatorArray1[i].x + 11 * Math.cos(j), toothIndicatorArray1[i].y + 7 * Math.sin(j));
					}
					context.closePath();
					context.fill();
				}
			}
			addContentsToSub3("bise");
			console.log(productDetails);
			break;
		case "bankou":
			shangbankouSelected = false;
			xiabankouSelected = false;
			//清空医生说明
			yishengshuoming.value = "";
			//清除showSubdiv2Sub3所有子元素
			while(showSubdiv2Sub3.hasChildNodes()) {  
		        showSubdiv2Sub3.removeChild(showSubdiv2Sub3.firstChild);  
		    }
			//填充颜色
			context.fillStyle = "lightgray";
			context.fillRect(60, 20, 16, 16);
			context.fillRect(60, 40, 16, 16);
			for (var i = 0; i < toothIndicatorArray1.length; i ++) {
				if (i < 10 || (i >= 16 && i < 26)) {
					context.beginPath();
					context.arc(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y, toothIndicatorArray2[i].radius, 0, Math.PI*2, true);
					context.fill();
				}else if (i >= 10 && i < 12) {
					context.beginPath();
					context.moveTo(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y + 10);
					context.lineTo(toothIndicatorArray2[i].x - 10, toothIndicatorArray2[i].y - 6);
					context.lineTo(toothIndicatorArray2[i].x + 10, toothIndicatorArray2[i].y - 6);
					context.closePath();
					context.fill();
				}else if (i >= 26 && i < 28) {
					context.beginPath();
					context.moveTo(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y - 10);
					context.lineTo(toothIndicatorArray2[i].x + 10, toothIndicatorArray2[i].y + 6);
					context.lineTo(toothIndicatorArray2[i].x - 10, toothIndicatorArray2[i].y + 6);
					context.closePath();
					context.fill();
				}else if (i >= 12 && i < 16 || (i >= 28 && i < 33)) {
					context.beginPath();
					var step = 11 > 7 ? 1 / 11 : 1 / 7;
					context.moveTo(toothIndicatorArray2[i].x + 11, toothIndicatorArray2[i].y);
					for (var j = 0; j < 2 * Math.PI; j += step){
						context.lineTo(toothIndicatorArray2[i].x + 11 * Math.cos(j), toothIndicatorArray2[i].y + 7 * Math.sin(j));
					}
					context.closePath();
					context.fill();
				}
			}
			console.log(productDetails);
			break;
		case "quankou":
			//清空医生说明
			yishengshuoming.value = "";
			//填充颜色
			context.fillStyle = "lightgray";
			//清除showSubdiv2Sub3所有子元素
			while(showSubdiv2Sub3.hasChildNodes()) {  
		        showSubdiv2Sub3.removeChild(showSubdiv2Sub3.firstChild);  
		    }
			for (var i = 0; i < toothIndicatorArray1.length; i ++) {
				toothIndicatorArray1[i].selected = false;
				if (i < 10 || (i >= 16 && i < 26)) {
					context.beginPath();
					context.arc(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y, toothIndicatorArray2[i].radius, 0, Math.PI*2, true);
					context.fill();
				}else if (i >= 10 && i < 12) {
					context.beginPath();
					context.moveTo(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y + 10);
					context.lineTo(toothIndicatorArray2[i].x - 10, toothIndicatorArray2[i].y - 6);
					context.lineTo(toothIndicatorArray2[i].x + 10, toothIndicatorArray2[i].y - 6);
					context.closePath();
					context.fill();
				}else if (i >= 26 && i < 28) {
					context.beginPath();
					context.moveTo(toothIndicatorArray2[i].x, toothIndicatorArray2[i].y - 10);
					context.lineTo(toothIndicatorArray2[i].x + 10, toothIndicatorArray2[i].y + 6);
					context.lineTo(toothIndicatorArray2[i].x - 10, toothIndicatorArray2[i].y + 6);
					context.closePath();
					context.fill();
				}else if (i >= 12 && i < 16 || (i >= 28 && i < 33)) {
					context.beginPath();
					var step = 11 > 7 ? 1 / 11 : 1 / 7;
					context.moveTo(toothIndicatorArray2[i].x + 11, toothIndicatorArray2[i].y);
					for (var j = 0; j < 2 * Math.PI; j += step){
						context.lineTo(toothIndicatorArray2[i].x + 11 * Math.cos(j), toothIndicatorArray2[i].y + 7 * Math.sin(j));
					}
					context.closePath();
					context.fill();
				}
			}
			addContentsToSub3("paiya");
			console.log(productDetails);
			break;
		default:
			break;
	}
}