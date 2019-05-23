<?php
session_start();
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
//error_reporting(0);
$client = $_SESSION["username"];
$placedOrderResult = "failed";
$patientMainNumberArray = json_decode($_POST["patientmainnumber"]);
//连接client数据库
$mysqli1 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn", "maierlefu", "qweqwe123","CL".$client,"10171");
mysqli_query($mysqli1, "set names utf8");
if ($mysqli1->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
//创建表格
$orderTable = "CL".$client."order";
$createTableCommand = "CREATE TABLE ".$orderTable."(
clinicName varchar(100) NOT NULL,
productName varchar(100) NOT NULL,
toothPosition varchar(50) NOT NULL,
singleOrContinual varchar(50) NOT NULL,
jiyase varchar(50) NOT NULL,
colorSystem varchar(50) NOT NULL,
colorInfo varchar(100) NOT NULL,
paiyaInfo varchar(100) NOT NULL,
laborCharge varchar(50) NOT NULL,
price varchar(50) NOT NULL,
zuhanqiShuliang varchar(50) NOT NULL,
doctorName varchar(50) NOT NULL,
doctorPhone varchar(50) NOT NULL,
patientName varchar(50) NOT NULL,
patientAge varchar(20) NOT NULL,
patientSex varchar(20) NOT NULL,
patientPhone varchar(50) NOT NULL,
orderYear varchar(20) NOT NULL,
orderMonth varchar(20) NOT NULL,
orderDay varchar(20) NOT NULL,
orderHour varchar(20) NOT NULL,
deliveryYear varchar(20) NOT NULL,
deliveryMonth varchar(20) NOT NULL,
deliveryDay varchar(20) NOT NULL,
deliveryHour varchar(20) NOT NULL,
shiNeiguan varchar(20) NOT NULL,
shiCiya varchar(20) NOT NULL,
shiZhijia varchar(20) NOT NULL,
shiPaiya varchar(20) NOT NULL,
suidanfupinLadiShuliang varchar(20) NOT NULL,
suidanfupinJiuyaShuliang varchar(20) NOT NULL,
suidanfupinRengongyayinShuliang varchar(20) NOT NULL,
suidanfupinTuopanShuliang varchar(20) NOT NULL,
suidanfupinHejiaShuliang varchar(20) NOT NULL,
suidanfupinCankaomoShuliang varchar(20) NOT NULL,
suidanfupinJitaiShuliang varchar(20) NOT NULL,
suidanfupinZhuanyiganShuliang varchar(20) NOT NULL,
suidanfupinTidaitiShuliang varchar(20) NOT NULL,
suidanfupinQita varchar(100) NOT NULL,
suidanfupinQitaShuliang varchar(100) NOT NULL,
shangbankouSelected varchar(50) NOT NULL,
xiabankouSelected varchar(50) NOT NULL,
yishengshuoming varchar(1000) NOT NULL,
orderNumber varchar(100) NOT NULL
)DEFAULT CHARSET=utf8";
mysqli_query($mysqli1, $createTableCommand);
//将购物车表格数据插入订单表格
$fieldNameArray = [];
$selectCartCommand = "SELECT * FROM "."CL".$client."cart";
$selectCartResult = mysqli_query($mysqli1, $selectCartCommand);
$row = mysqli_fetch_assoc($selectCartResult);
foreach ($row as $key => $value) {
	array_push($fieldNameArray, $key);
}
$insertCommand = "INSERT INTO ".$orderTable."(";
for ($i = 0; $i < count($fieldNameArray); $i ++) {
	if ($i == count($fieldNameArray) - 1) {
		$insertCommand .= $fieldNameArray[$i].")";
	}else{
		$insertCommand .= $fieldNameArray[$i].",";
	}
}
$insertCommand .= "VALUES(";
$uncompletedInsertCommand = $insertCommand;
mysqli_free_result($selectCartResult);
$selectCartCommand = "SELECT * FROM "."CL".$client."cart";
$selectCartResult = mysqli_query($mysqli1, $selectCartCommand);
while ($row = mysqli_fetch_assoc($selectCartResult)) {
	$valueArray = [];
	foreach ($row as $key => $value) {
		array_push($valueArray, $value);		
	}
	for ($i = 0; $i < count($patientMainNumberArray); $i ++) {
		if ($patientMainNumberArray[$i]->patientName == $row["patientName"]) {
			$orderNumber = $patientMainNumberArray[$i]->mainNumber;
			$patientMainNumberArray[$i]->clinicName = $row["clinicName"];
			$patientMainNumberArray[$i]->doctorName = $row["doctorName"];
			$patientMainNumberArray[$i]->doctorPhone = $row["doctorPhone"];
		}
	}
	for ($i = 0; $i < count($valueArray); $i ++) {
		if ($i == count($valueArray) - 1) {
			$insertCommand .= "'".$orderNumber.$valueArray[$i]."')";
			$result = mysqli_query($mysqli1, $insertCommand);
			if (!$result) {
			    echo("下单失败:".mysqli_error($mysqli1));
			    $placedOrderResult = "failed";
			}else{
			    echo "<h1 style='color: skyblue;'>下单成功!</h1>";
			    $dropCartTableCommand = "DROP TABLE "."CL".$client."cart";
			    mysqli_query($mysqli1, $dropCartTableCommand);
			    $placedOrderResult = "order has been placed successfully";
			}
		}else{
			$insertCommand .= "'".$valueArray[$i]."',";
		}
	}
	$insertCommand = $uncompletedInsertCommand;
}

