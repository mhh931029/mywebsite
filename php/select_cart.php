<?php
header("content-type:text/html;charset=utf-8");
header('Access-Control-Allow-Origin:*');
session_start();
$client = $_SESSION["username"];
//接收查询请求并返回数据
$resultArray = array();
//连接数据库
$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123");
if ($mysqli->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
//选择数据库
mysqli_select_db($mysqli, "CL".$client);
mysqli_query($mysqli,"set names utf8");
//查询表格
$selectTableCommand = "SELECT * FROM "."CL".$client."cart";
$mysqliQueryResult = mysqli_query($mysqli, $selectTableCommand);
while ($row = mysqli_fetch_assoc($mysqliQueryResult)){
    array_push($resultArray, $row);
}
//关闭数据库
mysqli_close($mysqli);
$jsonStr = json_encode($resultArray);
echo $jsonStr;
?>