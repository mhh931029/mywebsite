var signupForm = document.querySelector("#signup");
var usernameInput = document.querySelector("#username_input");
var passwordInput = document.querySelector("#password_input");
var retypePasswordInput = document.querySelector("#retype_password_input");
var invitationCodeInput = document.querySelector("#invitation_code_input");
var clinicNameInput = document.querySelector("#clinic_name_input");
var clinicPhoneInput = document.querySelector("#clinic_phone_input");
var signupButton = document.querySelector("#signup_button");

usernameInput.onblur = function() {
	if (this.value == null || this.value == "") {
		this.value = null;
	}
	requestByGET("http://www.maierlefu.com/mywebsite/php/insert_client_db.php?checkusername=" + this.value, function(response){
		console.log(response);
		if (response.indexOf("username exists") != -1) {
			var temp = usernameInput.value;
			usernameInput.value = "";
			usernameInput.setAttribute("placeholder", "");
			var count = 0;
			var timer = setInterval(function(){
				count ++;
				if (count <= 10) {
					if (count % 2 == 0) {
						usernameInput.setAttribute("placeholder", '用户名"' + temp + '"已存在');
					}else{
						usernameInput.setAttribute("placeholder", "");
					}
				}
				if (count == 10) {
					clearInterval(timer);
					usernameInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
				}
			}, 250);
		}else{
			usernameInput.parentNode.style.border = "1px solid lightgray";
		}
	});
}
retypePasswordInput.onblur = function() {
	if (this.value != passwordInput.value) {
		this.value = "";
		this.setAttribute("placeholder", "两次输入的密码不一致!");
		var count = 0;
		var timer = setInterval(function(){
			count ++;
			if (count <= 10) {
				if (count % 2 == 0) {
					retypePasswordInput.setAttribute("placeholder", "两次输入的密码不一致!");
				}else{
					retypePasswordInput.setAttribute("placeholder", "");
				}
			}
			if (count == 10) {
				clearInterval(timer);
				retypePasswordInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
			}
		}, 250);
	}else{
		retypePasswordInput.parentNode.style.border = "1px solid lightgray";
	}
}
invitationCodeInput.onblur = function() {
	if (this.value == null || this.value == "") {
		this.value = null;
	}
	requestByGET("http://www.maierlefu.com/mywebsite/php/insert_client_db.php?checkinvitationcode=" + this.value, function(response){
		console.log(response);
		if (response.indexOf("invitation code incorrect") != -1) {
			var temp = invitationCodeInput.value;
			invitationCodeInput.value = "";
			invitationCodeInput.setAttribute("placeholder", "");
			var count = 0;
			var timer = setInterval(function(){
				count ++;
				if (count <= 10) {
					if (count % 2 == 0) {
						invitationCodeInput.setAttribute("placeholder", '邀请码"' + temp + '"错误!');
					}else{
						invitationCodeInput.setAttribute("placeholder", "");
					}
				}
				if (count == 10) {
					clearInterval(timer);
					invitationCodeInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
				}
			}, 250);
		}else{
			invitationCodeInput.parentNode.style.border = "1px solid lightgray";
		}
	});
}
clinicPhoneInput.onblur = function() {
	var temp = this.value.split("-");
	var valid = true;
	for (var i = 0; i < temp.length; i ++) {
		if (isNaN(temp[i])) {
			valid = false;
		}
	}
	if (!valid) {
		this.value = "";
		this.setAttribute("placeholder", "电话号码必须为数字!");
		var count = 0;
		var timer = setInterval(function(){
			count ++;
			if (count <= 10) {
				if (count % 2 == 0) {
					clinicPhoneInput.setAttribute("placeholder", "电话号码必须为数字!");
				}else{
					clinicPhoneInput.setAttribute("placeholder", "");
				}
			}
			if (count == 10) {
				clearInterval(timer);
				clinicPhoneInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
			}
		}, 250);
	}else{
		clinicPhoneInput.parentNode.style.border = "1px solid lightgray";
	}
}
function checkForm() {
	var flag1 = "off";
	var flag2 = "off";
	var flag3 = "off";
	var flag4 = "off";
	var flag5 = "off";
	var flag6 = "off";
	if (usernameInput.value.length == 0){
		usernameInput.setAttribute("placeholder", "用户名必填");
		usernameInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag1 = "off";
	}else{
		flag1 = "on";
	}
	if (passwordInput.value.length == 0){
		passwordInput.setAttribute("placeholder", "密码必填");
		passwordInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag2 = "off";
	}else{
		flag2 = "on";
	}
	if (retypePasswordInput.value.length == 0){
		retypePasswordInput.setAttribute("placeholder", "密码必填");
		retypePasswordInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag3 = "off";
	}else if (retypePasswordInput.value != passwordInput.value) {
		alert("两次输入的密码不一致!");
		flag3 = "off";
	}else{
		flag3 = "on";
	}
	if (invitationCodeInput.value.length == 0){
		invitationCodeInput.setAttribute("placeholder", "邀请码必填");
		invitationCodeInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag4 = "off";
	}else{
		flag4 = "on";
	}
	if (clinicNameInput.value.length == 0){
		clinicNameInput.setAttribute("placeholder", "诊所名称必填");
		clinicNameInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag5 = "off";
	}else{
		flag5 = "on";
	}
	if (clinicPhoneInput.value.length == 0){
		clinicPhoneInput.setAttribute("placeholder", "诊所电话必填");
		clinicPhoneInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag6 = "off";
	}else{
		flag6 = "on";
	}
	if (flag1 == "on" && flag2 == "on" && flag3 == "on" && flag4 == "on" && flag5 == "on" && flag6 == "on") {
		return true;
	}else{
		return false;
	}
}