 <?php
$mysqli_hostname = "fqzx.myd.infomaniak.com";
$mysqli_user = "fqzx_gangsideste";
$mysqli_password = "Tcoe2016??6102eocT";
$mysqli_database = "fqzx_mydropintheoceansorg18";

$prefix = "";

$abd = mysqli_connect($mysqli_hostname, $mysqli_user, $mysqli_password, $mysqli_database);

if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    //you need to exit the script, if there is an error
    exit();
}

?> 