const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoDb=require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/myproject';
const mongodb=require('mongodb');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//una sola conexión
// /api/collection/acción
// /auth/
let database ;
 MongoDb.connect(url,(err,db)=>{
	if(err)
		return console.log(err);
	database= db;
});

const collectionList=['telefono','personas'];
app.post('/colecciones',(req,res)=>{
	database.listCollections().toArray((err,collInfo)=>{
		if(err)
			res.json({error:err});
		else
			res.json(collInfo);
	});
});
//Listar
app.get('/:collection/listar',(req,res)=>{
	let indice=collectionList.indexOf(req.params.collection);
	if(indice !== -1)
	{
		let collection=database.collection(req.params.collection);
		collection.find({}).toArray((err,data)=>{
			if(err) return console.log(err);
			res.json(data);
		});
	}
	else
		res.json({success:false, message:'Colección inexistente'});
});
//Insertar
app.post('/:collection/insert',(req,res)=>{
	let collection=database.collection(req.params.collection);
	collection.insert(req.body,(err,resp)=>{
		if(err)
			res.json({success:false , message:err});
		else
			res.json({success:true , message:'el id insertado es:' +resp.insertedIds});
	});
});
//Borrar
app.get('/:collection/delete',(req,res)=>{
	if(req.query.id)
	{
		let idBorrar=req.query.id;
		let collection=database.collection(req.params.collection);
		collection.deleteOne({_id:new mongodb.ObjectID(idBorrar)},(err,result)=>{
			if(err) 
				res.json({success:false , message: err});
			else if(result.result.n>0)
				res.json({success:true , message:'Borrado correctamente'+idBorrar});
			else
				res.json({success:false , message:'No se pudo eliminar'})			
		});			
	}
	else
	{
		res.json({success:false , message:'No se ingresó un ID'});
	}
});
//Actualizar
app.post('/:collection/update',(req,res)=>{
	let idAct=req.query.id;
	console.log(idAct);
	console.log(req.body);
	if(idAct)
	{	
		let collection=database.collection(req.params.collection);
		personas.updateOne({_id: new mongodb.ObjectID(idAct)},{$set: req.body},(error,resulta)=>{
			if(error)
			 res.json({success:false , message:error });
			else
				res.json({success:true ,message: 'se ha actualizado correctamente'});//retornar success true o error 
			//res.send('Estamos en update y se actualizo el registro con id:'+ idAct);
		});
	}
});
app.listen(4444,()=>console.log('server running http://localhost:4444'));
//req.body estoy en las variables que manda por post
//middleware funciones en el medio cuando pasa al req pasan transformado los datos
//req.query variables de get