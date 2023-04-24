<?php
require_once './db.php';
$db = new db();
$conexion = $db->conexion();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$datos = json_decode(file_get_contents('php://input'),true);

$consulta = $conexion->prepare('SELECT * FROM pokemonuser WHERE id = ?');
$resultado = $consulta->execute([
    $datos['id'],
]);
$datosSacados = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datosSacados);

?>