import User from "../modal/user.js";
import transporter from "../utils/email.js";
import { signinToken } from "../utils/token.js";





// *****************  signUp  *******************// 
export const signUp = async (req, res) => {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(402).json({
            success: false,
            message: 'all feild are required',
        })
    }
    // check user 
    const isExist = await User.findOne({ email })
    if (isExist) {
        return res.status(401).json({
            success: false,
            message: 'user already exist'
        })
    }

    try {
        // create user
        const user = await User.create({
            ...req.body,
        })
        const token = signinToken(user)

        //sending welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to Code by Aneesa',
            // text: `Welcome to CodeByAneesa website . Your account has been created with email id:${email}...`
            html: `
      <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: #f70ff7; padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Code By Aneesa</h1>
          </div>
          
          <!-- Body -->
          <div style="padding: 30px;">
            <h2 style="color: #333;">Welcome to Code By Aneesa 🎉</h2>
            <p style="color: #555; font-size: 15px;">
              Your account has been successfully created with the email ID:
              <b style="color:#f70ff7;">${email}</b>
            </p>
            <p style="color: #555; font-size: 15px;">
              We’re excited to have you on board! Start exploring our website and enjoy the features made just for you.
            </p>
            
            <!-- Button -->
            <div style="text-align: center; margin-top: 20px;">
              <a href="https://your-website-link.com" target="_blank" 
                 style="background: #f70ff7; color: white; text-decoration: none; padding: 12px 25px; border-radius: 30px; font-size: 16px;">
                Visit Website
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f2f2f2; padding: 15px; text-align: center; font-size: 13px; color: #777;">
            © 2025 Code By Aneesa. All rights reserved.
          </div>
        </div>
      </div>
      `
        }
        await transporter.sendMail(mailOptions)

        res.status(201).json({
            success: true,
            message: 'sign up successfully',
            token,
            user,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'sign up failed'
        })
    }

}

//********************  login  ******************//
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email }).select('+password')

        if (!email || !user.comparedPassword(password)) {
            res.status(401).json({
                success: false,
                message: 'invalid credential',
            })
        }

        const userWithoutPaswd = user.toObject();
        delete userWithoutPaswd.password

        const token = signinToken(user)
        res.status(201).json({
            user: userWithoutPaswd,
            token,
            success: true,
            message: 'user logged in successfully !'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'login failed'
        })
    }
}

//**************** user very account ************//
export const sendVerifyOtp = async (req, res) => {

    try {
        const { userId } = req.body;
        const user = await User.findById(userId)

        if (user.isAccountVerified) {
            return res.status(401).json({
                success: false,
                message: 'Account Already verified'
            })
        }
        const otp = String(Math.floor(10000 + Math.random() * 90000))
        user.verifyOtp = otp
        user.verifyOtpExpiredAt = Date.now() + 24 * 60 * 60 * 1000

        await user.save()
        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Account Verification OTP',
            html: `
    <div style="max-width: 500px; margin: auto; padding: 20px; 
                font-family: Arial, sans-serif; 
                border: 1px solid #ddd; 
                border-radius: 10px; 
                background: #f9f9f9;">
      
      <h2 style="text-align: center; color: #4A90E2;">Account Verification</h2>
      
      <p style="font-size: 16px; color: #333;">
        Hello,
      </p>
      
      <p style="font-size: 16px; color: #333;">
        Your OTP is:
      </p>
      
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 24px; font-weight: bold; 
                     color: #4A90E2; 
                     letter-spacing: 2px;
                     padding: 10px 20px; 
                     border: 2px dashed #4A90E2; 
                     border-radius: 8px;
                     background: #fff;">
          ${otp}
        </span>
      </div>
      
      <p style="font-size: 14px; color: #555;">
        Verify your account using this OTP. 
        This code will expire in <b>10 minutes</b>. 
        If you did not request this, please ignore this email.
      </p>
      
      <p style="font-size: 14px; color: #777; margin-top: 20px; text-align: center;">
        © ${new Date().getFullYear()} Code by Aneesa. All rights reserved.
      </p>
    </div>
  `
        }
        await transporter.sendMail(mailOption)
        res.status(201).json({
            success: true,
            message: 'Verification OTP Sent on Email'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'send otp error'
        })
    }

}

