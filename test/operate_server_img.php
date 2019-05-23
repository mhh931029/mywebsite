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








// var_dump(array_keys($_POST));
// list($type, $data) = explode(',', $pic);
// if(strstr($type,'image/jpeg')!=''){  
//     $ext = '.jpg';  
// }elseif(strstr($type,'image/gif')!
// =''){  
//     $ext = '.gif';  
// }elseif(strstr($type,'image/png')!=''){  
//     $ext = '.png';  
// }
// $photo = time().$ext;
// file_put_contents($photo, base64_decode($data), true);
// if($pic){
// 	// 上传的路径，建议写物理路径
// 	$uploadDir = 'file:///Users/MAPLE/Desktop/uploadDir';
// 	// 创建文件夹
// 	if(!file_exists($uploadDir)){
// 		mkdir($uploadDir, 0755);
// 	}
// 	// 将临时文件 移动到我们指定的路径，返回上传结果
// 	$upload_ret = move_uploaded_file($photo, $uploadDir) ? "succeeded" : "failed";
// }
// echo $upload_ret;
// return $upload_ret;
?>