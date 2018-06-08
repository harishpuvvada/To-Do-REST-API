const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();


const users = [{
    _id: userOneId,
    email : 'harry@example.com',
    password: '12345678',
    tokens :[{
        access : 'auth',
        token : jwt.sign({ _id: userOneId, access :'auth'},'abc123').toString()
    }]
},
{
    _id: userTwoId,
    email : 'harish@example.com',
    password: '123456789',
    tokens :[{
        access : 'auth',
        token : jwt.sign({ _id: userTwoId, access :'auth'},'abc123').toString()
    }]
}];

// seed data for todos
const todos = [{
    _id: new ObjectID(),
    text : 'First test todo',
    _creator : userOneId
},
{
    _id: new ObjectID(),
    text : 'second test todo',
    completed : true,
    completedAt:333,
    _creator : userTwoId
}];


const populateTodos = (done)=>{

        Todo.remove({}).then(()=> {

            return Todo.insertMany(todos);

        }).then(() => done());
};

const populateUsers = (done)=>{

        User.remove({}).then(()=> {

            var userOne = new User(users[0]).save();
            var userTwo = new User(users[1]).save();

            return Promise.all([userOne,userTwo])

        }).then(() => done());
};


module.exports = {users,todos,populateTodos,populateUsers};
