<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
error_reporting(0);
session_start();
$client = $_SESSION["username"];
//连接数据库
$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","CL".$client);
if ($mysqli->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
//选择数据库
mysqli_query($mysqli,"set names utf8");
$request = $_POST["request"];
if ($request == "all") {
	$selectTableCommand = "SELECT * FROM "."CL".$client."order";
	$mysqliQueryResult = mysqli_query($mysqli, $selectTableCommand);
	$resultArray = [];
	while ($row = mysqli_fetch_assoc($mysqliQueryResult)){
	    array_push($resultArray, $row);
	}
}else if ($request == "patientname") {
	$patientName = $_POST["patientname"];
	$selectTableCommand = "SELECT * FROM "."CL".$client."order WHERE patientName = "."'".$patientName."'";
	$mysqliQueryResult = mysqli_query($mysqli, $selectTableCommand);
	$resultArray = [];
	while ($row = mysqli_fetch_assoc($mysqliQueryResult)){
	    array_push($resultArray, $row);
	}
}else if ($request == "orderdate") {
	$orderDate = $_POST["orderdate"];
	$orderYear = substr($orderDate, 0, 4);
	$orderMonth = substr($orderDate, 4, 2);
	if ((int)$orderMonth < 10) {
		$orderMonth = substr($orderMonth, 1, 1);
	}
	$orderDay = substr($orderDate, 6, 2);
	$selectTableCommand = "SELECT * FROM "."CL".$client."order WHERE orderYear = "."'".$orderYear."'"." AND orderMonth = "."'".$orderMonth."'"." AND orderDay = "."'".$orderDay."'";
	$mysqliQueryResult = mysqli_query($mysqli, $selectTableCommand);
	$resultArray = [];
	while ($row = mysqli_fetch_assoc($mysqliQueryResult)){
	    array_push($resultArray, $row);
	}
}else if ($request == "ordernumber") {
	$orderNumber = $_POST["ordernumber"];
	//mysql按照订单号查找
	$mysqlCommand = "SELECT * FROM "."CL".$client."order";
	$mysqliQueryResult = mysqli_query($mysqli, $mysqlCommand);
	$resultArray = [];
	while ($row = mysqli_fetch_assoc($mysqliQueryResult)) {
		if (substr($row["orderNumber"], 0, 20) == $orderNumber) {
			array_push($resultArray, $row);
		}
	}
}
//关闭数据库
mysqli_close($mysqli);
$jsonStr = json_encode($resultArray);
echo $jsonStr;
?>