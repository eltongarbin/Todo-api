const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = "586d950e2389c125645f08d511";
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo By Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

User.findById('586c28ef9417ae0a98d8df66').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log('User By Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e))
