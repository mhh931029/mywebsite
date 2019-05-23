<?php
header("content-type:text/html;charset=utf-8");
session_start();
$client = $_SESSION["username"];
//连接数据库
$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
if ($mysqli->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
//选择数据库
mysqli_select_db($mysqli, "cl".$client);
mysqli_query($mysqli, "set names utf8");
//接受将被删除的产品信息
$toBeDeleted = json_decode($_POST["toBeDeleted"]);
$patientName = $toBeDeleted[0];
$productName = $toBeDeleted[1];
$toothPosition = $toBeDeleted[2];
//从表格中删除
if ($toothPosition == "") {
	$deleteCommand = "DELETE FROM cl".$client."cart "."WHERE patientName = '$patientName' AND productName = '$productName'";
	$deleteFromTable = mysqli_query($mysqli, $deleteCommand);
	if ($deleteFromTable == 1) {
	    echo "<h1 style='color: skyblue;'>删除产品成功!</h1>";
	}else{
	    echo("删除产品失败:".mysqli_error($mysqli));
	}
}else{
	$deleteCommand = "DELETE FROM cl".$client."cart "."WHERE patientName = '$patientName' AND productName = '$productName' AND toothPosition = '$toothPosition'";
	$deleteFromTable = mysqli_query($mysqli, $deleteCommand);
	if ($deleteFromTable == 1) {
	    echo "<h1 style='color: skyblue;'>删除产品成功!</h1>";
	}else{
	    echo("删除产品失败:".mysqli_error($mysqli));
	}
}
//关闭数据库
mysqli_close($mysqli);
echo "<h1 style='color: blue;'><i>本页面将在2秒后关闭!您可在之前页面继续删除产品!</i></h1>";
echo "<script>var timer = setInterval(function(){window.close(); clearInterval(timer);}, 2000);</script>";
?>