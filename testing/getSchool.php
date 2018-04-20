<!DOCTYPE html>
<html>
<body>

<?php
$str = file_get_contents("../data/schoolData.json");
$json = json_decode($str, true);

    for($a = 0; $a <= count($json['schools']) - 1; $a++)
    {
	$stringvariable = (string)$a;
	$variables = $json['schools'][$stringvariable]['fullName'];
	echo $variables . PHP_EOL;
	}
?>

</body>
</html>