const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}) briše sve u kolekciji
// Todo.findOneAndRemove
Todo.findByIdAndRemove('5a649cbcb97e92180c7a9599').then((todo) => {
    console.log(todo);
});