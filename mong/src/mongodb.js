// const mongodb = require('mongodb');

// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const {MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database!");
    }
    

    const db = client.db(databaseName);
    const id = new ObjectID()
    console.log(id);
    console.log(id.getTimestamp());
    //console.log("connected..");

    //inserting simple jsong object in database.

    //const db = client.db(databaseName);
    db.collection('Users').insertOne({
    _id : id,
    name : 'Rohit',
    age : 25

    },(error, result) => {
     if(error){
         return console.log('unable to connet user')
     }

    console.log(result.ops)

})

    //inserting many data into database

    // db.collection('Users').insertMany([
    // {
    //    name : 'Roman',
    //     age : 24
    // },{
    //     name : 'pop',
    //     age : 23
    // }],(error, result) => {
    //  if(error){
    //      return console.log('unable to connet user')
    //  }

    // console.log(result.ops)

    //     })
   
    // });





// MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return console.log("Unable to connect to database!");
//     }
//     const db = client.db(databaseName);

//     db.collection('users').findOne({ name: 'Jen' }, (error, data) => {
//         if (error) {
//             return console.log(err);
//         }
//         console.log(data);
//     });

//     db.collection('users').find({ age: 27 }).toArray((error, data) => {
//         console.log(data);
//     });



 });