var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://root:root@ds137720.mlab.com:37720/harish-todo-api-db' || 'mongodb://localhost:27017/TodoApp');


// For mongoose configuration
module.exports ={
	mongoose : mongoose
}