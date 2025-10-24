import { isAuthenticated, login, getProfile, resetPassword, sendResetOtp, sendVerifyOtp, signUp, verifyEmail } from "../controllers/authController.js";
import { Router } from 'express'
import { middlewareToProtect } from "../middleware/authMiddleware.js";

const authRouter = Router();

authRouter.post('/signup', signUp)
authRouter.post('/login', login)
authRouter.get('/profile', middlewareToProtect, getProfile)
authRouter.post('/send-verify-otp', middlewareToProtect, sendVerifyOtp)
authRouter.post('/verify-account', middlewareToProtect, verifyEmail)
authRouter.post('/isAuth', middlewareToProtect, isAuthenticated)
authRouter.post('/send-reset-otp', sendResetOtp)
authRouter.post('/reset-password', resetPassword)


export default authRouter



