<?php

$cfg = "local";
//$cfg = "miod";

if($cfg == "local"){
    $db = 'localhost';
    $dbun = '';
    $dbup = '';
    $dbname = '';
} else {
    $db = 'localhost';
    $dbun = '';
    $dbup = '';
    $dbname = '';
}

// Create connection
$conn = new mysqli($db, $dbun, $dbup, $dbname);


if($cfg == "local"){
    $db2 = 'localhost';
    $dbun2 = '';
    $dbup2 = '';
    $dbname2 = '';
} else {
    $db2 = 'localhost';
    $dbun2 = '';
    $dbup2 = '';
    $dbname2 = '';
}

// Create connection
$conn_rec = new mysqli($db2, $dbun2, $dbup2, $dbname2);
?>
