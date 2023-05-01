<?php
require_once './db.php';
$db = new db();
$conexion = $db->conexion();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$datos = json_decode(file_get_contents('php://input'),true);
$hash = password_hash($datos['pass'], PASSWORD_DEFAULT);

if($datos['pass'] != $datos['pass2']){
    echo json_encode(false);
    return;
}

if(!preg_match('/^[a-zA-Z0-9_-]{3,16}$/', $datos['user'])) {
    echo json_encode(false);
    return;
}

if(!preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $datos['email'])) {
    echo json_encode(false);
    return;
}

if(!preg_match('/\S+/', $datos['pass']) || !preg_match('/\S+/', $datos['pass2'])){
    echo json_encode(false);
    return;
}

$consulta = $conexion->prepare('INSERT INTO `users` (`id`, `nickname`, `password`, `email`, `creationDate`) VALUES (NULL, ?, ?, ?, ?); ');
$resultado = $consulta->execute([
    $datos['user'],
    $hash,
    $datos['email'],
    date('Y-m-d H:i:s')
]);

if($resultado) { echo json_encode(true); }
else { echo json_encode(false); }

?>