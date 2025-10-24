// import jwt from 'jsonwebtoken';
// import User from '../modal/user.js'


// export const middlewareToProtect = async (req, res, next) => {

//     try {

//         const token = req.headers.authorization?.split(" ")[1];
//         if (!token) {
//             return res.status(401).json({ success: false, message: "Token not provided!" })
//         }

//         const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = await User.findById(tokenDecoded.id).select("-password");

//         if (!tokenDecoded.id) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Not Authorized, Login Again'
//             })
//         }
//         req.body.userId = tokenDecoded.id;
//         next();
//     }

//     catch (error) {
//         return res.status(401).json({ success: false, message: "Invalid / Expired token!" })
//     }
// }
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import User from '../modal/user.js';

export const middlewareToProtect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("🔹 Incoming token:", token);
    console.log("🔹 JWT Secret:", process.env.JWT_SECRET);

    if (!token) {
      return res.status(401).json({ success: false, message: "Token not provided!" });
    }

    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("🔹 Decoded token:", tokenDecoded);

    const user = await User.findById(tokenDecoded.id).select("-password");
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found! Login again." });
    }

    req.user = user; // ye line GET aur POST dono ke liye kaafi hai
    next();

  } catch (error) {
    console.log("❌ JWT Verify Error:", error.message);
    return res.status(401).json({ success: false, message: "Invalid / Expired token!" });
  }
};
