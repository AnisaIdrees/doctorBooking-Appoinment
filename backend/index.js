import dotenv from "dotenv";
dotenv.config(); 
import express from 'express'
import cors from 'cors'
const app = express()
import dbConnection from './config/db.js'
import authRouter from "./routes/authRoutes.js";


dbConnection()

// middlewares
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)

app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT}`));
console.log("ENV TEST:", process.env.PORT,process.env.JWT_SECRET);
console.log(process.env.SMTP_USER)
