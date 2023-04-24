<?php
require_once './db.php';
$db = new db();
$conexion = $db->conexion();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$datos = json_decode(file_get_contents('php://input'),true);

$consulta = $conexion->prepare('SELECT * FROM users WHERE nickname = ? && password = ?');
$resultado = $consulta->execute([
    $datos['nickname'],
    $datos['password']
]);
$datosSacados = $consulta->fetchAll();

if(count($datosSacados) > 0) { echo json_encode(true); }
else { echo json_encode(false); }

?>