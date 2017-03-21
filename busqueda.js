
fs = require("fs");

function buscar(bd,datos,callback){
    var registros=undefined;
    
    fs.readFile(bd + ".txt", "utf8", function(err,data){

        if(err){ 

            if(err.errno===(-4058)){
                console.log("Archivo de base de datos inexistente, se creara un arhico nuevo "+bd +".txt");
            }
            else
                console.log("ocurrio un error al acceder al archivo de la base de dato");
        }
        if(data!==undefined) {
            registros = JSON.parse(data);
            for (key in registros) {
                objeto = registros[key];
                for (var propiedad in objeto) {
                    var interno = objeto[propiedad];
                    if (interno.nombre === datos.nombre) {
                        
                        console.log('Nombre: ' + interno.nombre + ' Apellido: ' +  interno.apellido + ' cargo: ' + interno.cargo);
                        break;
                    }


                }


    

            }


        }
    });

}



function buscar(bd,datos,call1){

}


var dato = {ID:"3ce722a62d48c2fe73c2fd0390f31c18bd5ba6f6"};
//El dato a buscar seran todos los del id en este caso.
busqueda("empleados",dato,buscar);





