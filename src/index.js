const express= require('express')
const serverConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')
const userRouter = require('./route/userRouter')
const authRouter=require('./route/authRoute')
const studentsRouter = require('./manager/routes/studentsRouter');
const cookieParser = require('cookie-parser');



const app = express()

const cors = require('cors');




app.use(cookieParser());
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRouter);
app.use('/auth', authRouter);
app.use('/students', studentsRouter);

app.get('/hi',(req,res)=>{
    return res.json({message:'hello'})
})
console.log(serverConfig.PORT)

app.listen(5500, async()=>{
    await connectDB();

    console.log(`server started at port ${serverConfig.PORT} ...`)
})