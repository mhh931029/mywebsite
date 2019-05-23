<?php
header("content-type:text/html;charset=utf-8");
$databaseToBeDropped = $_POST["database_name"];
$con =  new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn", "maierlefu", "qwe123123","10171");
if (!$con) {
	die("Couldn't connect:".mysql_error());
}
//选择数据库
mysql_select_db("users_database", $con);
//删除数据库中的表格
$sqlCommand = "DROP DATABASE $databaseToBeDropped";
if (!mysql_query($sqlCommand, $con)) {
	die("Couldn't delete:".mysql_error());
}
echo "Users Database deleted";
//删除完毕后关闭数据库
mysql_close($con);
?>