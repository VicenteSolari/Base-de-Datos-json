/**
 * Created by Marcos on 20/3/2017.
 */



fs = require("fs");

function modificar(bd,datos,callback){
    var registros=undefined;
    fs.readFile(bd+".txt","utf8",function(err,data){

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
                    if (interno.ID === datos.ID) {
                        interno.nombre = datos.nombre;
                        interno.apellido = datos.apellido;
                        interno.cargo = datos.cargo;
                        break;
                    }


                }


                var info = JSON.stringify(registros);


                callback(bd, info);

            }


        }
    });

}
function escribir(bd,info){



    fs.unlink(bd+".txt", function(err) {
        if(err)
            return console.log("Error al intentar modificar el archivo " + bd);
        else{
            fs.writeFile(bd+".txt",info , function(err) {
                if(err) {
                    return console.log("Error al intentar guardar en el archivo de base de dato " + bd);
                }
                console.log("Se modifico correctamente el registro \n" + info);

            });
        }
    });


}

function paramodificar(bd,datos,call1){
    call1(bd,datos,escribir);
}


var dato = {ID:"3ce722a62d48c2fe73c2fd0390f31c18bd5ba6f6",nombre:"pedro",apellido:"fernandez",cargo:"copado"};
//la clave para esta modificacion es el ID ,el cual se pasa en "dato" como parametro de la llamada a la funcion paramodificar
paramodificar("empleados",dato,modificar);






