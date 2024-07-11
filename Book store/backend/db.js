import { MongoClient } from "mongodb";
import {MONGOuri} from './config.js'
let dbConnection
export const connectToDb =(cb)=>{
    MongoClient.connect(MONGOuri)
    .then((client)=>{
        dbConnection=client.db()
        return cb()
    })
    .catch((err)=>{
        return cb(err)
    })
}

export const getDb=()=>dbConnection