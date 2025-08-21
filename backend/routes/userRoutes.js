import express from 'express';
import { middlewareToProtect } from '../middleware/authMiddleware.js';
import { getUserData } from '../controllers/userController.js';
const userRouter = express.Router();

userRouter.get('/data', middlewareToProtect , getUserData)

export default userRouter