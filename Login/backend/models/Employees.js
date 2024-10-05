const mongoose=require('mongoose')
const { isEmail }= require('validator')
const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        // required:[true,'Please enter an email'],
        // unique:true,
        // lowercase:true,
        // validate:[isEmail,'please enter a valid email']
    },
    password:{
    type:String,
    // required:[true,'please enter a password'],
    // minlength:[6,'Minimum password length is 8']

    }
    
})

const EmployeeModel=mongoose.model('employees',EmployeeSchema)

module.exports = EmployeeModel