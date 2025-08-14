import dotenv from "dotenv";
dotenv.config()
import express from 'express'
import cors from 'cors'
const app = express()
import dbConnection from './config/db.js'
import authRouter from "./routes/authRoutes.js";


dbConnection()

// middlewares
app.use(express.json())
app.use(cors())

app.use('/api', authRouter)

app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT}`));
