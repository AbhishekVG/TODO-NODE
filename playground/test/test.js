const express = require('express');
const Mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 4001;
// Mongoose.connect('mongodb://localhost:27017/newTodo');
Mongoose.connect('mongodb://<AbhishekVG>:<opensimsim@M13>@ds125578.mlab.com:25578/todoapp');
const newtodo = Mongoose.model('newTodo', {
    text: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Todo.save().then((data) => {
// console.log("DATA = ", data)
// }).catch((err) => {
//     console.log("Error = ",err)
// });

app.get('/',(req, res) => {
    res.send({output: 'successfuLL'});
});

app.get('/:id',(req, res) => {
    const Todo = new newtodo({text: 'first app'});
    // Todo.save().then((data) => {
    //     console.log("DATA = ", data)
    //     }).catch((err) => {
    //         console.log("Error = ",err)
    //     });
    // console.log('Todo', Todo)
    // Todo.find({id: req.params.id}, function (err, docs) {
    //     console.log("Finding success = ",err)
    //     console.log("Finding success = ",docs)

    //   });
    newtodo.findById(req.params.id).then((data) => {
        console.log("Finding success = ",data, req.params)
        res.status(301).send(data);
    }).catch((err) => {
        console.log("err", err);
    })
});

app.listen(port, (err, x) => {
    console.log(`App is running at ${port} port`);
});
