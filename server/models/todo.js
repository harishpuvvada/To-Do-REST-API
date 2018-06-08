var mongoose = require('mongoose');


var Todo = mongoose.model('Todo',{

	text:{

		type: String,
		required : true,
		minlength : 1,
		trim : true

	},
	completed:{

		type : Boolean,
		default : false

	},
	completedAt:{

		type : Number,
		default: null
	},

	_creator :{ //for association betweeen user and todos
		type: mongoose.Schema.Types.ObjectId,
		require: true
	}

});

module.exports = {Todo};
