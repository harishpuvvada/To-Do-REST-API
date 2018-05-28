// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

	if(err){

		//return - just to make sure rest of code wont execute
		return console.log('Unable to connect MongoDB server');

	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({

	// 	text: 'something to do',
	// 	completed : false

	// }, (err, result)=>{

	// 	if (err){

	// 		return console.log('Unable to insert Todo');

	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));

	// });


	// db.collection('Users').insertOne({

	// 	name : 'Hari',
	// 	age : '24',
	// 	location : 'NY'


	// },(err, result)=>{

	// 	if(err){

	// 		return  console.log("Unable to insert user",err);

	// 	}

	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
	// });



	db.close();

});