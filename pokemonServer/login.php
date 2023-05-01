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
if(count($datosSacados) > 0) { 
    if(password_verify($datos['password'], $datosSacados[0]['password'])){
        echo json_encode($datosSacados); 
    }else{
        echo json_encode(false);
    }
}
else { echo json_encode(false); }

?>