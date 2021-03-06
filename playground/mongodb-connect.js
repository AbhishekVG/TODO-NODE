const { MongoClient, ObjectID} = require('mongodb');
console.log(new ObjectID());
const dbname = 'TodoApp';
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    client.db(dbname).collection('Todos').insertOne({
     title: 'First todo',
     completed: false   
    }, (err, res) => {
        if(err) {
           return console.log('Unable to insert data', err)
        }
        console.log("item inserted", JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    })
    client.close();
});
