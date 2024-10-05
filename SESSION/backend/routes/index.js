const express=require('express')
const authcontroller=require('../controller/auth')
const profileController=require('../controller/profile')
const router= express.Router()
const authenticate=require('../middleware/authenticate')


//3.login
//login end point 
router.post('/login',authcontroller.login)//instead of having the function to handle the route create a controller folder


//4. plug in another middleware that will check if user is authenticated or not
//all requests plugged in after this middleware will only be accessible if user is logged in
router.use(authenticate)


//5. plug in all routes user can access if logged in
 router.get('/profile',profileController.profile)

 module.exports=router