<!DOCTYPE html>
<html>
<body>

        <?php
$str = file_get_contents("test.json");
$json = json_decode($str, true);

$variable = $json['schools']['CLB']['fullName'];
echo $variable . PHP_EOL;
?>

</body>
</html>