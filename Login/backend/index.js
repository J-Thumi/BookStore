const express=require('express')
const cors=require('cors')
const EmployeeModel=require('./models/Employees')
const bcrypt=require('bcrypt')
const app=express()
app.use(cors())
app.use(express.json())

const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/employees')

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})

app.post('/sign',async(req,res)=>{
    try{
        if(req.body.password==req.body.confirmPassword){
            const employee=new EmployeeModel()
            employee.email=req.body.email
            employee.name=req.body.name
                const encrypt= await bcrypt.hash(req.body.password,10)
                employee.password=encrypt
            const result= await employee.save()
             res.json('user added successfully')
        }
        else{
            res.json("password confirm do not match")
        }
   
    }
    catch(err){
        res.json(err)
    }
})
app.post('/login',(req,res)=>{
    const {name,password}=req.body
    EmployeeModel.findOne({name: name})
    .then( async (user)=>
    {
        try{
        if(user){
                    const encrypt= await bcrypt.compare(password,user.password)
            if(encrypt){
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
    catch(err){
        res.json(err)
    }}
    )
    .catch(err=>res.json(err))
})

