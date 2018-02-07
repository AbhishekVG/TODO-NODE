const { MongoClient, ObjectID } = require('mongodb');
const dbname = 'TodoApp';
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //delete many
    // client.db(dbname).collection('Todos').deleteMany({title: 'tofo'}).then(results => console.log(results))
    client.db(dbname).collection('Todos').deleteMany({_id: new ObjectID('5a6d7d3d55258b1854c44e68')}).then(results => console.log(results))
    //delete one
    // client.db(dbname).collection('Todos').deleteOne({title: 'First todo'}).then(results => console.log(results))
    // client.db(dbname).collection('Todos').deleteOne({title: 'First todo'}).then(results => console.log(results))
    //find and delete
    // client.db(dbname).collection('Todos').findOneAndDelete({completed: true}).then(results => console.log(results))
    client.close();
})
