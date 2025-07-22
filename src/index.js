const express= require('express')
const serverConfig = require('./config/serverConfig')
const connectDB = require('./config/dbConfig')
const userRouter = require('./route/userRouter')
const authRouter=require('./route/authRoute')
const studentsRouter = require('./manager/routes/studentsRouter');
const cookieParser = require('cookie-parser');
const attendanceRouter = require('./manager/routes/attendenceRouter');
const menuRouter = require('./route/menuRouter');
const studentAuthRoutes = require('./student/routes/studentLoginRouter');
const billRouter=require('./route/billRouter')
const feedbackRouter = require('./student/routes/feedbackRouter');



const app = express()

const cors = require('cors');




app.use(cookieParser());
app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRouter);
app.use('/auth', authRouter);
app.use('/students', studentsRouter);
app.use('/attendance', attendanceRouter);
app.use('/menu', menuRouter);
app.use('/auth', studentAuthRoutes);
app.use('/bill',billRouter)
app.use('/feedback', feedbackRouter);



app.get('/hi',(req,res)=>{
    return res.json({message:'hello'})
})
console.log(serverConfig.PORT)

app.listen(5500, async()=>{
    await connectDB();

    console.log(`server started at port ${serverConfig.PORT} ...`)
})