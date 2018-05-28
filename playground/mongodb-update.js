// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{

	if(err){

		//return - just to make sure rest of code wont execute
		return console.log('Unable to connect MongoDB server');

	}

	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({

	// 	_id:new ObjectID('5b0b50e2066ccd7639793de8')

	// },{

	// 	$set:{
	// 		completed :false
	// 	}

	// },{
	// 	returnOriginal : false
	// }).then((result)=>{

	// 	console.log(result);
	// })


	db.collection('Users').findOneAndUpdate({

		_id:new ObjectID('5b0b48db1fd035634a66e303')

	},{

		$set:{
			name :'Harish'
		},
		$inc:{
			age : 1
		}

	},{
		returnOriginal : false
	}).then((result)=>{

		console.log(result);
	})



	//db.close();

});