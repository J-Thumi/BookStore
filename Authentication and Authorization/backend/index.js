const express = require('express')
const cors=require('cors')
const axios=require('axios')
const app = express()
require('dotenv').config()
app.use(cors())
app.use(express.json())


const {connectToDb, getDb } =require('./database')

let db
connectToDb((error)=>{
    if(!error){
    }
    app.listen(process.env.PORT,()=>{
        console.log(`Listening to port ${process.env.PORT}`)
        
    })
    db=getDb()
})

app.get('/',(req,res)=>{
    let users=[]
    
    db.collection('users')
    .find()
    .forEach(user=>{
        return users.push(user)
    })
    .then(()=>{
        res.status(200).json(users)
    })
    .catch(err=>{
        res.status(500).json({error:"server error"})
    })
})


app.post('/',(req,res)=>{
    const user=req.body
    db.collection('users')
    .insertOne(user)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(500).json({error:"cannot add the user to the database"})
    })
})