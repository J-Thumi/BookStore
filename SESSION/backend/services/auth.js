const userDAO=require('../dao/user')
const bcrypt=require('bcrypt')


const login=async (email,password)=>{
// lookup user via email
try{
    const user=await userDAO.findUserByEmail(email)
//bcrypt.compare always returns resolved promise with boolean value
    const match = await bcrypt.compare(password,user.pwHash)

    if(match){
        return {id:user.id,roles:user.roles}
    }
    else{
        return Promise.reject("Wrong username or password")
    }
}
catch(err){
    console.log('no user like you')
}
  
}

module.exports={login}