<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
error_reporting(0);
$request = $_POST["request"];
if ($request == "all") {
	$uniqueId = $_POST["uniqueid"];
	$mysqli1 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","registration");
	mysqli_query($mysqli1, "set names utf8");
	if ($mysqli1->connect_errno) {
	    die("不能连接服务器:".mysqli_error()."<br/>");
	}
	$getClientCommand = "SELECT * FROM clients WHERE salesmanuniqueid = "."'".$uniqueId."'";
	$getClient = mysqli_query($mysqli1, $getClientCommand);
	if ($row = mysqli_fetch_assoc($getClient)) {
		$client = $row["username"];
	}
	$mysqli2 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","CL".$client);
	mysqli_query($mysqli2, "set names utf8");
	$getOrdersCommand = "SELECT * FROM "."CL".$client."order";
	$getOrders = mysqli_query($mysqli2, $getOrdersCommand);
	$orderArray = [];
	while ($row = mysqli_fetch_assoc($getOrders)){
	    array_push($orderArray, $row);
	}
	//关闭数据库
	mysqli_close($mysqli1);
	mysqli_close($mysqli2);
	$jsonStr = json_encode($orderArray);
	echo $jsonStr;
}else if ($request == "getuncollected") {
	$requirement = $_POST["requirement"];
	if ($requirement == "detail") {
		$salesman = $_POST["username"];
		//连接数据库
		$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","SM".$salesman);
		mysqli_query($mysqli, "set names utf8");
		$getStatusCommand = "SELECT * FROM collectionstatus WHERE collectionstatus = 'uncollected'";
		$getStatus = mysqli_query($mysqli, $getStatusCommand);
		$statusArray = array();
		while ($row = mysqli_fetch_assoc($getStatus)) {
			if ($row["collectionstatus"] == "uncollected") {
				array_push($statusArray, $row);
			}
		}
		//关闭数据库
		mysqli_close($mysqli);
		$jsonStr = json_encode($statusArray);
		echo $jsonStr;
	}else if ($requirement == "brief") {
		$salesman = $_POST["username"];
		//连接数据库
		$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","SM".$salesman);
		mysqli_query($mysqli, "set names utf8");
		$getStatusCommand = "SELECT *, count(distinct clinicname) FROM collectionstatus WHERE collectionstatus = 'uncollected' group by clinicname";
		$getStatus = mysqli_query($mysqli, $getStatusCommand);
		$statusArray = array();
		while ($row = mysqli_fetch_assoc($getStatus)) {
			array_push($statusArray, $row);
			
		}
		//关闭数据库
		mysqli_close($mysqli);
		$jsonStr = json_encode($statusArray);
		echo $jsonStr;
	}
}else if ($request == "updatecollectionstatus") {
	$salesman = $_POST["username"];
	$clinicName = $_POST["clinicname"];
	//连接数据库
	$mysqli =  new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn", "maierlefu", "qwe123123","10171","SM".$salesman);
		mysqli_query($mysqli, "set names utf8");
	$updateStatusCommand = "UPDATE collectionstatus SET collectionstatus = 'collected' WHERE clinicname = '$clinicName'";
	mysqli_query($mysqli, $updateStatusCommand);
	if ($mysqli->connect_errno) {
	    echo("更新接单状态失败:".mysqli_error()."<br/>");
	}else{
		echo "更新接单状态成功";
	}
	mysqli_close($mysqli);
}
?>