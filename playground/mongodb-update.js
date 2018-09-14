const {MongoClient,ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id:new ObjectID('5b9800b0fa5fa12bb093d58e')
    // },{
    //     $set:{
    //         completed:true
    //     }
    // },{
    //     returnOriginal:false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5b99c00ceb4560b2a3fe9a27')
    },{
        $set:{
            name:'Manish'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });





    
    // client.close();
});