import jwt from 'jsonwebtoken';
import User from '../modal/user.js'


export const middlewareToProtect = async (req, res, next) => {

    try {

        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Token not provided!" })
        }

        const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(tokenDecoded.id).select("-password");

        if (!tokenDecoded.id) {
            return res.status(401).json({
                success: false,
                message: 'Not Authorized, Login Again'
            })
        }
        req.body.userId = tokenDecoded.id;
        next();
    }

    catch (error) {
        return res.status(401).json({ success: false, message: "Invalid / Expired token!" })
    }
}
