<?php

// include 'ChromePhp.php';
// ChromePhp::log('Hello console!');
// ChromePhp::log($_SERVER);


// 名前づけ
$ip = $_SERVER["REMOTE_ADDR"] ;
$ipname = ip2long($ip) ;
$timestamp = time();
$filename = strval($ipname).strval($timestamp) ;

// ファイルの取得と保存
$data = $_POST["data"];
$imageName = "download/".$filename.".jpg";
$fp = fopen($imageName, "w");
fwrite($fp, base64_decode($data));
fclose($fp);

$picurl = "https://pecori-faceapp.ssl-lolipop.jp/".$imageName;

// ChromePhp::log($picurl);

echo $picurl;

?>