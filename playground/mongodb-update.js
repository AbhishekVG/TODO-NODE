const { MongoClient, ObjectID } = require('mongodb');
const dbname = 'TodoApp';
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    client.db(dbname).collection('Todos').findOneAndUpdate({_id: new ObjectID('5a6d7d4d970ba726ac2ad8cd')},
        {$set: {completed: true}}, {returnOriginal: false}).then(results => console.log(results))
    client.close();
})