import User from "../modal/user.js";


export const getUserData = async (req, res) => {
    try {
        const { id } = req.user.id
        const user = await User.findById(id)

        if (!user) {
            res.status(402).json({
                success: false,
                message: 'user not found'
            })
        }
        return res.status(201).json({
            success: true,
            userData: {
                name: user.name,
                email: user.email,
                isAccountVerified: user.isAccountVerified
            }
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

