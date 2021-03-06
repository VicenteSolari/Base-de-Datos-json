/**
 * Created by Pablo on 20/3/2017.
 */

//Modificar BD para que cada registro tenga un atributo: estado para saber si es un empleado dado de Alta o dado de Baja ya que no se puede
//eliminar un empleado de la base de datos produciria inconsistencia.

//Es el mismo archivo que subio pablo, pero lo modifique para que haga lo contario. (Dar de alta un empleado)

fs = require("fs");

function restaurar(bd,datos,callback){
    var registros=undefined;
    fs.readFile(bd+".txt","utf8",function(err,data){
        if(err){

            if(err.errno===(-4058)){
                console.log("Archivo de base de datos inexistente, se creara un archivo nuevo "+bd +".txt");
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
                        if(interno.estado==="Deshabilitado")
                            interno.estado="Habilitado";
                        else
                            console.log("Empleado ya se encuentra dado de alta");
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
            return console.log("Error al intentar eliminar empleado " + bd);
        else{
            fs.writeFile(bd+".txt",info , function(err) {
                if(err) {
                    return console.log("Error al intentar guardar en el archivo de base de dato " + bd);
                }
                console.log("Se dio de alta empleado correctamente \n" + info);

            });
        }
    });
}

function primeroRestaura(bd,datos,call1){
    call1(bd,datos,escribir);
}

var dato = {ID:"07eb91590cadb5725796b5273439767781af9f4b",nombre:"Laura",apellido:"Fernandez",cargo:"Administradora",estado:"Deshabilitado"};
//Clave ID que se utiliza para buscar el empleado a dar de alta
primeroRestaura("empleados",dato,restaurar);






