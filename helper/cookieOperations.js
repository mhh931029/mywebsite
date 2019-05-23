//设置cookie方法
function setCookie(key, value, day){
	//获取当前日期
	var date = new Date();
	var nowDate = date.getDate();
	//设置过期的时间
	date.setDate(nowDate + day);
	//存储数据及设置过期的时间
	document.cookie = key + "=" + value + ";expires=" + date;
}
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
//删除cookie方法
function removeCookie(key){
	//设置有效时间为-1, 让cookie立刻过期
	setCookie(key, "", -1);
}