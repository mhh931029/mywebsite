<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli("vdjfidimbhee.mysql.sae.sina.com.cn:10033", "maierlefu", "qweqwe123","registration");
if ($mysqli->connect_errno) {
	die("Couldn't connect:".mysqli_error()."<br/>");
};
mysqli_query($mysqli, "set names utf8");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	//创建表格
	$createTableCommand = "CREATE TABLE clients (
	clinicname varchar(50),
	PRIMARY KEY(clinicname),
	username varchar(50),
	password varchar(50),
	clinicphone varchar(50),
	salesman varchar(50),
	salesmanuniqueid varchar(100),
	PHPSESSID varchar(50)
	)DEFAULT CHARSET=utf8";
	if (mysqli_query($mysqli, $createTableCommand)) {
		echo "users table successfully created"."<br/>";
	}else{
		echo "users table creation failed: ".mysqli_error($mysqli)."<br/>";
	}
	//把从表单传过来的数据插入表格
	$invitationcode =  $_POST["invitationcode"];
	$username = strtolower($_POST["username"]);
	$password = $_POST["password"];
	$clinicname = $_POST["clinicname"];
	$clinicphone = $_POST["clinicphone"];
	$invitationcodeReceived = $_POST["invitationcode"];
	$mysqliCommand = mysqli_query($mysqli, "SELECT * FROM salesman WHERE invitationcode = '$invitationcode'");
	while ($row = mysqli_fetch_assoc($mysqliCommand)) {
		$salesman = $row["name"];
		$salesmanuniqueid = $row["uniqueid"];
	}
	$insertCommand = "INSERT INTO clients (
	clinicname,
	username,
	password,
	clinicphone,
	salesman,
	salesmanuniqueid
	)VALUES(
	'$clinicname',
	'$username',
	'$password',
	'$clinicphone',
	'$salesman',
	'$salesmanuniqueid'
	)";
	if (!mysqli_query($mysqli, $insertCommand)) {
		echo "<h1 style='color: blue;'><i>注册失败!5秒后返回注册页面!</i></h1>";
		echo "<script>var timer = setInterval(function(){window.location.href = 'http://maierlefu.applinzi.com/mywebsite/signup/signup.html'; clearInterval(timer);}, 5000);</script>";
	}else{
		echo("Signup succeeded");
        //echo "<script> window.location.href = 'http://www.maierlefu.com/mywebsite/login/login.html'</script>";
	}
	mysqli_close($mysqli);
}else if ($_SERVER["REQUEST_METHOD"] == "GET") {
	if ($_GET["checkusername"] && $_GET["checkusername"] != null) {
		$checkusername = $_GET["checkusername"];
		mysqli_query($mysqli, "set names utf8");
		//判断用户名是否被占用
		$tempArray = array();
		$result = mysqli_query($mysqli,"SELECT * FROM clients");
		while($row = mysqli_fetch_assoc($result)){
		    array_push($tempArray, $row["username"]);
		}
		$ifUsernameExists = in_array($checkusername, $tempArray);
		if ($ifUsernameExists) {
			echo "username exists";
		}
		mysqli_close($mysqli);
	}else if ($_GET["checkinvitationcode"] && $_GET["checkinvitationcode"] != null) {
		$checkinvitationcode = $_GET["checkinvitationcode"];
		mysqli_query($mysqli, "set names utf8");
		$result = mysqli_query($mysqli, "SELECT * FROM salesman WHERE invitationcode = '$checkinvitationcode'");
		$tempArray = array();
		while ($row = mysqli_fetch_assoc($result)) {
			array_push($tempArray, $row["invitationcode"]);
		}
		$bool = in_array($checkinvitationcode, $tempArray);
		if (!$bool) {
			echo "invitation code incorrect";
		}
	}
}
?>