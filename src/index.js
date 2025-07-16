const express= require('express')
const serverConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')

const app = express()

const cors = require('cors');




app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))


app.get('/hi',(req,res)=>{
    return res.json({message:'hello'})
})
console.log(serverConfig.PORT)

app.listen(5500, async()=>{
    await connectDB();

    console.log(`server started at port ${serverConfig.PORT} ...`)
})