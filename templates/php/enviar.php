<?php
    //VARIABLES DEL FORMULARIO
    $nombre = $_POST["user"];
    $correo = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    //BASE DE DATOS
    $conexion = mysqli_connect("localhost", "root", "", "pagina");
    $insertar = "INSERT INTO formulario (user, email, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";
    
    //CONSULTA
    $resultado = mysqli_query($conexion, $insertar);

    if (!$resultado){
        echo 'ERROR AL MANDAR EL FORMULARIO | ANDINOS RP'
    }else{
        echo 'FORMULARIO ENVIADO EXITOSAMENTE | ANDINOS RP'
    }

    //FIN
    mysqli_close($conexion);
?>