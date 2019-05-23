<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
// error_reporting(0);
session_start();

$client = $_SESSION["username"];
//连接数据库
$mysqli = new mysqli("avmlwxbmqrne.mysql.sae.sina.com.cn:10171", "maierlefu", "qweqwe123","CL".$client);
if ($mysqli->connect_errno) {
    die("不能连接服务器:".mysqli_error()."<br/>");
}
//选择数据库
mysqli_query($mysqli,"set names utf8");

$request = $_GET["request"];

if ($request == "searchbar") {
	$sort = $_GET["sort"];
	$value = $_GET["value"];
	if ($sort == "date_segment") {
		if (strlen($value) != 17) {
			echo "invalid search";
			return;
		}
		$resultArr = explode("-", $value);
		$startDate = $resultArr[0];
		$endDate = $resultArr[1];
		if (!ifDateValid($startDate) || !ifDateValid($endDate)) {
			echo "invalid search";
			return;
		}
		//mysql搜索从startDate到endDate之间所有订单
		// 两个日期之间的所有日期  
		$dt_start = strtotime($startDate);
	    $dt_end = strtotime($endDate);
	    $dateArray = array();
	    while ($dt_start <= $dt_end){
	    	$date = date('Ymd', $dt_start);
	        array_push($dateArray, $date);  
	        $dt_start = strtotime('+1 day', $dt_start);  
	    }
		$resultArray = [];
	    for ($i = 0; $i < count($dateArray); $i ++) {
    		$year = substr($dateArray[$i], 0, 4);
			$month = substr(substr($dateArray[$i], 4, 2), 0, 1) == 0 ? substr($dateArray[$i], 5, 1) : substr($dateArray[$i], 4, 2);
			$day =  substr(substr($dateArray[$i], 6, 2), 0, 1) == 0 ? substr($dateArray[$i], 7, 1) : substr($dateArray[$i], 6, 2);
			$mysqlCommand = "SELECT * FROM "."CL".$client."order WHERE orderYear = '$year' AND orderMonth = '$month' AND orderDay = '$day'";
			$mysqliQueryResult = mysqli_query($mysqli, $mysqlCommand);
			if ($mysqliQueryResult) {
				while ($row = mysqli_fetch_assoc($mysqliQueryResult)) {
					array_push($resultArray, $row);
				}
			}
	    }
	}else{
		if ($sort == "patient_name") {
			//mysql按照患者姓名查找
			$mysqlCommand = "SELECT * FROM "."CL".$client."order WHERE patientName = "."'".$value."'";
			$mysqiQueryResult = mysqli_query($mysqli, $mysqlCommand);
			$resultArray = [];
			while ($row = mysqli_fetch_assoc($mysqiQueryResult)) {
				array_push($resultArray, $row);
			}
		}else if ($sort == "order_number") {
			if (strlen($value) != 20) {
				echo "invalid search";
				return;
			}
			//mysql按照订单号查找
			$mysqlCommand = "SELECT * FROM "."CL".$client."order";
			$mysqliQueryResult = mysqli_query($mysqli, $mysqlCommand);
			$resultArray = [];
			while ($row = mysqli_fetch_assoc($mysqliQueryResult)) {
				if (substr($row["orderNumber"], 0, 20) == $value) {
					array_push($resultArray, $row);
				}
			}
		}else if ($sort == "order_date") {
			if (strlen($value) != 8 || !ifDateValid($value)) {
				echo "invalid search";
				return;
			}
			//mysql按照下单日期查找
			$orderYear = substr($value, 0, 4);
			$orderMonth = substr(substr($value, 4, 2), 0, 1) == 0 ? substr($value, 5, 1) : substr($value, 4, 2);
			$orderDay =  substr(substr($value, 6, 2), 0, 1) == 0 ? substr($value, 7, 1) : substr($value, 6, 2);
			$mysqlCommand = "SELECT * FROM "."CL".$client."order WHERE orderYear = "."'".$orderYear."'"."AND orderMonth = "."'".$orderMonth.
			"'"." AND orderDay = "."'".$orderDay."'";
			$mysqliQueryResult = mysqli_query($mysqli, $mysqlCommand);
			$resultArray = [];
			while ($row = mysqli_fetch_assoc($mysqliQueryResult)) {
				array_push($resultArray, $row);
			}
		}
	}
	$jsonStr = json_encode($resultArray);
}
function ifDateValid($string) {
	$validDate = "";
	$myCurrentDate = date("Ymd");
	$currentYear = substr($myCurrentDate, 0, 4);
	$currentMonth = substr($myCurrentDate, 4, 2);
	$currentDate = substr($myCurrentDate, 6);
	$year = substr($string, 0, 4);
	$month = substr($string, 4, 2);
	$date = substr($string, 6);
	if ($year % 400 == 0 || ($year % 4 == 0 && $year % 100 != 0)) {
		switch ($month) {
			case "01":
				$validDate = 31;
				break;
			case "02":
				$validDate = 29;
				break;
			case "03":
				$validDate = 31;
				break;
			case "04":
				$validDate = 30;
				break;
			case "05":
				$validDate = 31;
				break;
			case "06":
				$validDate = 30;
				break;
			case "07":
				$validDate = 31;
				break;
			case "08":
				$validDate = 31;
				break;
			case "09":
				$validDate = 30;
				break;
			case "10":
				$validDate = 31;
				break;
			case "11":
				$validDate = 30;
				break;
			case "12":
				$validDate = 31;
				break;
		}
	}else{
		switch ($month) {
			case "01":
				$validDate = 31;
				break;
			case "02":
				$validDate = 28;
				break;
			case "03":
				$validDate = 31;
				break;
			case "04":
				$validDate = 30;
				break;
			case "05":
				$validDate = 31;
				break;
			case "06":
				$validDate = 30;
				break;
			case "07":
				$validDate = 31;
				break;
			case "08":
				$validDate = 31;
				break;
			case "09":
				$validDate = 30;
				break;
			case "10":
				$validDate = 31;
				break;
			case "11":
				$validDate = 30;
				break;
			case "12":
				$validDate = 31;
				break;
		}
	}
	if ($year < 2010 || $month == "00" || $date == "00" || $month > 12) {
		$result = false;
		return $result;
	}else{
		if ($year > $currentYear) {
			$result = false;
			return $result;
		}
		if (($year == $currentYear && $month > $currentMonth) || ($year == $currentYear && $month == $currentMonth && $date > $currentDate)) {
			$result = false;
			return $result;
		}
		if ($date > $validDate) {
			$result = false;
			return $result;
		}
	}
	return $result = true;
}
mysqli_close($mysqli);
echo $jsonStr;
?>