//连接registration数据库以取得salesman信息
$mysqli2 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn", "maierlefu", "qweqwe123","registration","10171");
mysqli_query($mysqli2, "set names utf8");
$getSalesmanUniqueidCommand = "SELECT * FROM clients WHERE username = "."'".$client."'";
$getSalesmanUniqueid = mysqli_query($mysqli2, $getSalesmanUniqueidCommand);
if ($row = mysqli_fetch_assoc($getSalesmanUniqueid)) {
	$uniqueId = $row["salesmanuniqueid"];
}
$getSalesmanCommand = "SELECT * FROM salesman WHERE uniqueid = "."'".$uniqueId."'";
$getSalesman = mysqli_query($mysqli2, $getSalesmanCommand);
if ($row = mysqli_fetch_assoc($getSalesman)) {
	$salesman = $row["username"];
}

//连接salesman数据库并插入collectionstatus表格
$mysqli3 = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn", "maierlefu", "qweqwe123","SM".$salesman,"10171");
mysqli_query($mysqli3, "set names utf8");
//更新collectionstatus表格
for ($i = 0; $i < count($patientMainNumberArray); $i ++) {
	$clinicNameToBeAdded = $patientMainNumberArray[$i]->clinicName;
	$doctorNameToBeAdded = $patientMainNumberArray[$i]->doctorName;
	$doctorPhoneToBeAdded = $patientMainNumberArray[$i]->doctorPhone;
	$orderNumberToBeAdded = $patientMainNumberArray[$i]->orderNumber;
	$orderDateToBeAdded = date("Ymd");
   	$insertCollectionStatusCommand = "INSERT INTO collectionstatus (clinicname, doctorname, doctorphone, ordernumber, orderdate, collectionstatus) VALUES ('".$clinicNameToBeAdded."', '".$doctorNameToBeAdded."', '".$doctorPhoneToBeAdded."', '".$orderNumberToBeAdded."', '".$orderDateToBeAdded."', 'uncollected')";
	mysqli_query($mysqli3, $insertCollectionStatusCommand);
}

//关闭数据库
mysqli_close($mysqli1);
mysqli_close($mysqli2);
mysqli_close($mysqli3);
echo $placedOrderResult;
?>