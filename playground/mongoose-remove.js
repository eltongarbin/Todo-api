const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '586ee9fd4a965335a0b53bc7'}).then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});

Todo.findByIdAndRemove('586ee9fd4a965335a0b53bc7').then((todo) => {
  console.log(JSON.stringify(todo, undefined, 2));
});
