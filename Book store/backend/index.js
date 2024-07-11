import express from 'express';
import {PORT} from './config.js'
import { connectToDb } from './db.js';
import { getDb } from './db.js';
import { ObjectId } from 'mongodb';
import cors from 'cors'

const app=express();
// app.use(express.json())
app.use(cors())
// app.use(cors({
//     origin:"http://localhost:5173/books",
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }))
let db
connectToDb((err)=>{
    if(!err){
      
app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})
db=getDb()
    }
})




app.get('/',(req,res)=>{
    res.status(200).json({msg:'This is the home page'})
})

app.get('/books',(req,res)=>{
    let Books=[]
    db.collection('store')
    .find()
    .sort({title:1})
    .forEach((book)=>{
     Books.push(book)
    })
    .then(()=>{
     res.status(200).json(Books)
    })
    .catch((err)=>{
     res.status(500).json({error:"cannot get the books"})
    })
 
 })
 
app.get('/books/:id',(req,res)=>{
     if(ObjectId.isValid(req.params.id)){
         db.collection('store')
         .findOne({_id:new ObjectId(req.params.id)})
         .then((result)=>{
             res.status(200).json(result)
         })
         .catch((err)=>{
             res.status(500).json({err:'cannot retrive the book'})
         })
     }
 })
 
 app.post('/books',(req,res)=>{
 const book=req.body
 
 db.collection('store')
 .insertOne(book)
 .then(result=>{
     res.status(200).json(result)
 })
 .catch((err)=>{
    //  res.status(500).json({error:"cannot add the book"})
     res.status(500).json(err)
 })
 })
 
 app.delete('/books/:id',(req,res)=>{
     if(ObjectId.isValid(req.params.id)){
         db.collection('store')
         .deleteOne({_id :new ObjectId(req.params.id)})
         .then((result)=>{
             res.status(200).json(result)
         })
         .catch((err)=>{
             res.status(500).json({error:"cannot delete the book"})
         })
     }
     else{
         res.status(500).json({error:"invalid id"})
     }
 })
 
 app.patch('/books/:id',(req,res)=>{
    const update=req.body
    if(ObjectId.isValid(req.params.id)){
     db.collection('store')
     .updateOne({_id: new ObjectId(req.params.id)},{$set : update})
     .then((result)=>{
         res.status(200).json(result)
     })
     .catch((err)=>{
         res.status(500).json({error:"cannot update the book"})
     })
    }
    else{
     res.status(500).json({error:"invalid id"})
    }
 })
