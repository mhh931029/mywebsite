var loginButton = document.querySelector("#login_button");
var usernameInput = document.querySelector("#username_input");
var passwordInput = document.querySelector("#password_input");
function checkForm() {
	var flag1 = "off";
	var flag2 = "off";
	if (usernameInput.value.length == 0){
		usernameInput.setAttribute("placeholder", "必填");
		usernameInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag1 = "off";
	}else{
		flag1 = "on";
	}
	if (passwordInput.value.length == 0){
		passwordInput.setAttribute("placeholder", "必填");
		passwordInput.parentNode.style.border = "1px solid rgb(255, 150, 180)";
		flag2 = "off";
	}else{
		flag2 = "on";
	}
	if (flag1 == "on" && flag2 == "on") {
		return true;
	}else{
		return false;
	}
}