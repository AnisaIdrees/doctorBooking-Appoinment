import jwt from 'jsonwebtoken'



// admin authentication middleware
const authAdmin = async (req, res, next) => {

    try {

        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not Authorized Login Again'
            })
        }
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (token_decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ success: false, message: 'Not Authorized Login Again' })
        }

        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

export default authAdmin