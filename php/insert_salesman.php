<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
error_reporting(0);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	//把从表单传过来的数据插入数据库
	$codedUsername = json_decode($_POST["username"]);
	$name = $_POST["name"];
	$codedPassword = json_decode($_POST["password"]);
	$codedEmail = json_decode($_POST["email"]);
	$username = strtolower(decodeString($codedUsername));
	$password = decodeString($codedPassword);
	$email = decodeString($codedEmail);
	//创建registration数据库
	$mysqli1 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
	if ($mysqli1->connect_errno) {
		die("Couldn't connect:".mysqli_error()."<br/>");
	};
	$createDatabaseCommand = "CREATE DATABASE registration";
	mysqli_query($mysqli1, $createDatabaseCommand);
	mysqli_close($mysqli1);
	//选择registration数据库
	$mysqli1 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","registration");
	mysqli_query($mysqli1, "set names utf8");
	if ($mysqli1->connect_errno) {
	    die("不能连接服务器:".mysqli_error()."<br/>");
	}
	//创建salesman表并插入
	$createTableCommand = "CREATE TABLE salesman (
	username varchar(50),
	PRIMARY KEY(username),
	name varchar(50),
	password varchar(50),
	email varchar(50),
	uniqueid varchar(100),
	invitationcode varchar(50)
	)DEFAULT CHARSET=utf8";
	mysqli_query($mysqli1, $createTableCommand);
	function generateUniqueIdOfSalesman ($username) {
		$uniqueId = hash("sha1", $username.date("Y-m-d H:i:s"), false);
		return $uniqueId;
	}
	$uniqueId = generateUniqueIdOfSalesman($username);
	$insertCommand = "INSERT INTO salesman (
	username,
	name,
	password,
	email,
	uniqueId,
	invitationcode
	)VALUES(
	'$username',
	'$name',
	'$password',
	'$email',
	'$uniqueId',
	''
	)";
	if (!mysqli_query($mysqli1, $insertCommand)) {
		echo("Salesman signup failed:".mysqli_error($mysqli1));
	}else{
		$echoArray = array("uniqueId"=>$uniqueId);
		echo json_encode($echoArray);
	}

	//创建salesman自己的数据库
	$mysqli2 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
	if ($mysqli2->connect_errno) {
		die("Couldn't connect:".mysqli_error()."<br/>");
	};
	$createDatabaseCommand = "CREATE DATABASE "."SM".$username;
	mysqli_query($mysqli2, $createDatabaseCommand);
	mysqli_close($mysqli2);
	//选择salesman自己的数据库
	$mysqli2 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","SM".$username);
	//创建collectionstatus表格
	$createCollectionStatusTableCommand = "CREATE TABLE collectionstatus (
	clinicname varchar(50),
	doctorname varchar(50),
	doctorphone varchar(50),
	ordernumber varchar(50),
	orderdate varchar(50),
	collectionstatus varchar(50)
	)DEFAULT CHARSET=utf8";
	mysqli_query($mysqli2, $createCollectionStatusTableCommand);

	//关闭数据库
	mysqli_close($mysqli1);
	mysqli_close($mysqli2);
}else if ($_SERVER["REQUEST_METHOD"] == "GET") {
	$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
	if ($mysqli->connect_errno) {
		die("Couldn't connect:".mysqli_error()."<br/>");
	};
	if ($_GET["checkusername"] && $_GET["checkusername"] != null) {
		$checkusername = $_GET["checkusername"];
		//选择数据库
		mysqli_select_db($mysqli, "registration");
		mysqli_query($mysqli, "set names utf8");
		//判断用户名是否被占用
		$usernameArray = array();
		$result = mysqli_query($mysqli,"SELECT * FROM salesman");
		while($row = mysqli_fetch_assoc($result)){
		    array_push($usernameArray, $row["username"]);
		}
		$ifUsernameExists = in_array($checkusername, $usernameArray);
		if ($ifUsernameExists) {
			echo "username exists";
		}
		mysqli_close($mysqli);
	}
}
function decodeString($para) {
	$indexArray = $para[0]->indexArrayOfString;
	$string = $para[1]->resultString;
	if (count($indexArray) % 2 == 0) {
		$subArr1 = array_slice($indexArray, 0, count($indexArray) / 2);
		$subArr2 = array_slice($indexArray, count($indexArray) / 2, count($indexArray) / 2);
		$subArr1 = array_reverse($subArr1);
		$subArr2 = array_reverse($subArr2);
		$indexArray = array_merge($subArr1, $subArr2);
	}else{
		$subArr1 = array_slice($indexArray, 0, count($indexArray) / 2);
		$subArr2 = array_slice($indexArray, count($indexArray) / 2 + 1, count($indexArray) / 2);
		$subArr1 = array_reverse($subArr1);
		$middle = array($indexArray[count($indexArray) / 2]);
		$subArr2 = array_reverse($subArr2);
		$indexArray = array_merge($subArr1, $middle, $subArr2);
	}
	for ($i =  0; $i < count($indexArray); $i ++) {
		$index = $indexArray[$i];
		$tempArray = str_split($string);
		array_splice($tempArray, $indexArray[$i], 1);
		$string = implode("", $tempArray);
	}
	return $string;
}
?>