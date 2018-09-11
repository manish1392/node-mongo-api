// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');  //Similar as above statement


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    //--------------------Fetching all records

    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    //--------------------Fetching Particular record

    // db.collection('Todos').find({
    //     _id:new ObjectID('5b96a0529661ae2f78151b56') 
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    },(err)=>{
        console.log('Unable to fetch todos count',err);
    });
    
    db.collection('Users').find({name:'Manish'}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch users',err);
    });

    //---------------------

    // client.close();
});