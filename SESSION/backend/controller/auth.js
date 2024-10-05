const authService=require('../services/auth')

const login=async (req,res)=>{
    const {email,password}=req.body;
//basic payload validation
//you should use a validation lib like joi
    if(!email || password){
        return res.status(400).json('bad request params , you need an email and a password')
    }
    //check if credentials passed are correct
    //...
 
   
        try{
                const user=await authService.login(email,password)
                req.session.user=user;
                res.sendStatus(204)
        }catch(err){
            //in prod do not use console.log or console.error
            //use proper logging libraries like winston
                console.error(err)
                 res.status(401).json(err)
        }
    
    // req.session.clientId='abgg' //session object automatically propagated in the session store
    // req.session.Num=5
 
    res.json('you are now logged in')
 }

 
 module.exports={
    login,
   
}
