<?php 

$datos=array(
			   "Nombre" => $_POST["nombre"],
			   "Apellido" => $_POST["apellido"],
			   "Dni" => $_POST["dni"],
			   "Nacionalidad" => $_POST["nacionalidad"],
			   "Provincia" => $_POST["provincia"],
			   );
	$json_personas=json_encode($datos);
	$archivo=fopen("probando.json","w+");	
	//file_put_contents($archivo,$json_personas,FILE_APPEND); no pude encontrar como usar el append siempre me guarda el ultimo
	fwrite($archivo,$json_personas);
	
	fclose($archivo);
?>