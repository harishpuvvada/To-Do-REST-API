var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect( process.env.MONGODB_URI || 'mongodb://root:root@ds137720.mlab.com:37720/harish-todo-api-db');


// For mongoose configuration
module.exports ={
	mongoose : mongoose
}
