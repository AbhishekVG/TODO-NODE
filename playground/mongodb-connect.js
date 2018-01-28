const { MongoClient, ObjectID} = require('mongodb');
console.log(new ObjectID());
const dbname = 'TodoApp';
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    // client.db(dbname).collection('Todos').insertOne({
    //  title: 'First todo',
    //  completed: false   
    // }, (err, res) => {
    //     if(err) {
    //        return console.log('Unable to insert data', err)
    //     }
    //     console.log("item inserted", JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
    // })
    // client.db(dbname).collection('Todos').find({title: 'tofo'}).toArray((err, data) => {console.log('data', data)})
    client.db(dbname).collection('Todos').find({
        title: 'tofo',
        _id: new ObjectID('5a6d46c922cf1126d41b061d')
    }).toArray().then((data) => {console.log('data', data)})
    client.close();
})
