//AtributoDeFiltrado nombre de una propiedad del JSON
//valor con el que va a comparar según la comparación
//comparacion -2 menor o igual, -1 equivale a menor, 0 equivale a igual, 1 equivale a mayor,2 mayor o igual. por ejemplo buscarFiltrado('empleados','edad',2,18) ->busca a los mayores de 18 años
let fs = require('fs');
function buscarFiltrado(bd,AtributoDeFiltrado,valor,comparacion){
fs.readFile(bd+'.txt','utf-8',function(error,data){
	if(error) return console.log(error);

	var jeison= JSON.parse(data);
	var atributo;

	for(var propiedad in jeison['empleados'][0])
		{
			if(propiedad.toLowerCase()===AtributoDeFiltrado.toLowerCase())
				atributo=propiedad;
		}
	if(atributo === undefined)
	{
		console.log('El atributo ingresado no fue encontrado en la estructura')
	}
	else
	{

		switch(comparacion)
		{
			case -2:{
					for(var empleado in jeison['empleados'])
					{
						if(jeison['empleados'][empleado][atributo]<=valor)
						console.log(jeison['empleados'][empleado]);
					}break;
					}
			case -1:{
					for(var empleado in jeison['empleados'])
					{
						if(jeison['empleados'][empleado][atributo]<valor)
						console.log(jeison['empleados'][empleado]);
					}break;
					}
			case 0:{
					for(var empleado in jeison['empleados'])
					{
						if(jeison['empleados'][empleado][atributo]===valor)
						console.log(jeison['empleados'][empleado]);
					}break;
					}
			case 1:{
					for(var empleado in jeison['empleados'])
					{
						if(jeison['empleados'][empleado][atributo]>valor)
						console.log(jeison['empleados'][empleado]);
					}break;
					}
			case 2:{
					for(var empleado in jeison['empleados'])
					{
						if(jeison['empleados'][empleado][atributo]>=valor)
						console.log(jeison['empleados'][empleado][atributo]);
					}break;
					}							
		}
		
	}
});
}

//buscarFiltrado('empleados','edad',0,2);//Busca los empleados que tengan una edad mayor o igual a 0
//buscarFiltrado('empleados','edad',25,-2);//Busca los empleados que tengan una edad menor o igual a 25
//buscarFiltrado('empleados','cargo','CEO',0); //Busca los empleados que el cargo sea === a CEO
//buscarFiltrado('empleados','edad',21,1);//Busca los empleados mayores de 21
buscarFiltrado('empleados','edad',35,-1);//Busca los empleados menores a 35 años