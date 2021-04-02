<?php

header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: OPTIONS, POST, GET, DELETE');
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Headers: Origin, Content-type, Accept, Token');

$rutaImagenes = 'http://'.$_SERVER['HTTP_HOST'].'/API_REST/API_select-team/Storage';

$equipos = Array(
	"equipo_A" => [
		["id" => 1,"name" => "Jugador_1A", "equipo" => "A"],
		["id" => 2, "name" => "Jugador_2A", "equipo" => "A"],
		["id" => 3, "name" => "Jugador_3A", "equipo" => "A"],
		["id" => 4, "name" => "Jugador_4A", "equipo" => "A"],
		["id" => 5, "name" => "Jugador_5A", "equipo" => "A"],
		["id" => 6, "name" => "Jugador_6A", "equipo" => "A"],
		["id" => 7, "name" => "Jugador_7A", "equipo" => "A"],
		["id" => 8, "name" => "Jugador_8A", "equipo" => "A"],
		["id" => 9, "name" => "Jugador_9A", "equipo" => "A"],
		["id" => 10, "name" => "Jugador_10A", "equipo" => "A"],
		["id" => 11, "name" => "Jugador_11A", "equipo" => "A"],
		["id" => 12, "name" => "Jugado_12A", "equipo" => "A"],
		["id" => 13, "name" => "Jugador_13A", "equipo" => "A"],
		["id" => 14, "name" => "Jugador_14A", "equipo" => "A"]
	],
	"equipo_B" => [
		["id" => 1,"name" => "Jugador_1B", "equipo" => "B"],
		["id" => 2, "name" => "Jugador_2B", "equipo" => "B"],
		["id" => 3, "name" => "Jugador_3B", "equipo" => "B"],
		["id" => 4, "name" => "Jugador_4B", "equipo" => "B"],
		["id" => 5, "name" => "Jugador_5B", "equipo" => "B"],
		["id" => 6, "name" => "Jugador_6B", "equipo" => "B"],
		["id" => 7, "name" => "Jugador_7B", "equipo" => "B"],
		["id" => 8, "name" => "Jugador_8B", "equipo" => "B"],
		["id" => 9, "name" => "Jugador_9B", "equipo" => "B"],
		["id" => 10, "name" => "Jugador_10B", "equipo" => "B"],
		["id" => 11, "name" => "Jugador_11B", "equipo" => "B"],
		["id" => 12, "name" => "Jugado_12B", "equipo" => "B"],
		["id" => 13, "name" => "Jugador_13B", "equipo" => "B"],
		["id" => 14, "name" => "Jugador_14B", "equipo" => "B"]
	],
	"camisetas" => [
		"camiseta_A" => $rutaImagenes.'/shirt_ARG.png',
		"camiseta_B" => $rutaImagenes.'/shirt_ICE.png'
	]
);

echo json_encode($equipos);











 ?>