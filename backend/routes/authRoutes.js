import { isAuthenticated, login, sendVerifyOtp, signUp, verifyEmail } from "../controllers/userController.js";
import { Router } from 'express'
import { middlewareToProtect } from "../middleware/authMiddleware.js";

const authRouter = Router();

authRouter.post('/signup', signUp)
authRouter.post('/login', login)
authRouter.post('/send-verify-otp', middlewareToProtect, sendVerifyOtp)
authRouter.post('/verify-account', middlewareToProtect, verifyEmail)
authRouter.post('/isAuth', middlewareToProtect, isAuthenticated)


export default authRouter