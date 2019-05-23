<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin: *");
$mysqli = new mysqli("localhost:3306", "Order", "C4VBq5ZJSMbHXWd6");
$createDatabaseCommand = "CREATE DATABASE conversation";
mysqli_query($mysqli, $createDatabaseCommand);
mysqli_close($mysqli);
$request = $_POST["request"];
$chatRecord = array();
if ($request == "sendmessage") {
	$mysqli = new mysqli("localhost:3306", "Order", "C4VBq5ZJSMbHXWd6", "conversation");
	mysqli_query($mysqli, "set names utf8");
	$createTableCommand = "CREATE TABLE chat_record (senderid varchar(50), messageid varchar(50), message varchar(2000))DEFAULT CHARSET=utf8";
	mysqli_query($mysqli, $createTableCommand);
	$senderId = $_POST["senderid"];
	$message = $_POST["message"];
	$messageId = createMessageId();
	$insertTableCommand = "INSERT INTO chat_record (senderid, messageid, message) VALUES ('$senderId', '$messageId', '$message')";
	mysqli_query($mysqli, $insertTableCommand);
	mysqli_close($mysqli);
}else if ($request == "receivemessage") {
	$mysqli = new mysqli("localhost:3306", "Order", "C4VBq5ZJSMbHXWd6", "conversation");
	mysqli_query($mysqli, "set names utf8");
	$createTableCommand = "CREATE TABLE chat_record (senderid varchar(50), message varchar(2000))DEFAULT CHARSET=utf8";
	mysqli_query($mysqli, $createTableCommand);
	$recordArray = array();
	$selectTableCommand = "SELECT * FROM chat_record";
	$result = mysqli_query($mysqli, $selectTableCommand);
	while ($row = mysqli_fetch_assoc($result)) {
		array_push($recordArray, $row);
	}
	echo json_encode($recordArray);
	mysqli_close($mysqli);
}

function createMessageId() {
	$currentTime = date("YmdHis");
	return $currentTime;
}

?>