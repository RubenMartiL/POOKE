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
$consulta = $conexion->prepare("INSERT INTO pokemonUser (id_user, id_pokemon, name_pokemon, lvl_pokemon, ivs_ps_pokemon, ivs_attack_pokemon, ivs_defense_pokemon, ivs_sattack_pokemon, ivs_sdefense_pokemon, ivs_speed_pokemon, evs_ps_pokemon, evs_attack_pokemon, evs_defense_pokemon, evs_sattack_pokemon, evs_sdefense_pokemon, evs_speed_pokemon, naturaleza, move_one, move_two, move_three, move_four) VALUES (?, ?, NULL, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, ?, ?, ?, ?);");
$resultado = $consulta->execute([
    $idUsuario,
    $datos['pokemonId'],
    $datos['move1'],
    $datos['move2'],
    $datos['move3'],
    $datos['move4']
]);

$datosSacados = $consulta->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datosSacados);

?>