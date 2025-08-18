import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    address: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    verifyOtp: {
        type: String,
        default: '',
    },
    verifyOtpExpiredAt: {
        default: 0,
        type: Number,
    },
    resetOtp: {
        type: String,
        default: '',
    },
    resetOtpExpiredAt: {
        type: Number,
        default: 0,
    },
    // verificationCode: String,
}, { timestamps: true })

// hash password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next()
    }
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

// custom method / compared password
userSchema.methods.comparedPassword = function (plainTextPass) {
    return bcrypt.compare(plainTextPass, this.password)
}

const User = mongoose.model.user || mongoose.model('user', userSchema)
export default User;
