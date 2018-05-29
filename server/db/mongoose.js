var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');


// For mongoose configuration
module.exports ={
	mongoose : mongoose
}