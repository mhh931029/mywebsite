<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
//error_reporting(0);
session_start();
$client = $_SESSION["username"];
echo $client;
//连接服务器
$mysqli = new mysqli("vdjfidimbhee.mysql.sae.sina.com.cn:10033", "maierlefu","qweqwe123");
if ($mysqli->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
//创建数据库
//$createDatabaseCommand = "CREATE DATABASE "."cl".$client;
//mysqli_query($mysqli, $createDatabaseCommand);
if (mysqli_query($mysqli,"CREATE DATABASE "."cl".$client)) {
	echo "Customer database successfully created"."<br/>";
}else{
	echo "Customer database creation failed: ".mysqli_error($mysqli)."<br/>";
    exit();
}
//选择数据库
mysqli_select_db($mysqli, "cl".$client);
$mysqli2 = new mysqli("vdjfidimbhee.mysql.sae.sina.com.cn", "maierlefu", "qweqwe123","maierlefu","10033");
if ($mysqli2->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
$mysqli1->query("set names utf8");
$mysqli2->query("set names utf8");
//创建表格
$tableName = "cl".$client."cart";
$createTableCommand = "CREATE TABLE ".$tableName."(
clinicName varchar(100),
productName varchar(100),
toothPosition varchar(50),
singleOrContinual varchar(50),
jiyase varchar(50),
colorSystem varchar(50),
colorInfo varchar(100),
paiyaInfo varchar(100),
laborCharge varchar(50),
price varchar(50),
zuhanqiShuliang varchar(50),
doctorName varchar(50),
doctorPhone varchar(50),
patientName varchar(50),
patientAge varchar(20),
patientSex varchar(20),
patientPhone varchar(50),
orderYear varchar(20),
orderMonth varchar(20),
orderDay varchar(20),
orderHour varchar(20),
deliveryYear varchar(20),
deliveryMonth varchar(20),
deliveryDay varchar(20),
deliveryHour varchar(20),
shiNeiguan varchar(20),
shiCiya varchar(20),
shiZhijia varchar(20),
shiPaiya varchar(20),
suidanfupinLadiShuliang varchar(20),
suidanfupinJiuyaShuliang varchar(20),
suidanfupinRengongyayinShuliang varchar(20),
suidanfupinTuopanShuliang varchar(20),
suidanfupinHejiaShuliang varchar(20),
suidanfupinCankaomoShuliang varchar(20),
suidanfupinJitaiShuliang varchar(20),
suidanfupinZhuanyiganShuliang varchar(20),
suidanfupinTidaitiShuliang varchar(20),
suidanfupinQita varchar(100),
suidanfupinQitaShuliang varchar(100),
shangbankouSelected varchar(50),
xiabankouSelected varchar(50),
yishengshuoming varchar(1000),
orderNumber varchar(100)
)DEFAULT CHARSET=utf8";
mysqli_query($mysqli1, $createTableCommand);
//从传来的json中获取产品名称
$jsonOfProductDetails = json_decode($_POST["jsonOfProductDetails"]);
$productName = $jsonOfProductDetails[0]->productName;
$clinicName = $jsonOfProductDetails[1]->clinicName;
$doctorName = $jsonOfProductDetails[2]->doctorName;
$doctorPhone = $jsonOfProductDetails[3]->doctorPhone;
$patientName = $jsonOfProductDetails[4]->patientName;
$patientAge = $jsonOfProductDetails[5]->patientAge;
$patientSex = $jsonOfProductDetails[6]->patientSex;
$patientPhone = $jsonOfProductDetails[7]->patientPhone;
$orderYear = $jsonOfProductDetails[8]->orderYear;
$orderMonth = $jsonOfProductDetails[9]->orderMonth;
$orderDay = $jsonOfProductDetails[10]->orderDay;
$orderHour = $jsonOfProductDetails[11]->orderHour;
$deliveryYear = $jsonOfProductDetails[12]->deliveryYear;
$deliveryMonth = $jsonOfProductDetails[13]->deliveryMonth;
$deliveryDay = $jsonOfProductDetails[14]->deliveryDay;
$deliveryHour = $jsonOfProductDetails[15]->deliveryHour;
$shiNeiguan = $jsonOfProductDetails[16]->shiNeiguan;
$shiCiya = $jsonOfProductDetails[17]->shiCiya;
$shiZhijia = $jsonOfProductDetails[18]->shiZhijia;
$shiPaiya = $jsonOfProductDetails[19]->shiPaiya;
$suidanfupinLadiShuliang = $jsonOfProductDetails[20]->suidanfupinLadiShuliang;
$suidanfupinJiuyaShuliang = $jsonOfProductDetails[21]->suidanfupinJiuyaShuliang;
$suidanfupinRengongyayinShuliang = $jsonOfProductDetails[22]->suidanfupinRengongyayinShuliang;
$suidanfupinTuopanShuliang = $jsonOfProductDetails[23]->suidanfupinTuopanShuliang;
$suidanfupinHejiaShuliang = $jsonOfProductDetails[24]->suidanfupinHejiaShuliang;
$suidanfupinCankaomoShuliang = $jsonOfProductDetails[25]->suidanfupinCankaomoShuliang;
$suidanfupinJitaiShuliang = $jsonOfProductDetails[26]->suidanfupinJitaiShuliang;
$suidanfupinZhuanyiganShuliang = $jsonOfProductDetails[27]->suidanfupinZhuanyiganShuliang;
$suidanfupinTidaitiShuliang = $jsonOfProductDetails[28]->suidanfupinTidaitiShuliang;
$suidanfupinQita = $jsonOfProductDetails[29]->suidanfupinQita;
$suidanfupinQitaShuliang = $jsonOfProductDetails[30]->suidanfupinQitaShuliang;
$yishengshuoming = $jsonOfProductDetails[31]->yishengshuoming;
$colorSystem = $jsonOfProductDetails[32]->colorSystem;
$jiyase = $jsonOfProductDetails[33]->jiyase;
$zuhanqiShuliang = $jsonOfProductDetails[34]->zuhanqiShuliang;
$shangbankouSelected = $jsonOfProductDetails[35]->shangbankouSelected;
$xiabankouSelected = $jsonOfProductDetails[36]->xiabankouSelected;
$orderNumber = $jsonOfProductDetails[37]->orderNumber;
//根据产品名称从pricelist表格中调取对应的价格
$priceEnquiryResult = mysqli_query($mysqli2, "SELECT * FROM pricelist");
while ($row = mysqli_fetch_assoc($priceEnquiryResult)) {//mysql_fetch_assoc是以数据库中的字段为键,而不是序号
    $price = $row[$productName];
    if (isset($row[$productName."_labor"])) {
        $laborCharge = $row[$productName."_labor"];
    }else{
        $laborCharge = "";
    }
}
//把从表单传过来的数据连同查询到的价格插入数据库
for ($i = 38; $i < count($jsonOfProductDetails); $i ++) {
    $toothPosition = $jsonOfProductDetails[$i]->toothPosition;
    $singleOrContinual = $jsonOfProductDetails[$i]->singleOrContinual;
    $colorInfo = $jsonOfProductDetails[$i]->colorInfo;
    $paiyaInfo = $jsonOfProductDetails[$i]->paiyaInfo;
    //插入表格
    $insertCommand = "INSERT INTO ".$tableName."(
    clinicName,
    productName,
    toothPosition,
    singleOrContinual,
    jiyase,
    colorSystem,
    colorInfo,
    paiyaInfo,
    laborCharge,
    price,
    zuhanqiShuliang,
    doctorName,
    doctorPhone,
    patientName,
    patientAge,
    patientSex,
    patientPhone,
    orderYear,
    orderMonth,
    orderDay,
    orderHour,
    deliveryYear,
    deliveryMonth,
    deliveryDay,
    deliveryHour,
    shiNeiguan,
    shiCiya,
    shiZhijia,
    shiPaiya,
    suidanfupinLadiShuliang,
    suidanfupinJiuyaShuliang,
    suidanfupinRengongyayinShuliang,
    suidanfupinTuopanShuliang,
    suidanfupinHejiaShuliang,
    suidanfupinCankaomoShuliang,
    suidanfupinJitaiShuliang,
    suidanfupinZhuanyiganShuliang,
    suidanfupinTidaitiShuliang,
    suidanfupinQita,
    suidanfupinQitaShuliang,
    shangbankouSelected,
    xiabankouSelected,
    yishengshuoming,
    orderNumber
    )VALUES(
    '$clinicName',
    '$productName',
    '$toothPosition',
    '$singleOrContinual',
    '$jiyase',
    '$colorSystem',
    '$colorInfo',
    '$paiyaInfo',
    '$laborCharge',
    '$price',
    '$zuhanqiShuliang',
    '$doctorName',
    '$doctorPhone',
    '$patientName',
    '$patientAge',
    '$patientSex',
    '$patientPhone',
    '$orderYear',
    '$orderMonth',
    '$orderDay',
    '$orderHour',
    '$deliveryYear',
    '$deliveryMonth',
    '$deliveryDay',
    '$deliveryHour',
    '$shiNeiguan',
    '$shiCiya',
    '$shiZhijia',
    '$shiPaiya',
    '$suidanfupinLadiShuliang',
    '$suidanfupinJiuyaShuliang',
    '$suidanfupinRengongyayinShuliang',
    '$suidanfupinTuopanShuliang',
    '$suidanfupinHejiaShuliang',
    '$suidanfupinCankaomoShuliang',
    '$suidanfupinJitaiShuliang',
    '$suidanfupinZhuanyiganShuliang',
    '$suidanfupinTidaitiShuliang',
    '$suidanfupinQita',
    '$suidanfupinQitaShuliang',
    '$shangbankouSelected',
    '$xiabankouSelected',
    '$yishengshuoming',
    '$orderNumber'
    )";
    if (!mysqli_query($mysqli1, $insertCommand)) {
        echo("插入产品失败:".mysqli_error($mysqli1));
    }else{
        echo "<h1 style='color: skyblue;'>插入产品成功!</h1>";
    }
}
//关闭数据库
$mysqli1->close();
$mysqli2->close();
//echo "<h1 style='color: blue;'><i>本页面将在5秒后关闭!您可在之前页面继续添加产品!</i></h1>";
//echo "<script>var timer = setInterval(function(){window.close(); clearInterval(timer);}, 5000);</script>";
?>