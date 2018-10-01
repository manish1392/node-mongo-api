const {MongoClient,ObjectID}  = require('mongodb');


MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //delete Many

    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    
    //delete One
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });


    //find One and delete----Same as delete One but returns the deleted document in case you need it to show.
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });
     
    db.collection('Users').deleteMany({name:'Manish'});

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5b91dae0f6746a3a505fd4e1")
    }).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    });
    
    
    client.close()
});