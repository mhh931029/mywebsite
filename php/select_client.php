<?php
ini_set("session.cookie_httponly", 0);
header('Content-Type: text/html; charset=utf-8');
header("Access-Control-Allow-Origin: *");
if ($_SERVER["REQUEST_METHOD"] == "POST"){
	$username = $_POST["username"];
	$usernameArray = str_split($username);
	for ($i = 0; $i < $usernameArray.count; $i++) {
		if ($usernameArray[$i] == " "){
			unset($usernameArray, $i);
		}
	}
	$username = implode("", $usernameArray);
	$password = $_POST["password"];
	$mysqli = new mysqli("vdjfidimbhee.mysql.sae.sina.com.cn", "maierlefu", "qweqwe123","registration","10033");
	if ($mysqli->connect_errno){
		die("Couldn't connect:".mysqli_error($mysqli)."<br/>");
    }
	$mysqli->query("set names utf8");
	$checkQuery = mysqli_query($mysqli, "SELECT * FROM clients WHERE username = '$username' AND password = '$password'");
	if ($row = mysqli_fetch_assoc($checkQuery)) {
	    $sessionId = hash("sha1", $username.date("Y-m-d H:i:s"), false);
	    session_id($sessionId);
        session_start();
	    $_SESSION["username"] = $username;
	    $mysqli->query("UPDATE clients SET PHPSESSID = '$sessionId' WHERE username = '$username'");
		//登录成功后跳转至主页
        echo "<script> window.location.href = 'http://www.maierlefu.com'</script>";
        exit;
	}else{
		$mysqli->query("UPDATE clients SET PHPSESSID = '' WHERE username = '$username'");
		echo "<h1 style='color: blue;'><i>登录失败!5秒后返回登录页面!</i></h1>";
		echo "<script>var timer = setInterval(function(){window.location.href = '../login/login.html'; clearInterval(timer);}, 5000);</script>";
        exit;
	}
	$mysqli->close();
}else if ($_SERVER["REQUEST_METHOD"] == "GET") {
		$mysqli = new mysqli("vdjfidimbhee.mysql.sae.sina.com.cn", "maierlefu", "qweqwe123","registration","10033");
        if ($mysqli->connect_errno) 
            die("Couldn't connect:".mysqli_error($mysqli)."<br/>");
        $mysqli->query("set names utf8");
        $receivedSessionId = $_GET["PHPSESSID"];
    	//echo $receivedSessionId;
        if($_COOKIE["PHPSESSID"] == $receivedSessionId) {
            $checkQuery = mysqli_query($mysqli, "SELECT clinicname FROM clients WHERE PHPSESSID = '$receivedSessionId'");
            if ($row = mysqli_fetch_assoc($checkQuery)) {
                echo "client is".$row["clinicname"]."client name ends";
            }
        }else{
            session_start();
            $_SESSION = array();
            if (isset($_COOKIE[session_name()])) {
                setcookie('PHPSESSID','',time()-1,'/');
            }
            session_destroy();
            echo "need login";
        }
       $mysqli->close();
}

?>
