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

$consulta = $conexion->prepare('DELETE FROM userTeam WHERE id_user = ?');
$resultado = $consulta->execute([
    $idUsuario,
]);

$datosSacados = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datosSacados);

?>