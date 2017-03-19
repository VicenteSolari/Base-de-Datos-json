//agregar los parametros para que filtre la consulta en base a algún atributo y algun valor que se le pase
var fs = require('fs');
function buscarFiltrado(bd){
	var coinciden=false;
fs.readFile(bd+'.txt','utf-8',function(error,data){
	if(error) return console.log(error);
	var jeison= JSON.parse(data);
	
	for(var identificador in jeison['empleados'])
		{
			
				console.log('Nombre: '+jeison['empleados'][identificador].nombre + '. Apellido:' + jeison['empleados'][identificador].apellido + ' .Cargo:' + jeison['empleados'][identificador].cargo );
		}

});
}

buscarFiltrado('empleados');