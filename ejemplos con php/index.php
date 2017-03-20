<html>
<head>
	<title>Formulario</title>
</head>
<body>
<center>
	<form method="post" action="formulario.php">
		<table border="1" style="color:red;">
		<tr>
			<td>Nombre:</td>
			<td><input type="text" name="nombre" placeholder="Nombre"></td>
		</tr>
		<tr>
			<td>Apellido</td>
			<td><input type="text" name="apellido" placeholder="Apellido"></td>
		</tr>
		<tr>
			<td>Dni</td>
			<td><input type="text" name="dni" placeholder="00000000"></td>
		</tr>
		<tr>
			<td>Nacionalidad</td>
			<td><input type="text" name="nacionalidad" placeholder="Nacionalidad"></td>
		</tr>
		<tr>
			<td>Provincia</td>
			<td><input type="text" name="provincia" placeholder="Provincia"></td>
		</tr>
		</table>
		<input type="submit" name="btn" value="Enviar">
	</form>
<center>
</body>
</html>