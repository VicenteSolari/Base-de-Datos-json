
/*var fs=require('fs');
var content=fs.readFileSync('dbEmpleado.json','utf8');
console.log(content);//muestra todo el contenido del archivo jsoon
*/


var fs = require('fs');
fs.readFile('dbEmpleado.json', 'utf8', function (err, data) {
  if (err) throw err;
  var jsonData = JSON.parse(data);
  console.log("--------------Personas --------");
  for (var i = 0; i < jsonData.length; ++i) {
    console.log("Dni :"+jsonData[i].Dni);
    console.log("Nombre :"+jsonData[i].Nombre);
    console.log("Apellido :"+jsonData[i].Apellido);
    console.log("----------------------------------------");
  }
});
