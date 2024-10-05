const express=require('express')
const app = express()
const router=require('./routes/index')
const session=require('./middleware/session')
const corsMw=require('./middleware/cors')


require('dotenv').config()
app.use(express.json())

//setup cors logic
app.options('*',corsMw)
app.use(corsMw)


//if you run behind a proxy (e.g nginx)
//app.set('trust proxy',1);

//2. configure session middleware

app.use(session)
app.use(router)



app.listen(process.env.PORT,()=>{
    console.log(`Listening to port ${process.env.PORT}`)
})