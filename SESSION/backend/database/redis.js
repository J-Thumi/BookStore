//1. configue our redis since its running ona specific port
const Redis=require('ioredis')
// Use `ioredis` to create a Redis client
const redisClient=new Redis({
    port: 6379,
    host:'localhost'
 })

 module.exports= redisClient
 