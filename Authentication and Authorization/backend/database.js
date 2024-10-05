const {MongoClient}=require('mongodb')
require('dotenv').config()

let dbConnection

 const connectToDb=(cb)=>{
    
    MongoClient.connect(process.env.MONGODB)
    .then(client=>{
        dbConnection=client.db()
        return cb()
    })
    .catch(error=>{
        return cb(err)
    })
}
 const getDb=()=>dbConnection

 module.exports ={
    getDb,
    connectToDb
 }
 