//****************  Verify Email ****************//
export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;
    if (!userId || !otp) {
        return res.status(401).json({
            success: false,
            message: 'Missing Details'
        })
    }
    try {

        const user = await User.findById(userId)
        if (!user) {
            return res.json({
                success: false,
                message: 'User not Found'
            })
        }
        if (user.verifyOtp === '' || user.verifyOtp !== otp) {
            return res.json({
                success: false,
                message: 'Invalid OTP',
            })
        }
        if (user.verifyOtpExpiredAt < Date.now()) {
            return res.json({
                success: false,
                message: 'OTP Expired'
            })
        }
        user.isAccountVerified = true;
        user.verifyOtp = ''
        user.verifyOtpExpiredAt = 0
        await user.save()

        return res.json({
            success: true,
            message: 'Email verified successfully !'
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

//*************** isAuthenticated or not *******//
export const isAuthenticated = async (req, res) => {
    try {
        return res.status(201).json({
            success: true,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//*************** send reset otp **************//
export const sendResetOtp = async (req, res) => {

    const { email } = req.body;
    if (!email) {
        return res.status(401).json({
            success: false,
            message: 'Email is Required'
        })
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User not found'
            })
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000))
        user.resetOtp = otp
        user.resetOtpExpiredAt = Date.now() + 15 * 60 * 1000

        await user.save()

        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Password Reset OTP',
            html: `<div style="max-width: 500px; margin: auto; padding: 20px; 
              font-family: Arial, sans-serif; 
              border: 1px solid #ddd; 
              border-radius: 10px; 
              background: #f9f9f9;">
              <h2 style="text-align: center; color: #4A90E2;">Password Reset OTP</h2>
             <p style="font-size: 16px; color: #333;">Hello,</p>
             <p style="font-size: 16px; color: #333;">Your One-Time Password (OTP) for resetting your account password is:</p>
            <div style="text-align: center; margin: 20px 0;">
             <span style="font-size: 24px; font-weight: bold; 
                   color: #4A90E2; 
                   letter-spacing: 2px;
                   padding: 10px 20px; 
                   border: 2px dashed #4A90E2; 
                   border-radius: 8px;
                   background: #fff;">
                ${otp}
            </span>
        </div>
         <p style="font-size: 14px; color: #555;">
         Please use this OTP to proceed with resetting your password. 
        This code is valid for <b>10 minutes</b>. If you did not request this, please ignore this email.
      </p>
    
    <p style="font-size: 14px; color: #777; margin-top: 20px; text-align: center;">
       © ${new Date().getFullYear()} Code by Aneesa. All rights reserved.
      </p>
      </div>`



        }

        await transporter.sendMail(mailOption)
        return res.status(201).json({
            success: true,
            message: 'OTP sent to your email'
        })
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message
        })
    }

}

//*************** Reset User password **************//
export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    if (!email || !otp || !newPassword) {
        return res.status(401).json({
            success: false,
            message: 'Email OTP , and ,new password are required'
        })
    }

    try {
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'user not found'
            })
        }
        if (use.resetOtp === '' || user.resetOtp !== otp) {
            return res.status(401).json({
                success: false,
                message: 'invalid OTP'
            })
        }
        if (user.resetOtpExpiredAt < Date.now()) {
            return res.json({
                success: false,
                message: 'OTP Expired',
            })
        }
        user.resetOtp = '';
        user.resetOtpExpiredAt = 0
        await user.save()
        return res.status(201).json({
            success: true,
            message: 'passeord has been reset successfully',
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}
