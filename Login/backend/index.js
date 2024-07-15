const express=require('express')
const cors=require('cors')
const EmployeeModel=require('./models/Employees')

const app=express()
app.use(cors())
app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/employees')

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})

app.post('/sign',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employees=>res.json(employees))
    .catch(err=>res.json(err))
})
app.post('/login',(req,res)=>{
    const {name,password}=req.body
    EmployeeModel.findOne({name: name})
    .then(user=>
    {
        if(user){
            if(user.password===password){
                res.json("success")
            }
            else{
                res.json("incorrect password")
            }
            
        }
        else{
            res.json("no such user")
        }
    }
    )
    .catch(err=>res.json(err))
})

