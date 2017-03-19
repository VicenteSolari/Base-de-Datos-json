//imports
var crypto = require('crypto');
fs = require("fs");


function newID(){
//funcion de generar HASH ID unico.
var current_date = (new Date()).valueOf().toString();
var random = Math.random().toString();
return crypto.createHash('sha1').update(current_date + random).digest('hex');
}


function leer(bd,datos,callback){
			//variable donde guardaremos nuestros registros del archivo de bd.
			var registros;
			fs.readFile(bd+".txt",'utf8', function (err,data) {						
		  	 if (err) {
		   		//si el archivo es inexistente:
		    	if(err.errno===(-4058)){
		    		console.log("Archivo de base de datos inexistente, se creara un arhico nuevo " +".txt");	
		    		}
		    	else
		    		console.log("ocurrio un error al acceder al archivo de la base de dato");		    		
		    }
		   registros=data;
		   	/*console.log(registros['empleados']);
		   	registros['empleados'].push(datos);
		   	console.log(registros['empleados']);
		   	console.log(registros['empleados'].length);*/
		    		    //se elimina la , inicial del primer registro insertado, si existe el archivo.
		    //a mejorar : verificar si es el primero, no ingrese la coma (linea 47).		
		    callback(bd,registros,datos);
		  });
	
}

/*
function comparar(bd,registros,datos,callback){
		  
	 verificar si ya no hay un dato cargado con exactamente los mismos atributos (?)
		callback(bd,info,datos);
		}
*/	


function escribir(bd,registros,datos){
	//si llegar por parametros que ya existe, no lo cargamos.
	if(datos === 'EXISTENTE'){
		'Ya existe un registro con estos datos'
	}

	else{
		//si es un archivo nuevo, si la bd vacia.
		if(registros === undefined){
			//generar estructura json {}: 

			var objeto = JSON.parse('{"empleados":[]}');
			objeto["empleados"].push(datos);
			var info = JSON.stringify(objeto); 

			fs.appendFile(bd+".txt",  info , function(err) {			
		    if(err) {
		        return console.log("Error al intentar guardar en el archivo de base de dato " + bd);
			    	}
			    console.log("Se guardo correctamente el registro \n" + info);

					} 
			)


		}

		else{
			//si existe un archivo,cargarlo en base 
			var objeto=JSON.parse(registros);
			objeto[bd].push(datos);
			console.log(objeto[bd]);
			var info = JSON.stringify(objeto); 
			console.log(info);
			fs.writeFile(bd+".txt", info , function(err) {			
		    if(err) {
		        return console.log("Error al intentar guardar en el archivo de base de dato " + bd);
			    	}
			    console.log("Se guardo correctamente el registro\n");
			    //*****************_FALTA DEBUGGEAR_**************
			    /*for(key in registros){
					objeto = registros[key];
				    for (var propiedad in objeto) {				     
				        	var interno = objeto[propiedad];
				        	for(var atributo in interno){
				        		console.log(atributo+"->"+interno[atributo]);
				        	}			  	 		
				   	 	}
				   	 }*/
					} 
			)
		}
	}
}

function insertar(bd,datos,callback){
	//recuperar datos para evaluar repeticion.
		callback(bd,datos,escribir);//el callback es leer		
}

//primer parametros base de datos a impactar
//segundo parametro estructura tipo JSON.



var hashID = newID();
var dato = {ID:hashID,nombre:"Laura",apellido:"Fernandez",cargo:"Administradora"};

insertar('empleados',dato,leer);