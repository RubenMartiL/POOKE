<?php
require_once './db.php';
$db = new db();
$conexion = $db->conexion();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$datos = json_decode(file_get_contents('php://input'),true);

$consulta = $conexion->prepare('SELECT id FROM users WHERE nickname = ?');
$resultado = $consulta->execute([
    $datos['nickname'],
]);
$datosSacados = $consulta->fetchAll();
$idUsuario = $datosSacados[0]['id'];

$consulta = $conexion->prepare("INSERT INTO userteam (id, id_user, id_pokemon,position) VALUES (NULL, ?, ?, ?); ");
$resultado = $consulta->execute([
    $idUsuario,
    $datos['pokemon'],
    $datos['position']
]);

$datosSacados = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datosSacados);

?>