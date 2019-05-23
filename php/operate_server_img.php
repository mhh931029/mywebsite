<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
error_reporting(0);
$response = array();
//创建目录
$destination = "img_folder";
$mkdirResult = mkdir($destination);
for ($i = 0; $i < count($_FILES); $i ++) {
	// print_r($_FILES["photo".$i])."///";
	$filename = time().$i.substr($_FILES["photo".$i]["name"], strrpos($_FILES["photo".$i]["name"], "."));
	if(move_uploaded_file($_FILES["photo".$i]["tmp_name"], $destination.$filename)){     
	    $response["photo".$i]["photo_name"] = "$destination/$filename";
	    $response["photo".$i]["photo_resolution"]["width"] = getimagesize("$destination/$filename")[0];
	    $response["photo".$i]["photo_resolution"]["height"] = getimagesize("$destination/$filename")[1];
	}else{  
	    exit();  
	} 
}
echo json_encode($response);
?>