<!DOCTYPE HTML>
<html>  
<body>
<?php
	$school = $_POST["school"];
	$points = $_POST["points"];
	$json = json_decode(file_get_contents("test.json"),true);
	switch ($points) {
		case 3:
			$json["schools"][$school]["Beginner"] += $points;
			break;
		case 5:
			$json["schools"][$school]["Intermediate"] += $points;
			break;
		case 15:
			$json["schools"][$school]["Advanced"] += $points;
			break;
	}
	$json["schools"][$school]["Total"] += $points;
	//echo "$school just earned $points points!";
	echo $json["schools"][$school]["Total"];
	$data = fopen("test.json","w");
	fwrite($data,json_encode($json));
	fclose($data);
?>
</body>
</html>