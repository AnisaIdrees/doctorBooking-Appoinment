import { isAuthenticated, login, getProfile, resetPassword, sendResetOtp, sendVerifyOtp, signUp, verifyEmail, updateProfile } from "../controllers/authController.js";
import { Router } from 'express'
import { middlewareToProtect } from "../middleware/authMiddleware.js";
import upload from "../middleware/multer.js";


const authRouter = Router();

authRouter.post('/signup', signUp)
authRouter.post('/login', login)
authRouter.get('/profile', middlewareToProtect, getProfile)
authRouter.post('/update-profile', upload.single('image'),middlewareToProtect, updateProfile)
authRouter.post('/send-verify-otp', middlewareToProtect, sendVerifyOtp)
authRouter.post('/verify-account', middlewareToProtect, verifyEmail)
authRouter.post('/isAuth', middlewareToProtect, isAuthenticated)
authRouter.post('/send-reset-otp', sendResetOtp)
authRouter.post('/reset-password', resetPassword)


export default authRouter



