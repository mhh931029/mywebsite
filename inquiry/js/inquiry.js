includeOtherJSFile("../helper/checkdatevalidity.js");
$.ajax({
	type:"POST",
	url:"http://maierlefu.applinzi.com/mywebsite/php/select_order_db.php",
	dataType: "json",
	data:{request:"all", ordernumber:""},
	success:function (data){
		var count = [0];
		for (var i = 0; i < data.length - 1; i++) {
			if (data[i].orderNumber.substring(0,20) != data[i+1].orderNumber.substring(0,20)) {
				count.unshift(i + 1);
			}
		}
		var container = document.getElementById('container');


		function createDiv(count){
			for (var i = 0; i < count.length; i++){
				var boxDiv = document.createElement('div');
				var row = document.createElement('div');
				container.appendChild(row);
				row.className = 'row';
				row.appendChild(boxDiv);

				boxDiv.className = "getInto";
				boxDiv.id = "cdiv";
				boxDiv.style.width = "85%";
				boxDiv.style.height = '45px';
				boxDiv.style.margin = "0 auto";
				boxDiv.style.cursor='pointer';
				boxDiv.style.marginTop = 10 + 'px';
				boxDiv.style.borderRadius = "5px";
				boxDiv.style.border = "1px solid #4B0082";
				boxDiv.orderNumber = data[count[i]].orderNumber.substring(0,20);
				$(".getInto").mouseover(function (){
					$(this).css("box-shadow" ,'0px 0px 20px 5px white inset');
					$(this).css("border" ,'1px solid transparent');
					$(this).css("transition", 'all 0.2s');
				})
				$(".getInto").mouseout(function (){
					$(this).css("box-shadow" ,'none');
					$(this).css("border" ,'1px solid #4B0082');
					$(this).css("transition", 'all 0.2s');
				})
				boxDiv.onclick = function (){
					var URL = "http://maierlefu.applinzi.com/mywebsite/inquiry/inquiry_details.html";
					var requestBody = "request=ordernumber&ordernumber=" + this.orderNumber;
					window.location.href = URL + "?" + requestBody;
				}
				var oDiv1 = document.createElement('div');
				var oImg1 =document.createElement('img');
				var oDiv1_2 = document.createElement('div');
				boxDiv.appendChild(oDiv1);
				oDiv1.appendChild(oImg1);
				oDiv1.appendChild(oDiv1_2);
				oDiv1.style.width = "25%";
				oImg1.src = 'img/cal.png';
				oImg1.style.height = '40px';
				oImg1.style.marginTop = '3px';
				// oImg1.style.marginLeft = "40px";
				oDiv1_2.innerText = data[count[i]].orderYear +"年"+ data[count[i]].orderMonth +"月"+ data[count[i]].orderDay +"日";
				oDiv1.style.display = "inline-block";
				oDiv1_2.style.display = "inline-block";
				oDiv1_2.style.fontSize = 21 + 'px';
				oDiv1_2.style.lineHeight = '50px';
				oDiv1_2.style.verticalAlign = "top";

				var oDiv2 = document.createElement('div');
				var oImg2 =document.createElement('img');
				var oDiv2_2 = document.createElement('div');
				boxDiv.appendChild(oDiv2);
				oDiv2.appendChild(oImg2);
				oDiv2.appendChild(oDiv2_2);
				oDiv2.style.width = "25%";
				oImg2.src = 'img/doc.png';
				oImg2.style.height = '40px';
				oImg2.style.marginTop = '3px';
				oImg2.style.marginLeft = "40px";
				oDiv2_2.innerText = data[count[i]].doctorName;
				oDiv2.style.display = "inline-block";
				oDiv2_2.style.display = "inline-block";
				oDiv2_2.style.fontSize = 21 + 'px';
				oDiv2_2.style.lineHeight = '50px';
				oDiv2_2.style.verticalAlign = "top";

				var oDiv3 = document.createElement('div');
				var oImg3 = document.createElement('img');
				var oDiv3_2 = document.createElement('div');
				boxDiv.appendChild(oDiv3);
				oDiv3.appendChild(oImg3);
				oDiv3.appendChild(oDiv3_2);
				oDiv3.style.width = "25%";
				oImg3.src = 'img/pat.png';
				oImg3.style.height ='40px';
				oImg3.style.marginTop = '3px';
				oImg3.style.marginLeft = "45px";
				oDiv3.style.display = "inline-block";
				oDiv3_2.style.display = "inline-block";
				oDiv3_2.style.fontSize = 20 + 'px';
				oDiv3_2.style.lineHeight = '50px';
				oDiv3_2.style.verticalAlign = "top";
				oDiv3_2.innerText = data[count[i]].patientName;

				var oDiv4 = document.createElement('div');
				var oImg4 = document.createElement('img');
				var oDiv4_2 = document.createElement('div');
				boxDiv.appendChild(oDiv4);
				oDiv4.appendChild(oImg4);
				oDiv4.appendChild(oDiv4_2);
				oDiv4.style.width = "25%";
				oImg4.src = 'img/pat.png';
				oImg4.style.height = '40px';
				oImg4.style.marginTop = "3px";
				oImg4.style.marginLeft = "40px";
				oDiv4.style.display = "inline-block";
				oDiv4_2.style.display = "inline-block";
				oDiv4_2.style.fontSize = 20 + 'px';
				oDiv4_2.style.lineHeight = '50px';
				oDiv4_2.style.verticalAlign = "top";
				oDiv4_2.innerText = "站位";
			}
		}
		createDiv(count);
		goPage(1,5);
	}
});
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
		url:"http://maierlefu.applinzi.com/mywebsite/php/select_client.php?PHPSESSID=" + sessionId,
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

$("#btn1").on("click",function (){
	window.location.href = "http://maierlefu.applinzi.com/mywebsite/inquiry/Completed.html";
})
$("#btn2").on("click",function (){
	window.location.href = "http://maierlefu.applinzi.com/mywebsite/mainpage/mainpage.html";
})
$("#header_img").on("click",function(){
	window.location.href = "http://maierlefu.applinzi.com/mywebsite/mainpage/mainpage.html";
})
var header_button = document.getElementById("header_div_img");
createSearchBar(header_button,660,24,190,36,2,2,2);



