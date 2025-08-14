import { login, signUp } from "../controllers/userController.js";
import {Router} from 'express'

const authRouter = Router();

authRouter.post('/signup',signUp)
authRouter.post('/login', login)


export default authRouter