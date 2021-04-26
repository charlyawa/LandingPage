<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header = "X-Mailer: PHP/" . phpversion() . " \r\n";
$header = "Mime-Version: 1.0  \r\n";
$header = "Content-Type: text/plain";

$message = "Message sent by: " . $name . " \r\n";
$message = "Your email is: " . $mail . " \r\n";
$message = "Message: " . $_POST['message'] . " \r\n";
$message = "Shipping date: " .date('d/m/Y', time());

$para = 'xxxxxxxxxxxxx@gmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>