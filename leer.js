fs = require("fs")


function leer(bd){
			//variable donde guardaremos nuestros registros del archivod e bd.
			var registros = undefined;

			fs.readFile(bd+".txt",'utf8', function (err,data) {						
		  	 if (err) {
		   		//si el archivo es inexistente:
		    	if(err.errno===(-4058)){
		    		console.log("Archivo de base de datos inexistente, se creara un arhico nuevo " +".txt");	
		    		}
		    	else
		    		console.log("ocurrio un error al acceder al archivo de la base de dato");		    		
		    }

		    //se elimina la , inicial del primer registro insertado, si existe el archivo.
		    //a mejorar : verificar si es el primero, no ingrese la coma (linea 47).
		   	if(data!==undefined){ 	
				registros = JSON.parse(data);


				//console.log(registros.empleados);


				for(key in registros){
					objeto = registros[key];
				    for (var propiedad in objeto) {				     
				        	var interno = objeto[propiedad];
				        	for(var atributo in interno){
				        		console.log(atributo+"->"+interno[atributo]);
				        	}			  	 		
				   	 	}
				   	 }
				   	}
				   });
		}


leer('empleados');