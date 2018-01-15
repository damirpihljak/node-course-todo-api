// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    const db = client.db(dbName);
    // // Get the documents collection
    // const collection = db.collection('Todos');

    // collection.insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable insert todo.', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // const collection = db.collection('Users');

    // collection.insertOne({
    //     name:'Damir Pihljak',
    //     age: 45,
    //     location: 'Tešanj'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable insert user.', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});
