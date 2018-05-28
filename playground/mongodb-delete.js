// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

	if(err){

		//return - just to make sure rest of code wont execute
		return console.log('Unable to connect MongoDB server');

	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').deleteMany({text:'eat some shit'}).then((result)=>{


	// 	console.log(result);


	// });

	// db.collection('Todos').deleteOne({text:'eat dinner'}).then((result)=>{


	// 	console.log(result);


	// });

	// db.collection('Todos').findOneAndDelete({text:'something to do'}).then((result)=>{

	// 	console.log(result);

	// });

	// db.collection('Users').deleteMany({name:'Hari'}).then((result)=>{

	// 	console.log(result);

	// });


	db.collection('Users').findOneAndDelete({

		_id: new ObjectID("5b0b480cc5312963430dcb12")

	}).then((result)=>{

		console.log(result);

	});

	//db.close();

});