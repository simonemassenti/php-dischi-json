<?php
//Preleviamo il file JSON
$string = file_get_contents("dischi.json");

header("Content-Type: application/json");
echo $string;

?>