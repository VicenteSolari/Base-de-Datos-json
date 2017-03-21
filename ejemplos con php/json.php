<?php 
	require("php-json-file-decode/json-file-decode.class.php");
	$personas= array("personas" => array(
		array(
		"Nombre" => "Jose",
		"Apellido" => "Sans",
		"Dni" => 34567338,
		"Nacionalidad" => "Argentina",
		"Provincia" => "San luis"
		),
		array(
		"Nombre" => "Raul",
		"Apellido" => "Amieva",
		"Dni" => 83599338,
		"Nacionalidad" => "Argentina",
		"Provincia" => "Mendoza"	
		),
		array(
		"Nombre" => "Maria",
		"Apellido" => "Saez",
		"Dni" => 23457338,
		"Nacionalidad" => "Argentina",
		"Provincia" => "Buenos Aires"
		),
	));
	
	$json_personas = json_encode($personas);
	//var_dump($json_alumnos); esto es para ver que tiene el archivo
	
	//creamos el archivo json

	$archivo=fopen("personas.json","w+");
	fwrite($archivo,$json_personas);
	fclose($archivo);
	
	$read = new json_file_decode();
	$json = $read->json("personas.json");
	
	//mostrar los datos en una tabla
	
	echo '<table>';
			echo '<th>Nombre</th><th>Apellido</th><th>Dni</th><th>Nacionalidad</th><th>Provincia</th>';
			for($x=0;$x<count($json["personas"]);$x++)
			{
				echo '<tr>';
						echo '<td>'.$json["personas"][$x]["Nombre"].'</td>';
						echo '<td>'.$json["personas"][$x]["Apellido"].'</td>';
						echo '<td>'.$json["personas"][$x]["Dni"].'</td>';
						echo '<td>'.$json["personas"][$x]["Nacionalidad"].'</td>';
						echo '<td>'.$json["personas"][$x]["Provincia"].'</td>';
				echo '</tr>';
			}
	echo '</table>';
	
?>