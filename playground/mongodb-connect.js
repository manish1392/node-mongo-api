const MongoClient = require('mongodb').MongoClient;


// For Mongo version 2.X
// The callback function return database


// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
//     if(err){
//         return console.log('Unable to connect to MongoDB server');
//     }
//     console.log('Connected to MongoDB server');

//     db.collection('Todos').insertOne({
//         text:'Something to do',
//         completed:false
//     },(err,result)=>{
//         if(err){
//             return console.log('Unable to insert todo',err);
//         }
//         console.log(JSON.stringify(result.ops,undefined,2));
//     });

//     db.close();
// });





// For Mongo version 3.X
// The callback function return client

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });


    db.collection('Users').insertOne({
        name:'Manish',
        age:24,
        location:'Chandigarh'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert user',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });


    client.close();
});