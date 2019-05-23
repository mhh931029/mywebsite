<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
error_reporting(0);
if ($_POST["request"] == "login"){
	$username = $_POST["username"];
	$password = $_POST["password"];
	$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
	if ($mysqli->connect_errno)
		die("Couldn't connect:".mysqli_error($mysqli)."<br/>");
	//选择数据库
	mysqli_select_db($mysqli, "registration");
	mysqli_query($mysqli, "set names utf8");
	$selectTableCommand = mysqli_query($mysqli, "SELECT * FROM salesman WHERE username = '$username' AND password = '$password'");
	$resultArray = [];
	if ($row = mysqli_fetch_assoc($selectTableCommand)) {
		$name = $row["name"];
		$uniqueId = $row["uniqueid"];
		$email = $row["email"];
		array_push($resultArray, $name);
		array_push($resultArray, $uniqueId);
		array_push($resultArray, $email);
		$jsonStr = json_encode($resultArray);
		echo $jsonStr;
		exit;
	}else{
		echo "Login failed!";
		die("Couldn't connect:".mysqli_error($mysqli)."<br/>");
		exit;
	}
	mysqli_close($mysqli);
}else if ($_POST["request"] == "generateinvitationcode") {
	function generateInvitationCode () {
		$elementsArray = array("a", "b", "c" ,"d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
		$str = "";
		function getElement ($array, $start, $end) {
			$randomIndex = rand($start, $end);
			return $array[$randomIndex];
		}
		for ($i = 0; $i < 10; $i ++) {
			if ($i % 2 == 0) {
				$str .= getElement($elementsArray, 36, 61);
			}else {
				$str .= getElement($elementsArray, 0, 35);
			}
		}
		return $str;
	}
	$invitationCode = generateInvitationCode();
	$uniqueId = $_POST["uniqueid"];
	$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","registration");
	mysqli_query($mysqli, "UPDATE salesman SET invitationcode = '$invitationCode' WHERE uniqueid = '$uniqueId'");
	mysqli_close($mysqli);
	echo $invitationCode;
}else if ($_POST["request"] == "logout") {
	$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
	if ($mysqli->connect_errno) 
		die("Couldn't connect:".mysqli_error($mysqli)."<br/>");
	//选择数据库
	mysqli_select_db($mysqli, "registration");
	mysqli_query($mysqli, "set names utf8");
	$sessionId = $_COOKIE["PHPSESSID"];
	mysqli_query($mysqli, "UPDATE salesman SET PHPSESSID = '' WHERE PHPSESSID = '$sessionId'");
	if (isset($_COOKIE[session_name()])) {
		setcookie(session_name(), "", -1, "/");
	}
	session_destroy();
	echo "logged out";
	mysqli_close($mysqli);
}else if ($_POST["request"] == "getsalt") {
	$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","salt");
	$result = mysqli_query($mysqli, "SELECT * FROM salt");
	if ($row = mysqli_fetch_assoc($result)) {
		$salt = $row["salt"];
	}
	mysqli_close($mysqli);
	echo $salt;
}
?>