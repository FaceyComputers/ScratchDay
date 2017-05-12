<!DOCTYPE HTML>
<html>  
<body>
<?php
	$school = $_POST["school"];
	$points = $_POST["points"];
	$json = json_decode(file_get_contents("data.json"),true);
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
	$full = $json["schools"][$school]["fullName"];
	echo "$full just earned $points points!";
	$data = fopen("data.json","w");
	fwrite($data,json_encode($json,JSON_PRETTY_PRINT));
	fclose($data);
?>
</body>
</html>
