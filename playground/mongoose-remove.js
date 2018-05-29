const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


//to remove all
// Todo.remove({}).then((result)=>{

// console.log(result);

// });


// Todo.findOneAndRemove({})



Todo.findByIdAndRemove('5b0dd71a25822787b54068db').then((todo)=>{

console.log(`Todo ${todo}`);

});