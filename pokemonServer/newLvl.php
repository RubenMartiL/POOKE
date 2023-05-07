<?php
require_once './db.php';
$db = new db();
$conexion = $db->conexion();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$datos = json_decode(file_get_contents('php://input'),true);

$idPokemon = $datos['idPokemon'];
$newProgress = $datos['progress'];
$lvl = $datos['lvl'];

$consulta = $conexion->prepare('UPDATE pokemonUser SET lvl_progress = ?, lvl_pokemon = ? WHERE id = ?');
$resultado = $consulta->execute([
    $newProgress,
    $lvl,
    $idPokemon,
]);

$datosSacados = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datosSacados);

?>