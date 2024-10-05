const authenticate=(req,res,next)=>{
    if(!req.session || !req.session.user){//not logged in
        const err=new Error('Access denied, You are not logged in')
        err.statusCode=401
        res.json('you are not logged in')
        next(err)
    }
    next()
}
module.exports=authenticate