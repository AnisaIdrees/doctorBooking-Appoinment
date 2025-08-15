import User from "../modal/user.js";
import { signinToken } from "../utils/token.js";

// *******************  signUp  *********************// 
export const signUp = async (req, res) => {
    const { name, email, address, password } = req.body

    if (!name || !email || !address || !password) {
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
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString()
        const user = await User.create({
            ...req.body,
            verificationCode
        })
        const token = signinToken(user)
        res.status(201).json({
            success: true,
            message: 'sign up successfully',
            token,
            user,
            verificationCode
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: 'sign up failed'
        })
    }

}

//********************  login  ************************/
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