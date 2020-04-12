//crud create read delete update

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

// const{MongoClient,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

 
MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)=>{
    if(error)
    {
       return console.log(error)
    }
      console.log('Connected correctly')
      const db = client.db(databaseName)
      

    //   db.collection('users').updateOne({
    //     _id : ObjectID("5e87130bddd656819a250df8")
    //   },{
    //     $inc :{
    //       age: 3
    //     }
    //   }).then((result)=>{
    //     console.log(result)
    //   }).catch((error) =>{
    //        console.log(error)
    //   }) 

    // //   db.collection('users').findOne({name : 'Dhruv'},(error,user)=>{
           
    // //      if(error)
    // //      {
    // //          return console.log('Unable to  fetch')
    // //      }

    // //      console.log(user)
    // //   })

    // //   db.collection('users').find({age:'19'}).toArray((error,users)=>{
    // //       console.log(users)
    // //   })
            
    // //   db.collection('users').find({age:'19'}).count((error,count)=>{
    // //     console.log(count)
    // // })

    // // db.collection('Tasks').findOne({_id: new ObjectID("5e87185d63173181e879ab9d")},(error,task)=>{
           
    // //          if(error)
    // //          {
    // //              return console.log('Unable to  fetch')
    // //          }
    
    // //          console.log(task)
    // //       })
    // //       db.collection('Tasks').find({completed : false}).toArray((error,tasks)=>{
    // //         console.log(tasks)
    // //     })
    // })
              // db.collection('Tasks').updateMany({
              //   completed : false
              // },{
              //   $set :{
              //     completed : true
              //   }
              // }).then((result)=>{
              //       console.log(result)
              //     }).catch((error) =>{
              //          console.log(error)
              //     })  
   

              // db.collection('Tasks').deleteOne({
              //   _id : ObjectID("5e871496bac98d81a7f16afa")
              // }
              // ).then((result)=>{
              //       console.log(result)
              //     }).catch((error) =>{
              //          console.log(error)
              //     })  


            
   
  })


