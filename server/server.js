var express =  require('express');
var bodyParser = require('body-parser'); //json to Object

var {mongoose} = require('./db/mongoose'); //for mongoose config
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



var app = express();

app.use(bodyParser.json()); //middleware 

app.post('/todos',(req,res)=>{

	console.log(req.body);

	var todo = new Todo({
		text : req.body.text
	})

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e); //setting status before sending error
	});

});


app.get('/todos', (req,res)=>{

	Todo.find().then((todos)=>{

		res.send({
			todos
		});

	},(e)=>{

		res.status(400).send(e);

	});


});


app.listen(3000,()=>{
	console.log('Started on port 3000')
})

module.exports = {app}; //for test files

// ./mongod --dbpath ~/mongo-data