<?php
$destinatario = 'suarezjavierkeim@gmail.com';
//esto es a quien le llega

$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['msg'];
$email = $_POST['email'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];

$header = "Enviado desde pagina web";
$mensajeCompleto =  "\nEnviado por : " . $nombre . "\nCorreo electronico". $email. "\n ". "\n ".$mensaje ."\n "."\n ";
if(filter_var($email, FILTER_VALIDATE_EMAIL)){


    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo"<script>alert('mensaje enviado')</script>";
    echo"<script> setTimeout(\"location.href='index.html'\",500)</script>";
}else{
    echo"<script>alert('El mensaje no se ha enviado')</script>";
    echo"<script> setTimeout(\"location.href='contacto.html'\",500)</script>";
}



?>