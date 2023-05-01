<?php
require_once './db.php';
$db = new db();
$conexion = $db->conexion();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$datos = json_decode(file_get_contents('php://input'),true);

$consulta = $conexion->prepare('SELECT * FROM users WHERE nickname = ?');
$resultado = $consulta->execute([
    $datos['nickname'],
]);
$datosSacados = $consulta->fetchAll();
$idUsuario = $datosSacados[0]['id'];
$newMoney = $datosSacados[0]['money'] - $datos['money'];

$consulta = $conexion->prepare('UPDATE users SET money = ? WHERE id = ?');
$resultado = $consulta->execute([
    $newMoney,
    $idUsuario,
]);

$datosSacados = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datosSacados);

?>