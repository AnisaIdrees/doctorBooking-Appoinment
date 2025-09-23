import dotenv from "dotenv";
dotenv.config();
import express from 'express'
import cors from 'cors'
const app = express()
import dbConnection from './config/db.js'
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectCloudinary from "./config/cloudinary.js";

dbConnection()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter)

app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.PORT, console.log(`server is running on ${process.env.PORT}`));
