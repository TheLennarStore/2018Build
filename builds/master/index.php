<?php
  session_start();
  include_once "_php/connect.php";
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="_img/favicon.bmp">

    <title></title>

    <link rel="stylesheet" href="_css/main.min.css">
    <link rel="stylesheet" href="_css/tether.min.css">
    <link rel="stylesheet" href="_css/bootstrap.min.css">
    <link rel="stylesheet" href="_css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="_css/bootstrap-reboot.min.css">
</head><!--end head-->
<body class="index">

<div id="main">

<?php
  include_once "_php/navigation.php";
?>



</div><!--main_index_body-->

<?php
  include_once "_php/footer.php";
  $conn->close(); // close all connections
?>
</body><!--end body -->
</html><!--end HTML -->