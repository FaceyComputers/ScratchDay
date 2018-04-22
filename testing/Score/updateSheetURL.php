<!DOCTYPE HTML>
<html>  
<body>
<?php
	$url = $_POST["sheetURL"];
	$urlText = fopen("sheetURL.txt","w") or die("Unable to open file!");
	fwrite($urlText,$url);
	fclose($urlText);
	echo "Scoreboard URL parameter changed successfully";
?>
</body>
</html>
