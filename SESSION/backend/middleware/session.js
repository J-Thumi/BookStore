const redisClient=require('../database/redis')
const session=require('express-session')
const RedisStore=require('connect-redis').default//config where we will store our sessions
// Use `.default` to get the default export

module.exports=session({
    store: new RedisStore({
        client:redisClient, 
        prefix: 'myapp:'}),// Prefix for Redis keys
    secret:'my secret',
    saveUninitialized: false,
    resave:false,
    name:'sessionId',
    cookie:{
        secure: false,//accept only from https set to true during production
        httpOnly:true,//prevents clients side js from reading the cookie
        maxAge: 1000*60*30//session age in millisec
    }
})