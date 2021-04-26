<?php
    $destinatario = 'https://www.facebook.com/';
    
    $name = $_POST['name'];
    $mail = $_POST['mail'];
    $message = $_POST["message"];


    $header = "Enviado desde la pagina CarlosCs";
    $messageComplete = $message . "\nAtentamente: " . $name;

    mail($destinatario, $messageComplete, $header);
    echo "<script>alert('correo enviado exitosamente')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>