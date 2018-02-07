const Mongoose = require('mongoose');

Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost:27017/TodoList2');

const todo2 = Mongoose.model('todos2', {
    text: {
        type: String,
        required: true,
        minlength: 4 ,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null,
    }
});

const savingTodo = new todo2({text: true});

savingTodo.save().then((x) => {console.log('success',x)})
.catch((err) => {console.log('error',err)});