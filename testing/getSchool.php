<!DOCTYPE html>
<html>
<body>

<?php
$str = file_get_contents("../data/schoolData.json");
$json = json_decode($str, true);

$variables = $json['schools']['CLB']['Beginner'];
echo $variables . PHP_EOL;
?>

</body>
</html>